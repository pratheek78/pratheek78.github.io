import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';




export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout>
        <div className={styles.main}>
            <div className={styles.main__container}>
                <div className={styles.main__content}>
                    <h1>A Feature Filled Discord Bot for your Server</h1>
                    <p>Ezebot has almost everything you would ever need for a perfect server</p>
                    <button className={styles.inv_btn} onClick={() => window.open('https://discord.com/api/oauth2/authorize?client_id=804613612857327617&permissions=8&scope=bot%20applications.commands')}>
                        <a href="/">
                            Add to Discord
                        </a>
                    </button>
                </div>
            </div>
        </div>
        <div className={styles.services}>
            <h1 id="feat_type">See what Ezebot can do</h1>
            <div className={styles.services__container}>
                <div className={styles.services__card} id={styles.left}>
                    <h2>Powerful Moderation Tools</h2>
                    <p>Ezebot Comes with all the moderation tools you would ever need. It stores every single moderation
                        case so you can have a look at them later if you have to. </p>
                    <button className={styles.gt_start}
                            onClick={() => window.open('https://discord.com/api/oauth2/authorize?client_id=804613612857327617&permissions=8&scope=bot%20applications.commands')}>
                        <a href="/">
                            Get Started
                        </a>
                    </button>
                </div>
                <div className={styles.services__card} id={styles.right}>
                    <h2>AI Autmoderation</h2>
                    <p>EzeBot uses complex AI to deterine which messages are toxic or contain NSFW and takes action
                        accordingly. </p>
                    <button className={styles.gt_start}
                            onClick={() => window.open('https://discord.com/api/oauth2/authorize?client_id=804613612857327617&permissions=8&scope=bot%20applications.commands')}>
                        <a href="/">
                            Start Moderating
                        </a>
                    </button>
                </div>
                <div className={styles.services__card} id={styles.left}>
                    <h2>0 Bullshit</h2>
                    <p>EzeBot contains only the stuff you need. No annoying pings, or advertisements, so you can create
                        and manage your server in bliss. </p>
                </div>
                <div className={styles.services__card} id={styles.right}>
                    <h2>Maximum Privacy</h2>
                    <p>Everyone values their privacy. Keeping this in mind, it's been made sure that no sensitive data
                        is collected. The only data collected by EzeBot is things such as the guild id, the user id and
                        such. It doesnt include any passwords data which can be used to identify users IRL. </p>
                </div>
                <div className={styles.services__card} id={styles.left}>
                    <h2>100% Transparency</h2>
                    <p>The Entirety of Ezebot's Code can be viewed in a public GitHub repo. It's written in python, an
                        easy to understand language, so if you have doubts about the info being collected, you can check
                        that out.</p>
                    <button className={styles.gt_start}
                            onClick={() => window.open('https://github.com/pratheek78/Ezebot-Open-Source')}>
                        <a href="/">
                            View Code
                        </a>
                    </button>
                </div>
                <div className={styles.services__card} id={styles.right}>
                    <h2>Completely Free</h2>
                    <p>There are no plans to monetise this project in the near future. There wont be any locked
                        features, and you can leverage the full power of Ezebot for free.</p>
                </div>
                <div className={styles.services__card} id={styles.left}>
                    <h2>Reporting Bugs</h2>
                    <p>If you find a bug in Ezebot, go to the official Github repository and open an issue. The bug will
                        be patched ASAP.</p>
                    <button className={styles.gt_start}
                            onClick={() => window.open('https://github.com/pratheek78/Ezebot-Open-Source/issues')}>
                        <a href="/">
                            Report An Issue
                        </a>
                    </button>
                </div>
            </div>
        </div>
     
    </Layout>
  );
}
