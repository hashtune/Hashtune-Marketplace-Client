import React, { useEffect } from "react";
import Image from "next/image";
import { GetServerSideProps } from "next";
import styles from "./UserActivity.module.scss";
import Link from "next/link";
import { AudioPlayerContext } from "../../../hooks/audioPlayer";
import PlayerContainer from "../../Audio/PlayerContainer";

const UserActivity = () => {
  // let cover = artwork.image || "/";
  let coverImage = "/images/artwork.png"; //Should be from database but that breaks it

  let date = new Date("30 10 2021 13:00:00");
  let creatorImage = "/dist/images/mock/users/26.png";

  return (
    <table className={styles["table"] + " table"}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Artwork Info</th>
          <th>From</th>
          <th>To</th>
          <th>Amound (BNB)</th>
          <th>Time</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td data-label="Type">
            <span>Auction Created</span>
          </td>
          <td data-label="Artwork Info">
            <div className="table-artwork">
              <div className="table-artwork__image">
                <Image
                  src="/dist/images/mock/artworks/1.png"
                  width="50%"
                  height="50%"
                />
              </div>
              <div className="table-artwork__content">
                <h3>Hey Moon</h3>
                <p>John Maus</p>
              </div>
            </div>
          </td>
          <td data-label="From">
            <span>2</span>
          </td>
          <td data-label="To">
            <span>50</span>
          </td>
          <td data-label="Amount">
            <span>N/A</span>
          </td>
          <td data-label="Time">
            <span>1s</span>
          </td>
        </tr>
        <tr>
          <td data-label="Type">
            <span>Sale Ended</span>
          </td>
          <td data-label="Artwork Info">
            <div className="table-artwork">
              <div className="table-artwork__image">
                <Image
                  src="/dist/images/mock/artworks/2.png"
                  width="50%"
                  height="50%"
                />
              </div>
              <div className="table-artwork__content">
                <h3>Hey Moon</h3>
                <p>My Bloody valentine</p>
              </div>
            </div>
          </td>
          <td data-label="From">
            <span>3</span>
          </td>
          <td data-label="To">
            <span>30</span>
          </td>
          <td data-label="Amount">
            <span>4.00</span>
          </td>
          <td data-label="Time">
            <span>2h</span>
          </td>
        </tr>
        <tr>
          <td data-label="Type">
            <span>Bid Accepted</span>
          </td>
          <td data-label="Artwork Info">
            <div className="table-artwork">
              <div className="table-artwork__image">
                <Image
                  src="/dist/images/mock/artworks/3.png"
                  width="50%"
                  height="50%"
                />
              </div>
              <div className="table-artwork__content">
                <h3>Hey Moon</h3>
                <p>John Maus</p>
              </div>
            </div>
          </td>
          <td data-label="From">
            <span>5</span>
          </td>
          <td data-label="To">
            <span>10</span>
          </td>
          <td data-label="Amount">
            <span>2.00</span>
          </td>
          <td data-label="Time">
            <span>5d</span>
          </td>
        </tr>
      </tbody>
    </table>
  );
};
export default UserActivity;
