"use client";

import React, { useState } from "react";
import "./schedule.css";
import { useRouter } from "next/navigation";
import { sendLead } from "../utils/api.js";

const BookingForm = () => {
  const router = useRouter();

  const currentDate = new Date();
  const currentTime = currentDate.getHours() + ":" + currentDate.getMinutes();
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone_number: "",
    description: "",
    whatsApp_number: "",
    booking_date: currentDate,
    booking_time: "12:30:00",
    company: "Cloudprism",
    source: "Calendly Demo Booking",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await sendLead({ ...formData });
      console.log("Lead sent successfully");
      // router.push("/schedule");
    } catch (error) {
      console.error("Error sending lead:", error);
    }
  };

  return (
    <div className="lmtWIHO_gkbTeeyuvoJC sbRR6Vj9cBntcZ6P4tOo">
      <div className="_cUP1np9gMvFQrcPftuf OGcBAyJGBej5Gnyi9hGA xahN8AEzyAvQtVj17TPv _Y8HCTxgNkwxXcG_DCXx">
        <div
          data-container="booking-container"
          className="_3efP_GeH5kyBAzqnLzL adpQ3VUeQbmczOdx9ymw _NhHeOwIn1FU09sukys_ w_Mtb2W9166EgOSv9i3M cllbjvXCdYDt9A3te4cz"
        >
          <div
            data-container="side-panel"
            className="WrdpezlzjKu1CoRihaXS Rb2e9IwsOFiKlSQIX7YA _eIcko0LuRzVhqMC1mmy y2BHUjkNYLaMI5GB_dVt"
          >
            <div className="vijtvgyx_9152uGHndeu ij0tkCti5WftuGeyXE84">
              <div
                data-simplebar="init"
                className="g4kIX1cEbAUBf5qD2Udt EDtlc0_uFpxiVRZXmgE5 Kp7kkfKOnqzgiL6A7iT9"
              >
                <div className="simplebar-wrapper" style={{ margin: 0 }}>
                  <div className="simplebar-height-auto-observer-wrapper">
                    <div className="simplebar-height-auto-observer" />
                  </div>
                  <div className="simplebar-mask">
                    <div
                      className="simplebar-offset"
                      style={{ right: 0, bottom: 0 }}
                    >
                      <div
                        tabIndex={0}
                        className="simplebar-content-wrapper"
                        style={{ height: "auto", overflow: "hidden" }}
                      >
                        <div
                          className="simplebar-content"
                          style={{ padding: 0 }}
                        >
                          <div className="Z3zhp7CS7tNsCSX6_KJW KtQUtHvVvyq716gdA29c">
                            <div className="Hl8alPNUMZI6wp5bmNRn tn5Xb5vAgjr9spv6HYeI">
                              <button
                                aria-label="Go to previous page"
                                className="uvkj3lh _w8iXDi37ZtszlePqV6J k_KP3TT_QEVKk3VAikPN Gy73NVnQ6DJPoaiPoRRb"
                                type="button"
                              >
                                <span className="i84knf7 ig3btk n2yyy6o" />
                              </button>
                            </div>
                            <div className="dByP7suNIfCqOSaMcM6_ _CXzNZJcVKGB6oSxcDYf A_vp00FPVIEXjPGSurAE">
                              <img
                                src="https://d3v0px0pttie1i.cloudfront.net/uploads/team/avatar/244108/bf92ad95.png"
                                alt="Sales Team"
                                className="l8_ox8UFJxB3KJMwAXbz _sRvWjppwBLlS1XAiWzQ SQ_Bs3qHy7XHjSu3iTrm nDdZjeb2Zpw_OzgLPGim"
                              />
                              <div
                                data-component="name"
                                className="igLUv25CGn1lcV9W4BLo VHgo1Gke8HlB303mVQsG q4cOvvEx6Vd1DIiuVXso GzvVI3Y6rac8lZAKNbGw cj8hJKtajauY7EuaKsh6"
                              >
                                Sales Team
                              </div>
                              <h1 className="aJYfwRAjpy85vGyjTA_k aNTWZDYqtNuY8Y3A0Rlw nCQmpQ3zRtu1xXb_x8YC lfS31_5Mqhye4NzHzcKh UqnoAE3IPZScZj__n24Z">
                                KrispCall Demo
                              </h1>
                            </div>
                            <div className="QiW571eu_TTLj8o8L999 qAHPXwVGWZc_ywJSt9Vx tQwH_3LDvclJWgil8ZRk">
                              <div
                                data-container="details"
                                className="_L4TEojXfdzWp8RxMPuB N0L2N94hAAnivlQ6DGit Ko5wAaZye5TiJ64tY67l PO5XPbkuZPY7V9uoHMUx"
                              >
                                <div className="YAmKI90l5OyINFgGmq9L TuKawS25ZXxJafgZdElP">
                                  <div className="kjPV9BSUqWArFIVxfBTq _7Au4UjgXrnFtkfgdDsM">
                                    <span
                                      aria-hidden="true"
                                      className="srpdbd5 l15h8fme ly3eodl"
                                    >
                                      <svg
                                        data-id="details-item-icon"
                                        viewBox="0 0 10 10"
                                        xmlns="http://www.w3.org/2000/svg"
                                        role="img"
                                      >
                                        <path
                                          d="M.5 5a4.5 4.5 0 1 0 9 0 4.5 4.5 0 1 0-9 0Z"
                                          fill="none"
                                          stroke="currentColor"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M5 3.269V5l1.759 2.052"
                                          fill="none"
                                          stroke="currentColor"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                      </svg>
                                    </span>
                                  </div>
                                  30&nbsp;min
                                </div>
                                <div className="YAmKI90l5OyINFgGmq9L TuKawS25ZXxJafgZdElP">
                                  <div>
                                    <span
                                      aria-hidden="true"
                                      className="srpdbd5 sxrb1p2 l15h8fme ly3eodl"
                                    >
                                      <svg
                                        data-id="details-item-icon"
                                        viewBox="0 0 20 20"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        role="img"
                                      >
                                        <path
                                          fillRule="evenodd"
                                          clipRule="evenodd"
                                          d="M6 0.999512C6 0.447227 5.55229 -0.000488281 5 -0.000488281C4.44772 -0.000488281 4 0.447227 4 0.999512V1.99951H3C2.20435 1.99951 1.44129 2.31558 0.87868 2.87819C0.316071 3.4408 0 4.20386 0 4.99951V7.99951V16.9995C0 17.7952 0.316071 18.5582 0.87868 19.1208C1.44129 19.6834 2.20435 19.9995 3 19.9995H17C17.7957 19.9995 18.5587 19.6834 19.1213 19.1208C19.6839 18.5582 20 17.7952 20 16.9995V7.99951V4.99951C20 4.20386 19.6839 3.4408 19.1213 2.87819C18.5587 2.31558 17.7957 1.99951 17 1.99951H16V0.999512C16 0.447227 15.5523 -0.000488281 15 -0.000488281C14.4477 -0.000488281 14 0.447227 14 0.999512V1.99951H6V0.999512ZM18 6.99951V4.99951C18 4.7343 17.8946 4.47994 17.7071 4.29241C17.5196 4.10487 17.2652 3.99951 17 3.99951H15.001L15 3.99951L14.999 3.99951H5.00099L5 3.99951L4.99901 3.99951H3C2.73478 3.99951 2.48043 4.10487 2.29289 4.29241C2.10536 4.47994 2 4.7343 2 4.99951V6.99951H18ZM2 8.99951H18V16.9995C18 17.2647 17.8946 17.5191 17.7071 17.7066C17.5196 17.8942 17.2652 17.9995 17 17.9995H3C2.73478 17.9995 2.48043 17.8942 2.29289 17.7066C2.10536 17.5191 2 17.2647 2 16.9995V8.99951Z"
                                          fill="currentColor"
                                        />
                                      </svg>
                                    </span>
                                  </div>
                                  10:15am - 10:45am, Friday, April 12, 2024
                                </div>
                                <div className="YAmKI90l5OyINFgGmq9L TuKawS25ZXxJafgZdElP">
                                  <span
                                    aria-hidden="true"
                                    className="srpdbd5 sxrb1p2 l15h8fme ly3eodl"
                                  >
                                    <svg
                                      data-id="details-item-icon"
                                      viewBox="0 0 10 10"
                                      xmlns="http://www.w3.org/2000/svg"
                                      role="img"
                                    >
                                      <path
                                        d="M.5 5a4.5 4.5 0 1 0 9 0 4.5 4.5 0 1 0-9 0Z"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                      <path
                                        d="M.846 6.731h1.212a1.212 1.212 0 0 0 1.211-1.212V4.481a1.212 1.212 0 0 1 1.212-1.212 1.211 1.211 0 0 0 1.211-1.211V.553M9.5 4.929a2.469 2.469 0 0 0-1.117-.275H6.9a1.212 1.212 0 1 0 0 2.423.865.865 0 0 1 .865.865v.605"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                    </svg>
                                  </span>
                                  <span className="__trdF9jFB1QpBhkUGiN t_3_V_cX54ZJ2vS2wbMX">
                                    India Standard Time
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div>
                              <div>
                                <div className="yHJsX7btzZUMOuQu_qbF _QY08ZnTdckO8dGtuWjX rITYjoHV2NF_yl1tR68x rUewQ7gbiLM7fEmxWleS">
                                  <div className="k_tUa2XwT0esKZkWYshM UOUgYFhrylMAqJDUG1Tn">
                                    <p>
                                      Join us for an insightful virtual meeting
                                      in Zoom, where you can:
                                    </p>
                                    <p>
                                      <br />
                                    </p>
                                    <p>
                                      🔍 Explore KrispCall&apos;s tailored
                                      solutions for your needs
                                    </p>
                                    <p>
                                      💡 Discuss about customized solution for
                                      your business
                                    </p>
                                    <p>
                                      🗣 Share your requirements and kickstart
                                      your KrispCall journey
                                    </p>
                                    <p>
                                      👥 Train your team on advanced telephony
                                      features
                                    </p>
                                    <p>
                                      🤝 Discover seamless integrations with
                                      your CRM &amp; tools
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="Pz2TGUG_nAL6m_qTt_A4 _Y9jfPKOHyKOzqzq0C1V">
                    <button
                      className="uvkj3lh l15h8fme buuwct9 d13adumu soq3ksa f1vsw93b"
                      type="button"
                    >
                      <span className="t1850o97 t7sc041">Cookie settings</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="nX1mqja_7P44IZA6HzKt GggfqbUnbiV8ibOhSGq7 QnoSECjNGJyoVwZeO1Cp">
            <div className="Pl9F4D0kOr1s0KUQ1VhD vKWuVZfizOkGTEh1T9he PRlx_aGn2CIKvSPG5Y3G">
              <div className="ifJeiq6kt2UOH4Uas81Y MZgElle2ifGsTnWpJ3fp">
                <h2 className="yUlDMzUh_U6JLcQ4_WwJ SXT_05A7hWBNzr_bngHo">
                  Enter Details
                </h2>
                <form
                  autoComplete="off"
                  autoCorrect="off"
                  noValidate=""
                  onSubmit={handleSubmit}
                >
                  <div className="WLaMxNOB4isWwABO5Fyw _5foOb4drJjYf81uUkWv">
                    <fieldset className="Ca8ZXPhzUYH7_QjqmRim ZailmwkOvrZPJqhYNv2b">
                      <div className="IEca4u6yKLs5kfSWJNPH tpRma1lCG_GLCH8vRArY">
                        <div className="c8wotgg">
                          <label htmlFor="full_name_input" className="ls9i9qr">
                            Name *
                          </label>
                        </div>
                        <div className="l15h8fme d1dzuwnm">
                          <input
                            className="i1uya22c"
                            type="text"
                            maxLength="155"
                            name="full_name"
                            value={formData.full_name}
                            onChange={handleInputChange}
                            required
                            id="full_name_input"
                            autoCorrect="off"
                            autoComplete="name"
                            aria-invalid="false"
                            defaultValue=""
                          />
                        </div>
                      </div>
                      <div className="K1_mGhI0ytHpniyr5jBi _1sGdhdQlMpPvD78VxMw">
                        <div className="c8wotgg">
                          <label htmlFor="email_input" className="ls9i9qr">
                            Email *
                          </label>
                        </div>
                        <div className="l15h8fme d1dzuwnm">
                          <input
                            className="i1uya22c"
                            type="email"
                            maxLength="255"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            id="email_input"
                            autoCorrect="off"
                            autoComplete="email"
                            aria-invalid="false"
                            defaultValue=""
                          />
                        </div>
                      </div>
                    </fieldset>
                    <div className="ZOkPVd_LRDODqX2OtRqu ajhxaVE3aNRcUCIqCeA9">
                      <button
                        className="uvkj3lh l15h8fme buuwct9 d6p4nuq soq3ksa f1vsw93b"
                        type="button"
                      >
                        <span className="t1850o97">Add Guests</span>
                      </button>
                    </div>
                    <fieldset className="Ca8ZXPhzUYH7_QjqmRim ZailmwkOvrZPJqhYNv2b">
                      <div
                        data-component="question"
                        className="_XcSYbldo6PBKK04XdZx smoY8RxA6xs8LaouvqHy"
                      >
                        <div>
                          <div className="c8wotgg">
                            <label
                              htmlFor="a3Yh1Sv2aRzHna_kcXZsL"
                              className="ls9i9qr"
                            >
                              We may need to call you to discover your needs and
                              set up few things beforehand. *
                            </label>
                          </div>
                          <div
                            className="XD1y6QivS_xS2hJ9QYgR VMAGmxDoGw7jfNNy_LDs"
                            data-component="phone-field"
                          >
                            <div className="l15h8fme d1dzuwnm">
                              <div className="phone-field-wrapper">
                                <div className="phone-field-flag-container">
                                  <div
                                    className="phone-field-flag-box"
                                    role="combobox"
                                    tabIndex="0"
                                    title="India (भारत): +91"
                                    aria-controls="country-listbox"
                                    aria-expanded="false"
                                  >
                                    <div className="iti-flag in"></div>
                                  </div>
                                </div>
                                <input
                                  className="i1uya22c"
                                  type="tel"
                                  name="phone_number"
                                  value={formData.phone_number}
                                  onChange={handleInputChange}
                                  id="a3Yh1Sv2aRzHna_kcXZsL"
                                  aria-invalid="false"
                                  autoComplete="tel"
                                  required
                                  data-intl-tel-input-id="0"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        data-component="question"
                        className="_XcSYbldo6PBKK04XdZx smoY8RxA6xs8LaouvqHy"
                      >
                        <div>
                          <div className="c8wotgg">
                            <label
                              htmlFor="rIfUy0vGF7yKFQ2GgqUqX"
                              className="ls9i9qr"
                            >
                              Please share anything that will help prepare for
                              our meeting.
                            </label>
                          </div>
                          <div className="l15h8fme d1dzuwnm">
                            <textarea
                              className="i1uya22c ikzg8f9"
                              type="textarea"
                              maxLength="10000"
                              name="description"
                              value={formData.description}
                              onChange={handleInputChange}
                              id="rIfUy0vGF7yKFQ2GgqUqX"
                              autoCorrect="off"
                              autoComplete="off"
                              aria-invalid="false"
                              defaultValue=""
                            ></textarea>
                          </div>
                        </div>
                      </div>
                    </fieldset>
                    <fieldset className="Ca8ZXPhzUYH7_QjqmRim ZailmwkOvrZPJqhYNv2b">
                      <div className="XlJrIVqfeQcxYjCaUSVh aKTX76R9YfLAzohXawT4">
                        <div className="c8wotgg">
                          <label
                            htmlFor="gMMmaP-hpLX9m9TyNQef4"
                            className="ls9i9qr"
                          >
                            Send text messages to
                          </label>
                        </div>
                        <div
                          className="XD1y6QivS_xS2hJ9QYgR VMAGmxDoGw7jfNNy_LDs"
                          data-component="phone-field"
                        >
                          <div className="l15h8fme d1dzuwnm">
                            <div className="phone-field-wrapper">
                              <div className="phone-field-flag-container">
                                <div
                                  className="phone-field-flag-box"
                                  role="combobox"
                                  tabIndex="0"
                                  title="India (भारत): +91"
                                  aria-controls="country-listbox"
                                  aria-expanded="false"
                                >
                                  <div className="iti-flag in"></div>
                                </div>
                              </div>
                              <input
                                className="i1uya22c"
                                type="tel"
                                name="whatsApp_number"
                                value={formData.whatsApp_number}
                                onChange={handleInputChange}
                                id="gMMmaP-hpLX9m9TyNQef4"
                                aria-invalid="false"
                                autoComplete="tel"
                                data-intl-tel-input-id="1"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </fieldset>
                  </div>

                  <div className="_Ms_48sT5lC1w59SJT1K rept8JLe1nQflKIQAszR">
                    By proceeding, you confirm that you have read and agree to{" "}
                    <a
                      target="_blank"
                      rel="related"
                      className="uvkj3lh b18kn71e vvo24n0 zNwnG9QHYOI7x5WXkAJw _1raeB5Vm3N8JnR_1fcx"
                      href="https://calendly.com/terms"
                    >
                      Calendly&apos;s Terms of Use{" "}
                    </a>{" "}
                    and{" "}
                    <a
                      target="_blank"
                      rel="related"
                      className="uvkj3lh b18kn71e vvo24n0 zNwnG9QHYOI7x5WXkAJw _1raeB5Vm3N8JnR_1fcx"
                      href="https://calendly.com/privacy"
                    >
                      {" "}
                      Privacy Notice.
                    </a>
                  </div>

                  <div className="_Ms_48sT5lC1w59SmlbE">
                    <div className="_Yt_49UGRez-s_VYySvT">
                      <button
                        className="uvkj3lh l15h8fme buuwct9 d13adumu soq3ksa f1vsw93b"
                        type="submit"
                      >
                        <span className="t7sc041">Schedule Event</span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
