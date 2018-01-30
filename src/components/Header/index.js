import React from 'react';
import Link from 'gatsby-link';

const Header = () => (
    <div
        style={{
            marginBottom: '1.45rem',
        }}>
        <div
            style={{
                margin: '0 auto',
                maxWidth: 960,
                padding: '1.45rem 1.0875rem',
            }}>
            <h1 style={{ margin: 0 }}>
                <Link
                    to="/"
                    style={{
                        color: 'rgba(0, 0, 0, .8)',
                        textDecoration: 'none',
                    }}>
                    Header
                </Link>
            </h1>
        </div>
    </div>
);

export default Header;
