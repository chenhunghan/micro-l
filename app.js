function onClientLoad() {
    var keyword = 'javascript'
    gapi.client.load('youtube', 'v3', function() {
        gapi.client.setApiKey('AIzaSyDG4OKT4eGlYFtpCmfKM8jGs42ge7qM--s');
        var request = gapi.client.youtube.search.list({
            q: keyword + '|javascript|step-by-step|tutorial|beginners|how -music -song',
            part: 'snippet',
            type: 'video',
            safeSearch: 'moderate',
            videoDuration: 'short',
            videoEmbeddable: true,
            relevanceLanguage: 'eng',
            maxResults: 50
            //https://developers.google.com/youtube/v3/docs/search/list#request-body
        });
        request.execute(function(response) {

            angular.module('app', ['ngAnimate', 'ui.bootstrap'])
            angular.module('app').controller('MainCtrl', MainCtrl)
            angular.module('app')
                .filter('youtubeEmbedUrl', function ($sce) {
                    return function(videoId) {
                        return $sce.trustAsResourceUrl('http://www.youtube.com/embed/' + videoId);
                    };
                });
            function MainCtrl($scope) {
                $scope.watching = false

                $scope.items = [
                        {
                            "kind": "youtube#searchResult",
                            "etag": "\"jOXstHOM20qemPbHbyzf7ztZ7rI/z0wM4cI2_Ml7doto7Yq3Fc9TM8o\"",
                            "id": {
                                "kind": "youtube#video",
                                "videoId": "UL6QxeVlRrQ"
                            },
                            "snippet": {
                                "publishedAt": "2014-01-03T00:00:01.000Z",
                                "channelId": "UCVQxmyIOutGT4lmWlDN9pmA",
                                "title": "How To Draw A Realistic Eye: Narrated Step by Step",
                                "description": "Learn to draw a realistic eye, narrated step by step for beginners. Also see How To Draw A Face: http://youtu.be/7kKJW8ZLcew See How to Draw Realistic Hair: ...",
                                "thumbnails": {
                                    "default": {
                                        "url": "https://i.ytimg.com/vi/UL6QxeVlRrQ/default.jpg"
                                    },
                                    "medium": {
                                        "url": "https://i.ytimg.com/vi/UL6QxeVlRrQ/mqdefault.jpg"
                                    },
                                    "high": {
                                        "url": "https://i.ytimg.com/vi/UL6QxeVlRrQ/hqdefault.jpg"
                                    }
                                },
                                "channelTitle": "circlelinemedia",
                                "liveBroadcastContent": "none"
                            }
                        },
                        {
                            "kind": "youtube#searchResult",
                            "etag": "\"jOXstHOM20qemPbHbyzf7ztZ7rI/6DtFh0u-JKsDGd4yiojiJ59292M\"",
                            "id": {
                                "kind": "youtube#channel",
                                "channelId": "UCjA7GKp_yxbtw896DCpLHmQ"
                            },
                            "snippet": {
                                "publishedAt": "2014-06-18T21:42:54.000Z",
                                "channelId": "UCjA7GKp_yxbtw896DCpLHmQ",
                                "title": "Cakes StepByStep",
                                "description": "Learn basic skills and techniques which will help you to decórate your own cake masterpiece. HAVE FUN!",
                                "thumbnails": {
                                    "default": {
                                        "url": "https://lh6.googleusercontent.com/-OZyhjdY8Zt4/AAAAAAAAAAI/AAAAAAAAAAA/RHfz3beL5C4/photo.jpg"
                                    },
                                    "medium": {
                                        "url": "https://lh6.googleusercontent.com/-OZyhjdY8Zt4/AAAAAAAAAAI/AAAAAAAAAAA/RHfz3beL5C4/photo.jpg"
                                    },
                                    "high": {
                                        "url": "https://lh6.googleusercontent.com/-OZyhjdY8Zt4/AAAAAAAAAAI/AAAAAAAAAAA/RHfz3beL5C4/photo.jpg"
                                    }
                                },
                                "channelTitle": "CakesStepByStep",
                                "liveBroadcastContent": "none"
                            }
                        },
                        {
                            "kind": "youtube#searchResult",
                            "etag": "\"jOXstHOM20qemPbHbyzf7ztZ7rI/UuE1TYONYTPwQglvJ5ldBZybFLg\"",
                            "id": {
                                "kind": "youtube#video",
                                "videoId": "o76Ptplo0FY"
                            },
                            "snippet": {
                                "publishedAt": "2015-09-17T16:30:22.000Z",
                                "channelId": "UCIsotCCdTjStPCLyD9iBCCQ",
                                "title": "Learn Full Hand Henna/Mehendi Design Step By Step Tutorial",
                                "description": "Please Subscribe + Like + Fav + Share :) http://goo.gl/Jskfs3 Apologies girls for not uploading video on my regular schedule, my baby is having a ear infection ...",
                                "thumbnails": {
                                    "default": {
                                        "url": "https://i.ytimg.com/vi/o76Ptplo0FY/default.jpg"
                                    },
                                    "medium": {
                                        "url": "https://i.ytimg.com/vi/o76Ptplo0FY/mqdefault.jpg"
                                    },
                                    "high": {
                                        "url": "https://i.ytimg.com/vi/o76Ptplo0FY/hqdefault.jpg"
                                    }
                                },
                                "channelTitle": "shrutiarjunanand",
                                "liveBroadcastContent": "none"
                            }
                        },
                        {
                            "kind": "youtube#searchResult",
                            "etag": "\"jOXstHOM20qemPbHbyzf7ztZ7rI/b31cLhkpJI7FfiqpDDlNeLujOGY\"",
                            "id": {
                                "kind": "youtube#video",
                                "videoId": "46YzEe0CuSA"
                            },
                            "snippet": {
                                "publishedAt": "2014-12-27T18:47:20.000Z",
                                "channelId": "UCfverUzOfmQVaKkUwZV_lpQ",
                                "title": "Meat Lasagna Recipe- STEP BY STEP |Cooking With Carolyn",
                                "description": "I've been getting requests for a Lasagna recipe so I wanted go ahead and get it out here. It is a little bit of work but you'll catch on and be fine. BE SURE AND ...",
                                "thumbnails": {
                                    "default": {
                                        "url": "https://i.ytimg.com/vi/46YzEe0CuSA/default.jpg"
                                    },
                                    "medium": {
                                        "url": "https://i.ytimg.com/vi/46YzEe0CuSA/mqdefault.jpg"
                                    },
                                    "high": {
                                        "url": "https://i.ytimg.com/vi/46YzEe0CuSA/hqdefault.jpg"
                                    }
                                },
                                "channelTitle": "CookingWithCarolyn",
                                "liveBroadcastContent": "none"
                            }
                        },
                        {
                            "kind": "youtube#searchResult",
                            "etag": "\"jOXstHOM20qemPbHbyzf7ztZ7rI/k6Npsc1H0osUn3pPoTAI0GPEbUI\"",
                            "id": {
                                "kind": "youtube#video",
                                "videoId": "wiaT4bR3xGA"
                            },
                            "snippet": {
                                "publishedAt": "2014-07-20T22:40:24.000Z",
                                "channelId": "UCXsTUAzpPyhpcv6dK0QNkHQ",
                                "title": "WordPress Tutorial for Beginners 2015: Step by Step Build Your Website",
                                "description": "Liked this wordpress tutorial for beginners step by step video? Visit http://www.websitewizard.tv/ for More Training + FREE Website Logo Kit (Limited Time Only) ...",
                                "thumbnails": {
                                    "default": {
                                        "url": "https://i.ytimg.com/vi/wiaT4bR3xGA/default.jpg"
                                    },
                                    "medium": {
                                        "url": "https://i.ytimg.com/vi/wiaT4bR3xGA/mqdefault.jpg"
                                    },
                                    "high": {
                                        "url": "https://i.ytimg.com/vi/wiaT4bR3xGA/hqdefault.jpg"
                                    }
                                },
                                "channelTitle": "",
                                "liveBroadcastContent": "none"
                            }
                        },
                        {
                            "kind": "youtube#searchResult",
                            "etag": "\"jOXstHOM20qemPbHbyzf7ztZ7rI/0wYqrbDE1mrRatvRa4_6hJC8xDs\"",
                            "id": {
                                "kind": "youtube#video",
                                "videoId": "2s07pUfrdHo"
                            },
                            "snippet": {
                                "publishedAt": "2015-01-06T12:00:02.000Z",
                                "channelId": "UCmi9wFeEZCV9gMDO-Sw_F-w",
                                "title": "Men's Haircut Tutorial Step by Step - TheSalonGuy",
                                "description": "In this men's haircut tutorial I demonstrate a step by step how to video. I break down the haircut from the blades, the blending, the layering and even the styling.",
                                "thumbnails": {
                                    "default": {
                                        "url": "https://i.ytimg.com/vi/2s07pUfrdHo/default.jpg"
                                    },
                                    "medium": {
                                        "url": "https://i.ytimg.com/vi/2s07pUfrdHo/mqdefault.jpg"
                                    },
                                    "high": {
                                        "url": "https://i.ytimg.com/vi/2s07pUfrdHo/hqdefault.jpg"
                                    }
                                },
                                "channelTitle": "TheSalonGuy",
                                "liveBroadcastContent": "none"
                            }
                        },
                        {
                            "kind": "youtube#searchResult",
                            "etag": "\"jOXstHOM20qemPbHbyzf7ztZ7rI/rQOqooooqdgTSK52Ba4BgWp2of0\"",
                            "id": {
                                "kind": "youtube#video",
                                "videoId": "XeZr_SibuUY"
                            },
                            "snippet": {
                                "publishedAt": "2014-12-11T23:50:01.000Z",
                                "channelId": "UCQZcmkkx7hc0ik4wjaAtINQ",
                                "title": "Kodi - Easy Setup, Step-by-Step",
                                "description": "Step-by-step configuration of Kodi (XMBC). Fully Installed and configured in front of your eyes. Great program and very very useful.",
                                "thumbnails": {
                                    "default": {
                                        "url": "https://i.ytimg.com/vi/XeZr_SibuUY/default.jpg"
                                    },
                                    "medium": {
                                        "url": "https://i.ytimg.com/vi/XeZr_SibuUY/mqdefault.jpg"
                                    },
                                    "high": {
                                        "url": "https://i.ytimg.com/vi/XeZr_SibuUY/hqdefault.jpg"
                                    }
                                },
                                "channelTitle": "peterc408",
                                "liveBroadcastContent": "none"
                            }
                        },
                        {
                            "kind": "youtube#searchResult",
                            "etag": "\"jOXstHOM20qemPbHbyzf7ztZ7rI/PKm-o9KPw2IiCqR7It7rQ77ktk0\"",
                            "id": {
                                "kind": "youtube#video",
                                "videoId": "j1CZ1JkFF38"
                            },
                            "snippet": {
                                "publishedAt": "2014-07-13T23:45:38.000Z",
                                "channelId": "UCbvCnJt_geDiz8aHqusrp1Q",
                                "title": "Winged Eyeliner Tutorial (EASY Step by Step!)",
                                "description": "Learn how to create perfect winged eyeliner. This is the method I have been using for years, and it never fails me! Subscribe to my channel: ...",
                                "thumbnails": {
                                    "default": {
                                        "url": "https://i.ytimg.com/vi/j1CZ1JkFF38/default.jpg"
                                    },
                                    "medium": {
                                        "url": "https://i.ytimg.com/vi/j1CZ1JkFF38/mqdefault.jpg"
                                    },
                                    "high": {
                                        "url": "https://i.ytimg.com/vi/j1CZ1JkFF38/hqdefault.jpg"
                                    }
                                },
                                "channelTitle": "genamourr",
                                "liveBroadcastContent": "none"
                            }
                        },
                        {
                            "kind": "youtube#searchResult",
                            "etag": "\"jOXstHOM20qemPbHbyzf7ztZ7rI/4GdejtQObxB1TdVoQZXLUm3vdBY\"",
                            "id": {
                                "kind": "youtube#video",
                                "videoId": "LKs3nw7YcR8"
                            },
                            "snippet": {
                                "publishedAt": "2013-08-25T20:34:25.000Z",
                                "channelId": "UCD2DV7A99npCDLVncYAIJiA",
                                "title": "How to paint a tree blowing in the wind STEP by STEP",
                                "description": "Join Amy on facebook here: http://www.facebook.com/herartfromtheattic Follow Amy on Instagram! @herartfromtheattic This is a tutorial by Amy Pearce of ...",
                                "thumbnails": {
                                    "default": {
                                        "url": "https://i.ytimg.com/vi/LKs3nw7YcR8/default.jpg"
                                    },
                                    "medium": {
                                        "url": "https://i.ytimg.com/vi/LKs3nw7YcR8/mqdefault.jpg"
                                    },
                                    "high": {
                                        "url": "https://i.ytimg.com/vi/LKs3nw7YcR8/hqdefault.jpg"
                                    }
                                },
                                "channelTitle": "amerspearce",
                                "liveBroadcastContent": "none"
                            }
                        },
                        {
                            "kind": "youtube#searchResult",
                            "etag": "\"jOXstHOM20qemPbHbyzf7ztZ7rI/c5_k8v0pVUrGLf-P9eS_cPNVDAA\"",
                            "id": {
                                "kind": "youtube#video",
                                "videoId": "2TLH1qzlTos"
                            },
                            "snippet": {
                                "publishedAt": "2014-11-05T12:13:32.000Z",
                                "channelId": "UCPHGIm-L5Y0TQpqiqYgZWxQ",
                                "title": "Paint With Maz - White Rose in Oils - Full Step by Step Tutorial",
                                "description": "Join Marion Dutton (Maz) in this stunning wet on wet white rose oil painting. Maz will take you all the way through this painting from start to finish.",
                                "thumbnails": {
                                    "default": {
                                        "url": "https://i.ytimg.com/vi/2TLH1qzlTos/default.jpg"
                                    },
                                    "medium": {
                                        "url": "https://i.ytimg.com/vi/2TLH1qzlTos/mqdefault.jpg"
                                    },
                                    "high": {
                                        "url": "https://i.ytimg.com/vi/2TLH1qzlTos/hqdefault.jpg"
                                    }
                                },
                                "channelTitle": "MazArtStudio",
                                "liveBroadcastContent": "none"
                            }
                        }
                    ]
                console.log(response)
                if (response.items) {
                    $scope.items = response.items
                }
                $scope.getIframeSrc = function (videoId) {
                    return 'https://www.youtube.com/embed/' + videoId;
                };
            };

            angular.element(document).ready(function() {
                angular.bootstrap(document, ['app']);
            });
        });
    });




}