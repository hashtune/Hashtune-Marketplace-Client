import { GetServerSidePropsContext } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import styles from './User.module.scss';

import client from '../../lib/apollo-client';
import React, { useEffect, useRef, useState } from 'react';
import { Navbar } from '../../components/Layout/Navbar/Navbar';
import { randomMockMedia } from '../../utils/index';
import ListArtwork from '../../components/Home/ListArtwork/ListArtwork';
import { ListArtworkFields } from '../../lib/interfaces/ArtworkInterfaces';
import SortDropDown from '../../components/Home/ListContainer/SortDropdown';
import { queryProfileData } from '../../graphql/user/queries/profileData';

// TODO: Refactor page/query

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
	const { user } = ctx.query;
	const singleUser = await client.query({
		query: queryProfileData,
		variables: { handle: user }
	});

	const userData = singleUser.data.findUser.Users;
	if (userData && userData[0]) {
		return {
			props: {
				singleUser: userData[0]
			}
		};
	}

	return {
		props: {
			singleUser: null
		}
	};
}

const profilePicture = `/dist/images/mock/users/${randomMockMedia(12)}.png`;
// const profilePicture = `/dist/images/mock/users/15.png`;
const coverImage = `/dist/cover.png`;

const artworkImage = `/dist/images/mock/artworks/${randomMockMedia(19)}.png`;
export default function User(singleUser: any) {
	// TODO: If this user does not exist then return 404
	const artworkContainer: React.RefObject<HTMLDivElement> = useRef(null);
	singleUser = singleUser.singleUser;
	const [artworks, setArtworks] = useState(singleUser?.created);
	const [tabState, setTabState] = useState('Created');
	useEffect(() => {
		if (tabState === 'Created') {
			setArtworks(singleUser?.created);
		} else {
			setArtworks(singleUser?.owned);
		}
	}, [tabState, singleUser]);
	return (
		<div>
			<Navbar />
			<main>
				<div className={styles['user-profile']}>
					<div className={styles['user-profile__cover']}>
						<Image
							alt="list cover image"
							src={coverImage}
							className={styles['user-profile__cover--image']}
							layout="fill"
						/>
					</div>
				</div>

				<div className="container_relative">
					<div className={styles['user-profile-details']}>
						<div className={styles['user-profile-details__picture']}>
							<Image src={profilePicture} width="180" height="180" alt={singleUser?.fullName} />
						</div>
						<div className={styles['user-profile-details__content']}>
							<div className={styles['user-profile-details__content-primary']}>
								<div className={styles['user-profile-details__content--name-status']}>
									{singleUser?.fullName}
									{singleUser?.isApprovedCreator ? (
										<div className={styles['user-profile-details__content-status']}>
											<svg fill="#fff">
												<use xlinkHref="dist/icons/sprite.svg#hashtune-check"></use>
											</svg>
										</div>
									) : (
										<></>
									)}
								</div>
								<p className={styles['user-profile-details__content--username']}>@{singleUser?.handle}</p>
							</div>
						</div>
						<a
							href={`/${singleUser?.handle}/edit-profile`}
							className={styles['user-profile-details--edit-button'] + ' btn'}
						>
							Edit Profile
						</a>
					</div>

					<div className={styles['user-profile-content']}>
						<aside className={styles['user-profile-content__sidebar']}>
							<div className={styles['user-profile-content__sidebar-section']}>
								<h3>Bio</h3>
								{singleUser?.bio}
							</div>
							<div className={styles['user-profile-content__sidebar-section']}>
								<h3>Links</h3>
								<div className={styles['user-profile-content__sidebar-section__socials']}>
									<a href="">
										<svg>
											<use xlinkHref="dist/icons/sprite.svg#hashtune-globe"></use>
										</svg>
									</a>
									<a href="">
										<svg>
											<use xlinkHref="dist/icons/sprite.svg#hashtune-twitter"></use>
										</svg>
									</a>
									<a href="">
										<svg>
											<use xlinkHref="dist/icons/sprite.svg#hashtune-instagram"></use>
										</svg>
									</a>
									<a href="">
										<svg>
											<use xlinkHref="dist/icons/sprite.svg#hashtune-youtube"></use>
										</svg>
									</a>
								</div>
							</div>
						</aside>
						<div className={styles['user-profile-content__artworks']}>
							<div className={styles['artworks'] + ' container'}>
								<div className={'tab-nav' + ' ' + 'tab-nav__container'}>
									<div className="tab-nav__indicators">
										<a className="tab-nav__indicators--element" onClick={() => setTabState('Created')}>
											Created
										</a>
										<a className="tab-nav__indicators--element" onClick={() => setTabState('Collected')}>
											Collected
										</a>
									</div>
									<div className="tab-nav__dropdown">
										<SortDropDown />
									</div>
								</div>

								<div ref={artworkContainer} className={styles['artworks__container']}>
									{artworks &&
										artworks.length > 0 &&
										artworks?.map((userArtwork: ListArtworkFields) => (
											<div key={userArtwork.id} className={styles['artworks__item']}>
												<Link href={`/${singleUser?.handle}/${userArtwork.id}`}>
													<a>
														<ListArtwork userPage={true} imageSize={280} artwork={userArtwork} />
													</a>
												</Link>
											</div>
										))}
								</div>
							</div>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
}
