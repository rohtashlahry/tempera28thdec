"use client";
import React, { useState } from "react";
import Link from "next/link";
import "./tempCommon.css";
import { Icon } from "next/dist/lib/metadata/types/metadata-types";
import AdminLogin from "../app/adminlogin";
import { useRouter } from 'next/router';

export const Header = () => {
  return (
    <header>
      <div className="header-main">
        <div className="logo-main">
          <h2><i>Tempera</i></h2>
        </div>
        <nav className="nav-list">
          <Link href="/"> Home </Link>
          <Link href="/portfolio"> About Us</Link>
          <Link
            href="/portfolio"
            className="dropdownMenu"
          >
            Services
            <div className="dropdownState">
              <li>Service 1</li>
              <li>Service 2</li>
              <li>Service 3</li>
            </div>
            </Link>
          <Link href="/portfolio"> Portfolio </Link>
          <Link href="/contact"> Blogs </Link>
          <Link href="/contact"> Contact Us </Link>
        </nav>
        <div className="CTA-btn">
          <button className="button-39"> Coffee on US?</button>
          <Link href="/adminlogin" style={{padding: 3, marginLeft: 10, color: "#fff"}} >※</Link>

        </div>
      </div>
    </header>
  );
};
