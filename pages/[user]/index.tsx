import Image from 'next/image';
import Link from 'next/link';
import styles from './User.module.scss';
import React, { useEffect, useRef, useState } from 'react';
import { Navbar } from '../../components/Layout/Navbar/Navbar';
import { randomMockMedia } from '../../utils/index';
import ListArtwork from '../../components/Home/ListArtwork/ListArtwork';
import SortDropDown from '../../components/Home/ListContainer/SortDropdown';
import { Session } from "../../hooks/session";
import { useProfileQueryQuery } from "../../graphql/generated/apolloComponents";
import { GetServerSidePropsContext } from "next";
import router from "next/router";
import UserActivity from '../../components/UserProfile/userActivity/UserActivity';
export { getServerSideProps } from "../../hooks/session";

export default function User(ctx: GetServerSidePropsContext & {session: Session}) {
	const profilePicture = `/dist/images/mock/users/${randomMockMedia(12)}.png`;
	const coverImage = `/dist/cover.png`;
	let handle = ""
	if (typeof window !== 'undefined') {
		 handle = router.query.user as string;

	}
	// TODO: If this user does not exist then return 404
	const artworkContainer: React.RefObject<HTMLDivElement> = useRef(null);
	const { data, loading, error } = useProfileQueryQuery({
		variables: {
		      handle: handle
	 }
	 });

	 const [activityLog, setActivityLog] = React.useState(false);

	
	let singleUser = data?.findUser?.Users?.[0] ?? null;
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
			<Navbar session={ctx.session}/>
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
										<a className={tabState === "Created" ? "tab-nav__indicators--element-active" : "tab-nav__indicators--element"} onClick={() => setTabState('Created')}>
											Created
										</a>
										<a className={tabState === "Collected" ? "tab-nav__indicators--element-active" : "tab-nav__indicators--element"} onClick={() => setTabState('Collected')}>
											Collected
										</a>
										<a className={tabState === "Activity Log" ? "tab-nav__indicators--element-active" : "tab-nav__indicators--element"} onClick={() => {setActivityLog(!activityLog); setTabState('Activity Log')}}>
											Activity Log

										</a>

									</div>
									<div className="tab-nav__dropdown">
										<SortDropDown />
									</div>
								</div>

								<div ref={artworkContainer} className={styles['artworks__container']}>
									{artworks &&
										artworks.length > 0 &&
										artworks?.map((userArtwork: any) => (
											<div key={userArtwork.id} className={styles['artworks__item']}>
												<Link href={`/${singleUser?.handle}/${userArtwork.handle}`}>
													<a>
														<ListArtwork userPage={true} imageSize={280} artwork={userArtwork} />
													</a>
												</Link>
											</div>
										))}
								</div>
								{activityLog && <UserActivity/>}


							</div>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
}
