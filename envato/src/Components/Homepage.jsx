import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneVolume, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import "../Styles/Homepage.css";

const Homepage = () => {
    return (
        <div>
            <div className='envato-main'>
                <div className='envato-main-box'>
                    <div className='envato-main-one'>

                    </div>
                    <div className='envato-main-two'>
                        <button>Buy now</button>
                    </div>
                </div>
            </div>
            <div className='envato-header'>
                <div className='envato-header-one'>
                    <div className='envato-header-box'>
                        <FontAwesomeIcon icon={faPhoneVolume} color='#7AA93C' />
                        <p>CALL: <span>8268354050</span></p>
                    </div>
                    <div className='envato-header-box-two'>
                        <FontAwesomeIcon icon={faEnvelope} />
                        <p>MAIL: <span>abc@gmail.com</span></p>
                    </div>
                </div>
                <div className='envato-header-two'>
                    <div className='envato-header-item-four'>
                        <p>RECENT: <span>FullStack developer in Mumbai</span></p>
                    </div>


                    <div className='envato-header-item-five'>
                        <div className='envato-header-item-seven'>
                            <div className='envato-header-item-six'>
                                <i class="fa-solid fa-chevron-left"></i>
                            </div>
                            <div className='envato-header-item-six'>
                                <i class="fa-solid fa-chevron-right"></i>
                            </div>
                        </div>
                        <div className='envato-header-item-eight'>
                            <p>Apply Online</p>
                            <i class="fa-solid fa-arrow-right"></i>
                        </div>
                    </div>
                </div>
                <div className='envato-header-three'>
                    <div className='envato-header-item-one'>
                        <ul className='envato-header-three-ul'>
                            <li>About</li>
                            <li>Location</li>
                            <li>Resources</li>
                        </ul>
                    </div>
                    <div className='enavto-header-item-two'>
                        <i class="fa-brands fa-facebook"></i>
                        <i class="fa-brands fa-twitter"></i>
                        <i class="fa-brands fa-google"></i>
                        <i class="fa-brands fa-youtube"></i>
                    </div>
                </div>
            </div>

            <div className='envato-navbar'>
                <div className='envato-navbar-logo'>

                </div>

                <div className='envato-navbar-element'>
                    <Dropdown>
                        <DropdownTrigger>
                            <Button className='envato-navbar-menu'
                                variant="bordered"
                            >
                                Home
                            </Button>
                        </DropdownTrigger>
                        <DropdownMenu aria-label="Static Actions" className='envato-dropdown'>
                            <DropdownItem className='envato-dropdown-item one' key="new">New file</DropdownItem>
                            <DropdownItem className='envato-dropdown-item' key="copy">Copy link</DropdownItem>
                            <DropdownItem className='envato-dropdown-item' key="edit">Edit file</DropdownItem>
                            <DropdownItem className='envato-dropdown-item' key="delete" color="danger">
                                Delete file
                            </DropdownItem>
                        </DropdownMenu>
                    </Dropdown>

                    <Dropdown>
                        <DropdownTrigger>
                            <Button className='envato-navbar-menu'
                                variant="bordered"
                            >
                                About
                            </Button>
                        </DropdownTrigger>
                        <DropdownMenu aria-label="Static Actions" className='envato-dropdown'>
                            <DropdownItem className='envato-dropdown-item one' key="new">New file</DropdownItem>
                            <DropdownItem className='envato-dropdown-item' key="copy">Copy link</DropdownItem>
                            <DropdownItem className='envato-dropdown-item' key="edit">Edit file</DropdownItem>
                            <DropdownItem className='envato-dropdown-item' key="delete" color="danger">
                                Delete file
                            </DropdownItem>
                        </DropdownMenu>
                    </Dropdown>


                    <Dropdown>
                        <DropdownTrigger>
                            <Button className='envato-navbar-menu'
                                variant="bordered"
                            >
                                Employers
                            </Button>
                        </DropdownTrigger>
                        <DropdownMenu aria-label="Static Actions" className='envato-dropdown'>
                            <DropdownItem className='envato-dropdown-item one' key="new">New file</DropdownItem>
                            <DropdownItem className='envato-dropdown-item' key="copy">Copy link</DropdownItem>
                            <DropdownItem className='envato-dropdown-item' key="edit">Edit file</DropdownItem>
                            <DropdownItem className='envato-dropdown-item' key="delete" color="danger">
                                Delete file
                            </DropdownItem>
                        </DropdownMenu>
                    </Dropdown>

                    <Dropdown>
                        <DropdownTrigger>
                            <Button className='envato-navbar-menu'
                                variant="bordered"
                            >
                                Solutions
                            </Button>
                        </DropdownTrigger>
                        <DropdownMenu aria-label="Static Actions" className='envato-dropdown'>
                            <DropdownItem className='envato-dropdown-item one' key="new">New file</DropdownItem>
                            <DropdownItem className='envato-dropdown-item' key="copy">Copy link</DropdownItem>
                            <DropdownItem className='envato-dropdown-item' key="edit">Edit file</DropdownItem>
                            <DropdownItem className='envato-dropdown-item' key="delete" color="danger">
                                Delete file
                            </DropdownItem>
                        </DropdownMenu>
                    </Dropdown>

                    <Dropdown>
                        <DropdownTrigger>
                            <Button className='envato-navbar-menu'
                                variant="bordered"
                            >
                                Job Seekers
                            </Button>
                        </DropdownTrigger>
                        <DropdownMenu aria-label="Static Actions" className='envato-dropdown'>
                            <DropdownItem className='envato-dropdown-item one' key="new">New file</DropdownItem>
                            <DropdownItem className='envato-dropdown-item' key="copy">Copy link</DropdownItem>
                            <DropdownItem className='envato-dropdown-item' key="edit">Edit file</DropdownItem>
                            <DropdownItem className='envato-dropdown-item' key="delete" color="danger">
                                Delete file
                            </DropdownItem>
                        </DropdownMenu>
                    </Dropdown>

                    <Dropdown>
                        <DropdownTrigger>
                            <Button className='envato-navbar-menu'
                                variant="bordered"
                            >
                                Pages
                            </Button>
                        </DropdownTrigger>
                        <DropdownMenu aria-label="Static Actions" className='envato-dropdown'>
                            <DropdownItem className='envato-dropdown-item one' key="new">New file</DropdownItem>
                            <DropdownItem className='envato-dropdown-item' key="copy">Copy link</DropdownItem>
                            <DropdownItem className='envato-dropdown-item' key="edit">Edit file</DropdownItem>
                            <DropdownItem className='envato-dropdown-item' key="delete" color="danger">
                                Delete file
                            </DropdownItem>
                        </DropdownMenu>
                    </Dropdown>

                    <Dropdown>
                        <DropdownTrigger>
                            <Button className='envato-navbar-menu'
                                variant="bordered"
                            >
                                Element
                            </Button>
                        </DropdownTrigger>
                        <DropdownMenu aria-label="Static Actions" className='envato-dropdown'>
                            <DropdownItem className='envato-dropdown-item one' key="new">New file</DropdownItem>
                            <DropdownItem className='envato-dropdown-item' key="copy">Copy link</DropdownItem>
                            <DropdownItem className='envato-dropdown-item' key="edit">Edit file</DropdownItem>
                            <DropdownItem className='envato-dropdown-item' key="delete" color="danger">
                                Delete file
                            </DropdownItem>
                        </DropdownMenu>
                    </Dropdown>

                    <Dropdown>
                        <DropdownTrigger>
                            <Button className='envato-navbar-menu'
                                variant="bordered"
                            >
                                Contact
                            </Button>
                        </DropdownTrigger>
                        <DropdownMenu aria-label="Static Actions" className='envato-dropdown'>
                            <DropdownItem className='envato-dropdown-item one' key="new">New file</DropdownItem>
                            <DropdownItem className='envato-dropdown-item' key="copy">Copy link</DropdownItem>
                            <DropdownItem className='envato-dropdown-item' key="edit">Edit file</DropdownItem>
                            <DropdownItem className='envato-dropdown-item' key="delete" color="danger">
                                Delete file
                            </DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </div>

                <div className='envato-navbar-search'>
                    <i class="fa-solid fa-magnifying-glass"></i>
                    <input type="text" placeholder='search here' />
                </div>
            </div>


            <Swiper className="mySwiper">
                <SwiperSlide> <div className='envato-first-section'>
                    <div className='envato-first-item'>
                        <div className='envato-first-subitem'>

                        </div>
                    </div>
                    <div className='envato-second-item'>

                    </div>
                </div></SwiperSlide>
                <SwiperSlide><div className='envato-first-section'>
                    <div className='envato-first-item'>
                        <div className='envato-first-subitem'>

                        </div>
                    </div>
                    <div className='envato-second-item'>

                    </div>
                </div></SwiperSlide>
                <SwiperSlide><div className='envato-first-section'>
                    <div className='envato-first-item'>
                        <div className='envato-first-subitem'>

                        </div>
                    </div>
                    <div className='envato-second-item'>

                    </div>
                </div></SwiperSlide>
                <SwiperSlide><div className='envato-first-section'>
                    <div className='envato-first-item'>
                        <div className='envato-first-subitem'>

                        </div>
                    </div>
                    <div className='envato-second-item'>

                    </div>
                </div></SwiperSlide>
                <SwiperSlide><div className='envato-first-section'>
                    <div className='envato-first-item'>
                        <div className='envato-first-subitem'>

                        </div>
                    </div>
                    <div className='envato-second-item'>

                    </div>
                </div></SwiperSlide>
                <SwiperSlide><div className='envato-first-section'>
                    <div className='envato-first-item'>
                        <div className='envato-first-subitem'>

                        </div>
                    </div>
                    <div className='envato-second-item'>

                    </div>
                </div></SwiperSlide>
                <SwiperSlide><div className='envato-first-section'>
                    <div className='envato-first-item'>
                        <div className='envato-first-subitem'>

                        </div>
                    </div>
                    <div className='envato-second-item'>

                    </div>
                </div></SwiperSlide>
                <SwiperSlide><div className='envato-first-section'>
                    <div className='envato-first-item'>
                        <div className='envato-first-subitem'>

                        </div>
                    </div>
                    <div className='envato-second-item'>

                    </div>
                </div></SwiperSlide>
                <SwiperSlide><div className='envato-first-section'>
                    <div className='envato-first-item'>
                        <div className='envato-first-subitem'>

                        </div>
                    </div>
                    <div className='envato-second-item'>

                    </div>
                </div></SwiperSlide>
            </Swiper>


        </div>
    );
}

export default Homepage;
