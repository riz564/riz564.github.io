(this.webpackJsonpweds = this.webpackJsonpweds || []).push([
  [0],
  {
    35: function (e, t, a) {},
    36: function (e, t, a) {},
    43: function (e, t, a) {
      "use strict";
      a.r(t);
      var n = a(2),
        i = a(0),
        s = a.n(i),
        c = a(13),
        o = a.n(c),
        r = (a(35), a(22)),
        d = a(8),
        b = a(11),
        l = a(58),
        u = a(26),
        j = a.n(u),
        h = (a(36), a.p + "static/media/cover.jpg"),
        m = a.p + "static/media/rizwan.jpg",
        p = a.p + "static/media/arisha.jpg",
        g = a.p + "static/media/img2.feea2512.jpg",
        f = a.p + "static/media/My Invitation.jpeg",
        O = a.p + "static/media/loading.e8db860b.gif",
        v = a.p + "static/media/wedding.b5887c68.mp3",
        x = a.p + "static/media/e-video.e413b067.mp4",
        p1= a.p + "static/media/pic1.jpg",
        p3= a.p + "static/media/pic3.jpg",
        p2= a.p + "static/media/pic2.jpg",
        p4= a.p + "static/media/pic4.jpg",
        p5= a.p + "static/media/pic6.jpg",
        p6= a.p + "static/media/pic7.jpg",
        p7= a.p + "static/media/pic8.jpg",
        p8= a.p + "static/media/pic9.jpg",
       // p9= a.p + "static/media/pic10.jpg",
        p10= a.p + "static/media/pic11.jpg",
        p11= a.p + "static/media/pic12.jpg",
        p12= a.p + "static/media/pic13.jpg",
        p13= a.p + "static/media/pic14.jpg",
        y = [
          { label: "\ud83d\udcc5 We got Engaged on ", id: "engagement date" },
          {
            label: "\ud83d\udd7a\ud83c\udffc Where do we met ? \ud83d\udc83",
            id: "sangeet date",
          },
          // { label: "Invitation Card & Video", id: "invitation" },
          { label: "Want to see our pics \ud83d\ude0d", id: "engaged pics" },
          { label: "More pics \ud83d\ude0d", id: "more pics1" },
          { label: "More pics \ud83d\ude0d", id: "more pics2" },
          { label: "More pics \ud83d\ude0d", id: "more pics3" },
          { label: "More pics \ud83d\ude0d", id: "more pics4" },
          { label: "Wish Us", id: "wish us" },
          // { label: "Where do I need to come?", id: "location" },
        ],
        w = {
          "engagement date": {
            image: [f],
            text: [
              "It was on <b>15th</b> of January, 2022.",
              // "Yeah we know, it's less than even a month and we are super nervous!",
              // "Please be there by 7pm \ud83d\ude4f ",
            ],
            //audio: v,
          },
          "sangeet date": {
            text: [
              "Our Marriage was fixed by our parents.Luckily everything went well !!! ",
              "And here we are together sharing our happiness and joy"
            ],
            //image: [x]
          },
          "engaged pics": { 
            text: ["Happinesss !!!"] ,
            image: [p2, p3],
          },
          "more pics1": { 
            text: ["Phool aur mithai se swagat."],
            image: [p4],
          },
          "more pics2": { 
             text: ["Family"],
             image: [p5,p7,p10,p11,p12,p13],
          },
          "more pics3": { 
            text: [
              "<i>\"I dreamed of this day from the moment I decided to make you mine\"</i>",
              "<i>\"Finally, the day has come to officially call you mine\"</i>"
            ],
            image: [p1],
          },
          "more pics4": { 
             text: ["Yaha may PIGHAL gaya \ud83d\ude0d"],
             image: [g],
          },
          "wish us": { 
            text: ["Thank you so much for your blessing and wishes."]
         },
          
          // location: {
          //   text: [
          //     "It's at <b>Sri Sitaramji Bhawan, Raniganj</b>",
          //     "you can just follow google maps:",
          //   ],
          //   location:
          //     "https://tars-file-upload.s3.amazonaws.com/ByNADi/e8e72425e745b4a32703175a09276c0a--staticmap.png",
          //   link: "https://goo.gl/maps/AA7CtMdjwJcqzzs68",
          // },
          // invitation: {
          //   text: [
          //     "We may not have it all together, but together we have it all.",
          //   ],
          //   image: [f],
          //   video: x,
          // },
        };
      var N = function () {
          var e = Object(i.useState)([
              {
                audio: v,
                text: [
                  "Hey ! I have a beautiful news to share \ud83d\ude0a",
                  "We, <b>Arisha</b> and <b>Rizwan</b> got Engaged. \ud83d\udc8d",
                  "And we want you to be a part of this celebration as we take the next step together soon.",
                ],
              },
            ]),
            t = Object(b.a)(e, 2),
            a = t[0],
            s = t[1],
            c = Object(i.useState)(!0),
            o = Object(b.a)(c, 2),
            u = o[0],
            m = o[1],
            p = Object(i.useState)(y),
            g = Object(b.a)(p, 2),
            f = g[0],
            x = g[1],
            N = Object(i.useState)(""),
            S = Object(b.a)(N, 2),
            k = S[0],
            I = S[1],
            C = Object(i.useState)(null),
            E = Object(b.a)(C, 2),
            F = E[0],
            W = E[1],
            A = Object(i.useRef)(!1),
            B = Object(i.useRef)(!1),
            D = Object(i.useRef)(!1);
          Object(i.useEffect)(function () {
            if (A.current) {
              var e = A;
              e.current.scrollTop = e.current.scrollHeight;
            }
          }),
            Object(i.useEffect)(
              function () {
                "engagement date" === k &&
                  ((B.current.src = v), B.current.pause(), B.current.play()),
                  "invitation" === k &&
                    D.current.addEventListener("playing", function () {
                      //document.getElementById("audio").pause();
                    });
              },
              [k]
            ),
            Object(i.useEffect)(
              function () {
                F &&
                  setTimeout(function () {
                    return H(F);
                  }, 2e3);
              },
              [F]
            );
          var H = function (e) {
            var t = Object(d.a)(a);
            t.pop();
            var n = Object(r.a)({}, w[e]);
            t.push(n), s(t), I(e), m(!u);
          };
          return Object(n.jsx)("div", {
            className: "bot",
            children: Object(n.jsx)("div", {
              className: "bot-container",
              children: Object(n.jsxs)("div", {
                className: "bot-section",
                children: [
                  Object(n.jsx)("div", {
                    className: "bot-messages",
                    ref: A,
                    style: u ? { height: "75%" } : { height: "88%" },
                    children: a.map(function (e, t) {
                      return (function (e, t) {
                        return Object(n.jsx)(n.Fragment, {
                          children:
                            t % 2 === 1
                              ? Object(n.jsx)("div", {
                                  className: "user-response",
                                  children: Object(n.jsx)("div", {
                                    className: "message user-chat-bubble",
                                    children: e.userSays,
                                  }),
                                })
                              : Object(n.jsx)("div", {
                                  className: "bot-response",
                                  children: Object(n.jsx)(n.Fragment, {
                                    children: Object(n.jsxs)("div", {
                                      children: [
                                        e.text &&
                                          e.text.map(function (e) {
                                            return Object(n.jsx)("div", {
                                              className: "message chat-bubble",
                                              children: Object(n.jsx)("span", {
                                                dangerouslySetInnerHTML: {
                                                  __html: e,
                                                },
                                              }),
                                            });
                                          }),
                                        e.image &&
                                          e.image.map(function (e) {
                                            return Object(n.jsx)("div", {
                                              className: "message-image",
                                              children: Object(n.jsx)("img", {
                                                "data-action": "zoom",
                                                src: e,
                                              }),
                                            });
                                          }),
                                        e.location &&
                                          Object(n.jsx)("div", {
                                            className: "message chat-bubble",
                                            children: Object(n.jsx)("a", {
                                              href: e.link,
                                              target: "_blank",
                                              children: Object(n.jsx)("img", {
                                                src: e.location,
                                                style: { width: "100%" },
                                              }),
                                            }),
                                          }),
                                        e.audio &&
                                          Object(n.jsx)("audio", {
                                            ref: B,
                                            id: "audio",
                                            children: Object(n.jsx)("source", {
                                              type: "audio/mpeg",
                                            }),
                                          }),
                                        // e.video &&
                                        //   Object(n.jsx)("div", {
                                        //     className: "video-container",
                                        //     children: Object(n.jsx)("video", {
                                        //       ref: D,
                                        //       width: "200",
                                        //       height: "240",
                                        //       controls: !0,
                                        //       children: Object(n.jsx)(
                                        //         "source",
                                        //         {
                                        //           src: e.video,
                                        //           type: "video/mp4",
                                        //         }
                                        //       ),
                                        //     }),
                                        //   }),
                                        e.typing &&
                                          Object(n.jsx)("div", {
                                            className: "loading chat-bubble",
                                            children: Object(n.jsx)("img", {
                                              src: O,
                                            }),
                                          }),
                                      ],
                                    }),
                                  }),
                                }),
                        });
                      })(e, t);
                    }),
                  }),
                  Object(n.jsxs)("div", {
                    className: "bot-footer",
                    children: [
                      Object(n.jsxs)("div", {
                        className: "bot-input-container",
                        onClick: function (e) {
                          m(!u);
                        },
                        children: [
                          Object(n.jsx)("input", {
                            type: "text",
                            placeholder:
                              "\ud83d\udc47\ud83c\udffb\ud83d\udc47\ud83c\udffb Choose from below... \ud83d\udc47\ud83c\udffb\ud83d\udc47\ud83c\udffb",
                            className: "input",
                            disabled: !0,
                          }),
                          Object(n.jsx)(j.a, { className: "input-send" }),
                        ],
                      }),
                      u &&
                        Object(n.jsx)("div", {
                          className: "bot-button-container",
                          children: f.slice(0, 2).map(function (e, t) {
                            return Object(n.jsx)(l.a, {
                              type: "button",
                              className: "button",
                              variant: "contained",
                              onClick: function (t) {
                                return (function (e, t, n) {
                                  e.preventDefault();
                                  var i = Object(d.a)(a),
                                    c = f.filter(function (e) {
                                      return e.id !== t;
                                    }),
                                    o = { userSays: n };
                                  i.push(o),
                                    i.push({ typing: !0 }),
                                    s(i),
                                    x(c),
                                    W(t),
                                    m(!u);
                                })(t, e.id, e.label);
                              },
                              children: e.label,
                            });
                          }),
                        }),
                    ],
                  }),
                ],
              }),
            }),
          });
        },
        S = function (e) {
          e &&
            e instanceof Function &&
            a
              .e(3)
              .then(a.bind(null, 59))
              .then(function (t) {
                var a = t.getCLS,
                  n = t.getFID,
                  i = t.getFCP,
                  s = t.getLCP,
                  c = t.getTTFB;
                a(e), n(e), i(e), s(e), c(e);
              });
        };
      o.a.render(
        Object(n.jsx)(s.a.StrictMode, { children: Object(n.jsx)(N, {}) }),
        document.getElementById("root")
      ),
        S();
    },
  },
  [[43, 1, 2]],
]);
//# sourceMappingURL=main.a58fed23.chunk.js.map
