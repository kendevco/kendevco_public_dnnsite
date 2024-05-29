;

/*
 * DnnSF (DNN Sharp Foundation) - Reusable components
 */


var initDnnsfComponents = function (angular) {
    angular.module('commonHooks', [])
        .factory('commonHooks', function () {
            return {
                onCloneAction: []
            }
        });

    window.dnnsfDependencies = window.dnnsfDependencies || [];
    angular.module('dnnsf.components', ['ngSanitize', 'textAngular', 'dnnsf', 'commonHooks'].concat(window.dnnsfDependencies))

        .factory('constantsFactory', ['$injector', function ($injector) {
            return {
                getConstantsService: function () {
                    var defaultConstantsService = {
                        requiresSvcframework: function () { return false; },
                        isWebApi: function () { return false; },
                        dataSourcesControllerName: function () { throw "No dataSourcesControllerName was set."; },
                        helperScriptsPath: "",
                        helperScriptsExtension: ".aspx"
                    };

                    if ($injector.has("constantsService")) {
                        return Object.assign({}, defaultConstantsService, $injector.get("constantsService"))
                    }

                    return defaultConstantsService;
                }
            }
        }])

        //convert obj to array to be able to sort
        .filter('toArray', function () {
            return function (obj) {
                if (!(obj instanceof Object)) return obj;

                return _.map(obj, function (val, key) {
                    return Object.defineProperty(val, '$key', { __proto__: null, value: key });
                });
            }
        })

        .constant('FONT_AWESOME_ICONS', [{ icon: "ad", }, { icon: "address-book", }, { icon: "address-card", }, { icon: "adjust", }, { icon: "air-freshener", }, { icon: "align-center", }, { icon: "align-justify", }, { icon: "align-left", }, { icon: "align-right", }, { icon: "allergies", }, { icon: "ambulance", }, { icon: "anchor", }, { icon: "angle-double-down", }, { icon: "angle-double-left", }, { icon: "angle-double-right", }, { icon: "angle-double-up", }, { icon: "angle-down", }, { icon: "angle-left", }, { icon: "angle-right", }, { icon: "angle-up", }, { icon: "angry", }, { icon: "ankh", }, { icon: "apple-alt", }, { icon: "archive", }, { icon: "archway", }, { icon: "arrow-alt-circle-down", }, { icon: "arrow-alt-circle-left", }, { icon: "arrow-alt-circle-right", }, { icon: "arrow-alt-circle-up", }, { icon: "arrow-circle-down", }, { icon: "arrow-circle-left", }, { icon: "arrow-circle-right", }, { icon: "arrow-circle-up", }, { icon: "arrow-down", }, { icon: "arrow-left", }, { icon: "arrow-right", }, { icon: "arrow-up", }, { icon: "arrows-alt", }, { icon: "arrows-alt-h", }, { icon: "arrows-alt-v", }, { icon: "assistive-listening-systems", }, { icon: "asterisk", }, { icon: "at", }, { icon: "atlas", }, { icon: "atom", }, { icon: "audio-description", }, { icon: "award", }, { icon: "baby", }, { icon: "baby-carriage", }, { icon: "backspace", }, { icon: "backward", }, { icon: "bacon", }, { icon: "bacteria", }, { icon: "bacterium", }, { icon: "bahai", }, { icon: "balance-scale", }, { icon: "balance-scale-left", }, { icon: "balance-scale-right", }, { icon: "ban", }, { icon: "band-aid", }, { icon: "barcode", }, { icon: "bars", }, { icon: "baseball-ball", }, { icon: "basketball-ball", }, { icon: "bath", }, { icon: "battery-empty", }, { icon: "battery-full", }, { icon: "battery-half", }, { icon: "battery-quarter", }, { icon: "battery-three-quarters", }, { icon: "bed", }, { icon: "beer", }, { icon: "bell", }, { icon: "bell-slash", }, { icon: "bezier-curve", }, { icon: "bible", }, { icon: "bicycle", }, { icon: "biking", }, { icon: "binoculars", }, { icon: "biohazard", }, { icon: "birthday-cake", }, { icon: "blender", }, { icon: "blender-phone", }, { icon: "blind", }, { icon: "blog", }, { icon: "bold", }, { icon: "bolt", }, { icon: "bomb", }, { icon: "bone", }, { icon: "bong", }, { icon: "book", }, { icon: "book-dead", }, { icon: "book-medical", }, { icon: "book-open", }, { icon: "book-reader", }, { icon: "bookmark", }, { icon: "border-all", }, { icon: "border-none", }, { icon: "border-style", }, { icon: "bowling-ball", }, { icon: "box", }, { icon: "box-open", }, { icon: "box-tissue", }, { icon: "boxes", }, { icon: "braille", }, { icon: "brain", }, { icon: "bread-slice", }, { icon: "briefcase", }, { icon: "briefcase-medical", }, { icon: "broadcast-tower", }, { icon: "broom", }, { icon: "brush", }, { icon: "bug", }, { icon: "building", }, { icon: "bullhorn", }, { icon: "bullseye", }, { icon: "burn", }, { icon: "bus", }, { icon: "bus-alt", }, { icon: "business-time", }, { icon: "calculator", }, { icon: "calendar", }, { icon: "calendar-alt", }, { icon: "calendar-check", }, { icon: "calendar-day", }, { icon: "calendar-minus", }, { icon: "calendar-plus", }, { icon: "calendar-times", }, { icon: "calendar-week", }, { icon: "camera", }, { icon: "camera-retro", }, { icon: "campground", }, { icon: "candy-cane", }, { icon: "cannabis", }, { icon: "capsules", }, { icon: "car", }, { icon: "car-alt", }, { icon: "car-battery", }, { icon: "car-crash", }, { icon: "car-side", }, { icon: "caravan", }, { icon: "caret-down", }, { icon: "caret-left", }, { icon: "caret-right", }, { icon: "caret-square-down", }, { icon: "caret-square-left", }, { icon: "caret-square-right", }, { icon: "caret-square-up", }, { icon: "caret-up", }, { icon: "carrot", }, { icon: "cart-arrow-down", }, { icon: "cart-plus", }, { icon: "cash-register", }, { icon: "cat", }, { icon: "certificate", }, { icon: "chair", }, { icon: "chalkboard", }, { icon: "chalkboard-teacher", }, { icon: "charging-station", }, { icon: "chart-area", }, { icon: "chart-bar", }, { icon: "chart-line", }, { icon: "chart-pie", }, { icon: "check", }, { icon: "check-circle", }, { icon: "check-double", }, { icon: "check-square", }, { icon: "cheese", }, { icon: "chess", }, { icon: "chess-bishop", }, { icon: "chess-board", }, { icon: "chess-king", }, { icon: "chess-knight", }, { icon: "chess-pawn", }, { icon: "chess-queen", }, { icon: "chess-rook", }, { icon: "chevron-circle-down", }, { icon: "chevron-circle-left", }, { icon: "chevron-circle-right", }, { icon: "chevron-circle-up", }, { icon: "chevron-down", }, { icon: "chevron-left", }, { icon: "chevron-right", }, { icon: "chevron-up", }, { icon: "child", }, { icon: "church", }, { icon: "circle", }, { icon: "circle-notch", }, { icon: "city", }, { icon: "clinic-medical", }, { icon: "clipboard", }, { icon: "clipboard-check", }, { icon: "clipboard-list", }, { icon: "clock", }, { icon: "clone", }, { icon: "closed-captioning", }, { icon: "cloud", }, { icon: "cloud-download-alt", }, { icon: "cloud-meatball", }, { icon: "cloud-moon", }, { icon: "cloud-moon-rain", }, { icon: "cloud-rain", }, { icon: "cloud-showers-heavy", }, { icon: "cloud-sun", }, { icon: "cloud-sun-rain", }, { icon: "cloud-upload-alt", }, { icon: "cocktail", }, { icon: "code", }, { icon: "code-branch", }, { icon: "coffee", }, { icon: "cog", }, { icon: "cogs", }, { icon: "coins", }, { icon: "columns", }, { icon: "comment", }, { icon: "comment-alt", }, { icon: "comment-dollar", }, { icon: "comment-dots", }, { icon: "comment-medical", }, { icon: "comment-slash", }, { icon: "comments", }, { icon: "comments-dollar", }, { icon: "compact-disc", }, { icon: "compass", }, { icon: "compress", }, { icon: "compress-alt", }, { icon: "compress-arrows-alt", }, { icon: "concierge-bell", }, { icon: "cookie", }, { icon: "cookie-bite", }, { icon: "copy", }, { icon: "copyright", }, { icon: "couch", }, { icon: "credit-card", }, { icon: "crop", }, { icon: "crop-alt", }, { icon: "cross", }, { icon: "crosshairs", }, { icon: "crow", }, { icon: "crown", }, { icon: "crutch", }, { icon: "cube", }, { icon: "cubes", }, { icon: "cut", }, { icon: "database", }, { icon: "deaf", }, { icon: "democrat", }, { icon: "desktop", }, { icon: "dharmachakra", }, { icon: "diagnoses", }, { icon: "dice", }, { icon: "dice-d20", }, { icon: "dice-d6", }, { icon: "dice-five", }, { icon: "dice-four", }, { icon: "dice-one", }, { icon: "dice-six", }, { icon: "dice-three", }, { icon: "dice-two", }, { icon: "digital-tachograph", }, { icon: "directions", }, { icon: "disease", }, { icon: "divide", }, { icon: "dizzy", }, { icon: "dna", }, { icon: "dog", }, { icon: "dollar-sign", }, { icon: "dolly", }, { icon: "dolly-flatbed", }, { icon: "donate", }, { icon: "door-closed", }, { icon: "door-open", }, { icon: "dot-circle", }, { icon: "dove", }, { icon: "download", }, { icon: "drafting-compass", }, { icon: "dragon", }, { icon: "draw-polygon", }, { icon: "drum", }, { icon: "drum-steelpan", }, { icon: "drumstick-bite", }, { icon: "dumbbell", }, { icon: "dumpster", }, { icon: "dumpster-fire", }, { icon: "dungeon", }, { icon: "edit", }, { icon: "egg", }, { icon: "eject", }, { icon: "ellipsis-h", }, { icon: "ellipsis-v", }, { icon: "envelope", }, { icon: "envelope-open", }, { icon: "envelope-open-text", }, { icon: "envelope-square", }, { icon: "equals", }, { icon: "eraser", }, { icon: "ethernet", }, { icon: "euro-sign", }, { icon: "exchange-alt", }, { icon: "exclamation", }, { icon: "exclamation-circle", }, { icon: "exclamation-triangle", }, { icon: "expand", }, { icon: "expand-alt", }, { icon: "expand-arrows-alt", }, { icon: "external-link-alt", }, { icon: "external-link-square-alt", }, { icon: "eye", }, { icon: "eye-dropper", }, { icon: "eye-slash", }, { icon: "fan", }, { icon: "fast-backward", }, { icon: "fast-forward", }, { icon: "faucet", }, { icon: "fax", }, { icon: "feather", }, { icon: "feather-alt", }, { icon: "female", }, { icon: "fighter-jet", }, { icon: "file", }, { icon: "file-alt", }, { icon: "file-archive", }, { icon: "file-audio", }, { icon: "file-code", }, { icon: "file-contract", }, { icon: "file-csv", }, { icon: "file-download", }, { icon: "file-excel", }, { icon: "file-export", }, { icon: "file-image", }, { icon: "file-import", }, { icon: "file-invoice", }, { icon: "file-invoice-dollar", }, { icon: "file-medical", }, { icon: "file-medical-alt", }, { icon: "file-pdf", }, { icon: "file-powerpoint", }, { icon: "file-prescription", }, { icon: "file-signature", }, { icon: "file-upload", }, { icon: "file-video", }, { icon: "file-word", }, { icon: "fill", }, { icon: "fill-drip", }, { icon: "film", }, { icon: "filter", }, { icon: "fingerprint", }, { icon: "fire", }, { icon: "fire-alt", }, { icon: "fire-extinguisher", }, { icon: "first-aid", }, { icon: "fish", }, { icon: "fist-raised", }, { icon: "flag", }, { icon: "flag-checkered", }, { icon: "flag-usa", }, { icon: "flask", }, { icon: "flushed", }, { icon: "folder", }, { icon: "folder-minus", }, { icon: "folder-open", }, { icon: "folder-plus", }, { icon: "font", }, { icon: "football-ball", }, { icon: "forward", }, { icon: "frog", }, { icon: "frown", }, { icon: "frown-open", }, { icon: "funnel-dollar", }, { icon: "futbol", }, { icon: "gamepad", }, { icon: "gas-pump", }, { icon: "gavel", }, { icon: "gem", }, { icon: "genderless", }, { icon: "ghost", }, { icon: "gift", }, { icon: "gifts", }, { icon: "glass-cheers", }, { icon: "glass-martini", }, { icon: "glass-martini-alt", }, { icon: "glass-whiskey", }, { icon: "glasses", }, { icon: "globe", }, { icon: "globe-africa", }, { icon: "globe-americas", }, { icon: "globe-asia", }, { icon: "globe-europe", }, { icon: "golf-ball", }, { icon: "gopuram", }, { icon: "graduation-cap", }, { icon: "greater-than", }, { icon: "greater-than-equal", }, { icon: "grimace", }, { icon: "grin", }, { icon: "grin-alt", }, { icon: "grin-beam", }, { icon: "grin-beam-sweat", }, { icon: "grin-hearts", }, { icon: "grin-squint", }, { icon: "grin-squint-tears", }, { icon: "grin-stars", }, { icon: "grin-tears", }, { icon: "grin-tongue", }, { icon: "grin-tongue-squint", }, { icon: "grin-tongue-wink", }, { icon: "grin-wink", }, { icon: "grip-horizontal", }, { icon: "grip-lines", }, { icon: "grip-lines-vertical", }, { icon: "grip-vertical", }, { icon: "guitar", }, { icon: "h-square", }, { icon: "hamburger", }, { icon: "hammer", }, { icon: "hamsa", }, { icon: "hand-holding", }, { icon: "hand-holding-heart", }, { icon: "hand-holding-medical", }, { icon: "hand-holding-usd", }, { icon: "hand-holding-water", }, { icon: "hand-lizard", }, { icon: "hand-middle-finger", }, { icon: "hand-paper", }, { icon: "hand-peace", }, { icon: "hand-point-down", }, { icon: "hand-point-left", }, { icon: "hand-point-right", }, { icon: "hand-point-up", }, { icon: "hand-pointer", }, { icon: "hand-rock", }, { icon: "hand-scissors", }, { icon: "hand-sparkles", }, { icon: "hand-spock", }, { icon: "hands", }, { icon: "hands-helping", }, { icon: "hands-wash", }, { icon: "handshake", }, { icon: "handshake-alt-slash", }, { icon: "handshake-slash", }, { icon: "hanukiah", }, { icon: "hard-hat", }, { icon: "hashtag", }, { icon: "hat-cowboy", }, { icon: "hat-cowboy-side", }, { icon: "hat-wizard", }, { icon: "hdd", }, { icon: "head-side-cough", }, { icon: "head-side-cough-slash", }, { icon: "head-side-mask", }, { icon: "head-side-virus", }, { icon: "heading", }, { icon: "headphones", }, { icon: "headphones-alt", }, { icon: "headset", }, { icon: "heart", }, { icon: "heart-broken", }, { icon: "heartbeat", }, { icon: "helicopter", }, { icon: "highlighter", }, { icon: "hiking", }, { icon: "hippo", }, { icon: "history", }, { icon: "hockey-puck", }, { icon: "holly-berry", }, { icon: "home", }, { icon: "horse", }, { icon: "horse-head", }, { icon: "hospital", }, { icon: "hospital-alt", }, { icon: "hospital-symbol", }, { icon: "hospital-user", }, { icon: "hot-tub", }, { icon: "hotdog", }, { icon: "hotel", }, { icon: "hourglass", }, { icon: "hourglass-end", }, { icon: "hourglass-half", }, { icon: "hourglass-start", }, { icon: "house-damage", }, { icon: "house-user", }, { icon: "hryvnia", }, { icon: "i-cursor", }, { icon: "ice-cream", }, { icon: "icicles", }, { icon: "icons", }, { icon: "id-badge", }, { icon: "id-card", }, { icon: "id-card-alt", }, { icon: "igloo", }, { icon: "image", }, { icon: "images", }, { icon: "inbox", }, { icon: "indent", }, { icon: "industry", }, { icon: "infinity", }, { icon: "info", }, { icon: "info-circle", }, { icon: "italic", }, { icon: "jedi", }, { icon: "joint", }, { icon: "journal-whills", }, { icon: "kaaba", }, { icon: "key", }, { icon: "keyboard", }, { icon: "khanda", }, { icon: "kiss", }, { icon: "kiss-beam", }, { icon: "kiss-wink-heart", }, { icon: "kiwi-bird", }, { icon: "landmark", }, { icon: "language", }, { icon: "laptop", }, { icon: "laptop-code", }, { icon: "laptop-house", }, { icon: "laptop-medical", }, { icon: "laugh", }, { icon: "laugh-beam", }, { icon: "laugh-squint", }, { icon: "laugh-wink", }, { icon: "layer-group", }, { icon: "leaf", }, { icon: "lemon", }, { icon: "less-than", }, { icon: "less-than-equal", }, { icon: "level-down-alt", }, { icon: "level-up-alt", }, { icon: "life-ring", }, { icon: "lightbulb", }, { icon: "link", }, { icon: "lira-sign", }, { icon: "list", }, { icon: "list-alt", }, { icon: "list-ol", }, { icon: "list-ul", }, { icon: "location-arrow", }, { icon: "lock", }, { icon: "lock-open", }, { icon: "long-arrow-alt-down", }, { icon: "long-arrow-alt-left", }, { icon: "long-arrow-alt-right", }, { icon: "long-arrow-alt-up", }, { icon: "low-vision", }, { icon: "luggage-cart", }, { icon: "lungs", }, { icon: "lungs-virus", }, { icon: "magic", }, { icon: "magnet", }, { icon: "mail-bulk", }, { icon: "male", }, { icon: "map", }, { icon: "map-marked", }, { icon: "map-marked-alt", }, { icon: "map-marker", }, { icon: "map-marker-alt", }, { icon: "map-pin", }, { icon: "map-signs", }, { icon: "marker", }, { icon: "mars", }, { icon: "mars-double", }, { icon: "mars-stroke", }, { icon: "mars-stroke-h", }, { icon: "mars-stroke-v", }, { icon: "mask", }, { icon: "medal", }, { icon: "medkit", }, { icon: "meh", }, { icon: "meh-blank", }, { icon: "meh-rolling-eyes", }, { icon: "memory", }, { icon: "menorah", }, { icon: "mercury", }, { icon: "meteor", }, { icon: "microchip", }, { icon: "microphone", }, { icon: "microphone-alt", }, { icon: "microphone-alt-slash", }, { icon: "microphone-slash", }, { icon: "microscope", }, { icon: "minus", }, { icon: "minus-circle", }, { icon: "minus-square", }, { icon: "mitten", }, { icon: "mobile", }, { icon: "mobile-alt", }, { icon: "money-bill", }, { icon: "money-bill-alt", }, { icon: "money-bill-wave", }, { icon: "money-bill-wave-alt", }, { icon: "money-check", }, { icon: "money-check-alt", }, { icon: "monument", }, { icon: "moon", }, { icon: "mortar-pestle", }, { icon: "mosque", }, { icon: "motorcycle", }, { icon: "mountain", }, { icon: "mouse", }, { icon: "mouse-pointer", }, { icon: "mug-hot", }, { icon: "music", }, { icon: "network-wired", }, { icon: "neuter", }, { icon: "newspaper", }, { icon: "not-equal", }, { icon: "notes-medical", }, { icon: "object-group", }, { icon: "object-ungroup", }, { icon: "oil-can", }, { icon: "om", }, { icon: "otter", }, { icon: "outdent", }, { icon: "pager", }, { icon: "paint-brush", }, { icon: "paint-roller", }, { icon: "palette", }, { icon: "pallet", }, { icon: "paper-plane", }, { icon: "paperclip", }, { icon: "parachute-box", }, { icon: "paragraph", }, { icon: "parking", }, { icon: "passport", }, { icon: "pastafarianism", }, { icon: "paste", }, { icon: "pause", }, { icon: "pause-circle", }, { icon: "paw", }, { icon: "peace", }, { icon: "pen", }, { icon: "pen-alt", }, { icon: "pen-fancy", }, { icon: "pen-nib", }, { icon: "pen-square", }, { icon: "pencil-alt", }, { icon: "pencil-ruler", }, { icon: "people-arrows", }, { icon: "people-carry", }, { icon: "pepper-hot", }, { icon: "percent", }, { icon: "percentage", }, { icon: "person-booth", }, { icon: "phone", }, { icon: "phone-alt", }, { icon: "phone-slash", }, { icon: "phone-square", }, { icon: "phone-square-alt", }, { icon: "phone-volume", }, { icon: "photo-video", }, { icon: "piggy-bank", }, { icon: "pills", }, { icon: "pizza-slice", }, { icon: "place-of-worship", }, { icon: "plane", }, { icon: "plane-arrival", }, { icon: "plane-departure", }, { icon: "plane-slash", }, { icon: "play", }, { icon: "play-circle", }, { icon: "plug", }, { icon: "plus", }, { icon: "plus-circle", }, { icon: "plus-square", }, { icon: "podcast", }, { icon: "poll", }, { icon: "poll-h", }, { icon: "poo", }, { icon: "poo-storm", }, { icon: "poop", }, { icon: "portrait", }, { icon: "pound-sign", }, { icon: "power-off", }, { icon: "pray", }, { icon: "praying-hands", }, { icon: "prescription", }, { icon: "prescription-bottle", }, { icon: "prescription-bottle-alt", }, { icon: "print", }, { icon: "procedures", }, { icon: "project-diagram", }, { icon: "pump-medical", }, { icon: "pump-soap", }, { icon: "puzzle-piece", }, { icon: "qrcode", }, { icon: "question", }, { icon: "question-circle", }, { icon: "quidditch", }, { icon: "quote-left", }, { icon: "quote-right", }, { icon: "quran", }, { icon: "radiation", }, { icon: "radiation-alt", }, { icon: "rainbow", }, { icon: "random", }, { icon: "receipt", }, { icon: "record-vinyl", }, { icon: "recycle", }, { icon: "redo", }, { icon: "redo-alt", }, { icon: "registered", }, { icon: "remove-format", }, { icon: "reply", }, { icon: "reply-all", }, { icon: "republican", }, { icon: "restroom", }, { icon: "retweet", }, { icon: "ribbon", }, { icon: "ring", }, { icon: "road", }, { icon: "robot", }, { icon: "rocket", }, { icon: "route", }, { icon: "rss", }, { icon: "rss-square", }, { icon: "ruble-sign", }, { icon: "ruler", }, { icon: "ruler-combined", }, { icon: "ruler-horizontal", }, { icon: "ruler-vertical", }, { icon: "running", }, { icon: "rupee-sign", }, { icon: "sad-cry", }, { icon: "sad-tear", }, { icon: "satellite", }, { icon: "satellite-dish", }, { icon: "save", }, { icon: "school", }, { icon: "screwdriver", }, { icon: "scroll", }, { icon: "sd-card", }, { icon: "search", }, { icon: "search-dollar", }, { icon: "search-location", }, { icon: "search-minus", }, { icon: "search-plus", }, { icon: "seedling", }, { icon: "server", }, { icon: "shapes", }, { icon: "share", }, { icon: "share-alt", }, { icon: "share-alt-square", }, { icon: "share-square", }, { icon: "shekel-sign", }, { icon: "shield-alt", }, { icon: "shield-virus", }, { icon: "ship", }, { icon: "shipping-fast", }, { icon: "shoe-prints", }, { icon: "shopping-bag", }, { icon: "shopping-basket", }, { icon: "shopping-cart", }, { icon: "shower", }, { icon: "shuttle-van", }, { icon: "sign", }, { icon: "sign-in-alt", }, { icon: "sign-language", }, { icon: "sign-out-alt", }, { icon: "signal", }, { icon: "signature", }, { icon: "sim-card", }, { icon: "sink", }, { icon: "sitemap", }, { icon: "skating", }, { icon: "skiing", }, { icon: "skiing-nordic", }, { icon: "skull", }, { icon: "skull-crossbones", }, { icon: "slash", }, { icon: "sleigh", }, { icon: "sliders-h", }, { icon: "smile", }, { icon: "smile-beam", }, { icon: "smile-wink", }, { icon: "smog", }, { icon: "smoking", }, { icon: "smoking-ban", }, { icon: "sms", }, { icon: "snowboarding", }, { icon: "snowflake", }, { icon: "snowman", }, { icon: "snowplow", }, { icon: "soap", }, { icon: "socks", }, { icon: "solar-panel", }, { icon: "sort", }, { icon: "sort-alpha-down", }, { icon: "sort-alpha-down-alt", }, { icon: "sort-alpha-up", }, { icon: "sort-alpha-up-alt", }, { icon: "sort-amount-down", }, { icon: "sort-amount-down-alt", }, { icon: "sort-amount-up", }, { icon: "sort-amount-up-alt", }, { icon: "sort-down", }, { icon: "sort-numeric-down", }, { icon: "sort-numeric-down-alt", }, { icon: "sort-numeric-up", }, { icon: "sort-numeric-up-alt", }, { icon: "sort-up", }, { icon: "spa", }, { icon: "space-shuttle", }, { icon: "spell-check", }, { icon: "spider", }, { icon: "spinner", }, { icon: "splotch", }, { icon: "spray-can", }, { icon: "square", }, { icon: "square-full", }, { icon: "square-root-alt", }, { icon: "stamp", }, { icon: "star", }, { icon: "star-and-crescent", }, { icon: "star-half", }, { icon: "star-half-alt", }, { icon: "star-of-david", }, { icon: "star-of-life", }, { icon: "step-backward", }, { icon: "step-forward", }, { icon: "stethoscope", }, { icon: "sticky-note", }, { icon: "stop", }, { icon: "stop-circle", }, { icon: "stopwatch", }, { icon: "stopwatch-20", }, { icon: "store", }, { icon: "store-alt", }, { icon: "store-alt-slash", }, { icon: "store-slash", }, { icon: "stream", }, { icon: "street-view", }, { icon: "strikethrough", }, { icon: "stroopwafel", }, { icon: "subscript", }, { icon: "subway", }, { icon: "suitcase", }, { icon: "suitcase-rolling", }, { icon: "sun", }, { icon: "superscript", }, { icon: "surprise", }, { icon: "swatchbook", }, { icon: "swimmer", }, { icon: "swimming-pool", }, { icon: "synagogue", }, { icon: "sync", }, { icon: "sync-alt", }, { icon: "syringe", }, { icon: "table", }, { icon: "table-tennis", }, { icon: "tablet", }, { icon: "tablet-alt", }, { icon: "tablets", }, { icon: "tachometer-alt", }, { icon: "tag", }, { icon: "tags", }, { icon: "tape", }, { icon: "tasks", }, { icon: "taxi", }, { icon: "teeth", }, { icon: "teeth-open", }, { icon: "temperature-high", }, { icon: "temperature-low", }, { icon: "tenge", }, { icon: "terminal", }, { icon: "text-height", }, { icon: "text-width", }, { icon: "th", }, { icon: "th-large", }, { icon: "th-list", }, { icon: "theater-masks", }, { icon: "thermometer", }, { icon: "thermometer-empty", }, { icon: "thermometer-full", }, { icon: "thermometer-half", }, { icon: "thermometer-quarter", }, { icon: "thermometer-three-quarters", }, { icon: "thumbs-down", }, { icon: "thumbs-up", }, { icon: "thumbtack", }, { icon: "ticket-alt", }, { icon: "times", }, { icon: "times-circle", }, { icon: "tint", }, { icon: "tint-slash", }, { icon: "tired", }, { icon: "toggle-off", }, { icon: "toggle-on", }, { icon: "toilet", }, { icon: "toilet-paper", }, { icon: "toilet-paper-slash", }, { icon: "toolbox", }, { icon: "tools", }, { icon: "tooth", }, { icon: "torah", }, { icon: "torii-gate", }, { icon: "tractor", }, { icon: "trademark", }, { icon: "traffic-light", }, { icon: "trailer", }, { icon: "train", }, { icon: "tram", }, { icon: "transgender", }, { icon: "transgender-alt", }, { icon: "trash", }, { icon: "trash-alt", }, { icon: "trash-restore", }, { icon: "trash-restore-alt", }, { icon: "tree", }, { icon: "trophy", }, { icon: "truck", }, { icon: "truck-loading", }, { icon: "truck-monster", }, { icon: "truck-moving", }, { icon: "truck-pickup", }, { icon: "tshirt", }, { icon: "tty", }, { icon: "tv", }, { icon: "umbrella", }, { icon: "umbrella-beach", }, { icon: "underline", }, { icon: "undo", }, { icon: "undo-alt", }, { icon: "universal-access", }, { icon: "university", }, { icon: "unlink", }, { icon: "unlock", }, { icon: "unlock-alt", }, { icon: "upload", }, { icon: "user", }, { icon: "user-alt", }, { icon: "user-alt-slash", }, { icon: "user-astronaut", }, { icon: "user-check", }, { icon: "user-circle", }, { icon: "user-clock", }, { icon: "user-cog", }, { icon: "user-edit", }, { icon: "user-friends", }, { icon: "user-graduate", }, { icon: "user-injured", }, { icon: "user-lock", }, { icon: "user-md", }, { icon: "user-minus", }, { icon: "user-ninja", }, { icon: "user-nurse", }, { icon: "user-plus", }, { icon: "user-secret", }, { icon: "user-shield", }, { icon: "user-slash", }, { icon: "user-tag", }, { icon: "user-tie", }, { icon: "user-times", }, { icon: "users", }, { icon: "users-cog", }, { icon: "users-slash", }, { icon: "utensil-spoon", }, { icon: "utensils", }, { icon: "vector-square", }, { icon: "venus", }, { icon: "venus-double", }, { icon: "venus-mars", }, { icon: "vial", }, { icon: "vials", }, { icon: "video", }, { icon: "video-slash", }, { icon: "vihara", }, { icon: "virus", }, { icon: "virus-slash", }, { icon: "viruses", }, { icon: "voicemail", }, { icon: "volleyball-ball", }, { icon: "volume-down", }, { icon: "volume-mute", }, { icon: "volume-off", }, { icon: "volume-up", }, { icon: "vote-yea", }, { icon: "vr-cardboard", }, { icon: "walking", }, { icon: "wallet", }, { icon: "warehouse", }, { icon: "water", }, { icon: "wave-square", }, { icon: "weight", }, { icon: "weight-hanging", }, { icon: "wheelchair", }, { icon: "wifi", }, { icon: "wind", }, { icon: "window-close", }, { icon: "window-maximize", }, { icon: "window-minimize", }, { icon: "window-restore", }, { icon: "wine-bottle", }, { icon: "wine-glass", }, { icon: "wine-glass-alt", }, { icon: "won-sign", }, { icon: "wrench", }, { icon: "x-ray", }, { icon: "yen-sign", }, { icon: "yin-yang", }])

        //directive used to parse numeric values to strings for binding and strings to numbers on unbinding
        .directive('convertToNumber', function () {
            return {
                require: 'ngModel',
                link: function (scope, element, attrs, ngModel) {
                    ngModel.$parsers.push(function (value) {
                        return '' + value;
                    });
                    ngModel.$formatters.push(function (value) {
                        return parseFloat(value, 10);
                    });
                }
            };
        })

        .directive('convertToString', function () {
            return {
                require: 'ngModel',
                link: function (scope, element, attrs, ngModel) {
                    ngModel.$parsers.push(function (value) {
                        return parseFloat(value, 10);
                    });
                    ngModel.$formatters.push(function (value) {
                        return '' + value;
                    });
                }
            };
        })

        .directive('controlSave', function () {
            return {
                restrict: 'E',
                scope: {
                    onSave: '&'
                },
                link: function (scope, element, attrs, ngModel) {
                    function ctrlSave(event) {
                        //19 for Mac Command+S
                        if (!(String.fromCharCode(event.which).toLowerCase() === 's' && event.ctrlKey) && !(event.which === 19)) {
                            return true;
                        }
                        scope.onSave();
                        event.preventDefault();
                        return false;
                    }
                    $(document).keydown(ctrlSave);
                    scope.$on('$destroy', function () {
                        $(document).unbind("keydown", ctrlSave);
                    });

                }
            };
        })

        // https://github.com/dnnsfAngular15/dnnsfAngular15.js/issues/4516
        .directive('fixchange', [function () {

            return {
                replace: false,
                require: 'ngModel',
                scope: false,
                link: function (scope, element, attrs, ngModelCtrl) {
                    element.on('change', function () {
                        scope.$apply(function () {
                            if (attrs['type'] == 'radio') {
                                ngModelCtrl.$setViewValue(attrs['value']);
                            } else if (attrs['type'] == 'checkbox') {
                                ngModelCtrl.$setViewValue(element[0].checked);
                            }
                        });
                    });
                }
            };
        }])

        .directive('dnnsfLicensing', ['dnnsf', '$http', function (dnnsf, $http) {

            return {
                replace: false,
                //require: 'ngModel',
                templateUrl: dnnsf.commonUrl + '/static/dnnsf/tpl/licensing.html?v=' + dnnsf.env.version,
                scope: {
                },
                link: function (scope, element, attrs) {
                    var url = dnnsf.adminApi('GetLicense');
                    $http({
                        method: 'GET',
                        url: url,
                        cache: true
                    }).success(function (data, status) {
                        scope.license = data;
                    });

                }
            };
        }])

        .directive('dnnsfRadiogroup', ['$compile', '$timeout', '$parse', function ($compile, $timeout, $parse) {
            return {
                restrict: 'A',
                scope: { model: '=', options: '=' },
                controller: function ($scope) {
                    $scope.getLabel = function (option) {
                        return typeof option.label != 'undefined' ? option.label : option;
                    };
                    $scope.getValue = function (option) {
                        return typeof option.value != 'undefined' ? option.value : option;
                    };
                },
                template:
                    '<div class="btn-group" data-toggle="buttons">' +
                    '<label class="btn btn-default btn-sm" data-ng-repeat="o in options" data-ng-class="{\'active\': model == getValue(o), \'btn-info\': model == getValue(o) }">' +
                    '<input type="radio" fixchange="" data-ng-model="$parent.model" value="{{getValue(o)}}" />{{getLabel(o)}}' +
                    '</label>' +
                    '</div>',
                replace: true
            };
        }])

        // fancy checkbox
        .directive('dnnsfCheckbox', ['$compile', '$timeout', '$parse', function ($compile, $timeout, $parse) {
            return {
                restrict: 'A',
                scope: { ngModel: '=' },
                link: function (scope, element, attrs) {

                    scope.changed = function (updateModel) {

                        var checked = updateModel ? element.hasClass('active') : scope.ngModel;
                        if (updateModel)
                            scope.ngModel = checked;

                        if (checked)
                            element.addClass('btn-info active')
                        else
                            element.removeClass('btn-info')
                    };
                    scope.changed();

                    element.click(function () {
                        $timeout(function () {
                            scope.changed(true);
                        });
                    });

                    scope.$watch('ngModel', function () {
                        scope.changed();
                    });
                }
            };
        }])

        // indeterminate checkbox state
        .directive('dnnsfCheckboxPartial', ['$compile', '$timeout', '$parse', function ($compile, $timeout, $parse) {
            return {
                restrict: 'A',
                scope: {
                    expr: '=dnnsfCheckboxPartial'
                },
                link: function (scope, element, attrs) {
                    scope.$watch('expr', function () {
                        element[0].indeterminate = scope.expr;
                    });
                }
            };
        }])

        .directive('dnnsfRegistration', ['$timeout', '$http', '$sce', 'dnnsf', 'dataSources', function ($timeout, $http, $sce, dnnsf, dataSources) {
            return {
                scope: true,
                templateUrl: dnnsf.commonUrl + '/static/dnnsf/tpl/licensing.html?v=' + dnnsf.env.version,
                link: function (scope, element, attrs) {

                    scope.dnnsf = dnnsf;
                    scope.$sce = $sce;

                    // pull licensing from server
                    $http({
                        method: 'GET',
                        url: dnnsf.adminApi('GetLicense'),
                        cache: true
                    }).success(function (data, status) {
                        scope.license = data;
                    });
                }
            };
        }])

        .directive('dnnsfCheckUpdate', ['$timeout', '$http', '$sce', 'dnnsf', 'dataSources', function ($timeout, $http, $sce, dnnsf, dataSources) {
            return {
                scope: true,
                templateUrl: dnnsf.commonUrl + '/static/dnnsf/tpl/check-update.html?v=' + dnnsf.env.version,
                link: function (scope, element, attrs) {

                    scope.dnnsf = dnnsf;
                    scope.$sce = $sce;

                    // pull licensing from server
                    $http({
                        method: 'GET',
                        url: '//www.dnnsharp.com/DesktopModules/DnnSharp/DnnApiEndpoint/Api.ashx?method=CurrentVersion&productCode=' + dnnsf.productCode,
                        cache: true
                    }).success(function (data, status) {
                        scope.serverVersion = data;
                    });
                }
            };
        }])

        // this is to get lists from the server and share them between settings (using the cache offered by the $http service)
        // the array is for minification purposes, otherwise dependency injection will not work
        .factory('dataSources', ['$q', 'dnnsf', 'dnnsfHttp', 'constantsFactory', function ($q, dnnsf, dnnsfHttp, constantsFactory) {
            return {
                callForData: function (settings, fnReady) {
                    var constantsService = constantsFactory.getConstantsService();

                    if (settings.$$_q)
                        settings.$$_q.resolve();
                    settings.$$_q = $q.defer();
                    var url;
                    if (constantsService.isWebApi()) {
                        var cleanSettings = angular.copy(settings);
                        url = dnnsf.getWebApiEndpoint(constantsService.dataSourcesControllerName(), settings.DataSourceMethod || 'GetData', cleanSettings);
                    } else {
                        url = dnnsf.adminApi(settings.DataSourceMethod || 'GetData', settings);
                    }

                    dnnsfHttp.get(
                        g_dnnsfState.moduleId,
                        url,
                        { cache: true },
                        constantsService.requiresSvcframework()
                    ).success(function (data, status) {
                        fnReady && fnReady(data, settings);
                    });
                }
            };
        }])

        // the array is for minification purposes, otherwise dependency injection will not work
        .directive('ctlDatasource', ['$compile', '$timeout', '$parse', '$interpolate', 'dataSources', function ($compile, $timeout, $parse, $interpolate, dataSources) {
            return {
                scope: {
                    pdef: '=ctlDatasource',
                    model: '=updatemodel',
                    parentObject: '=parentObject',
                    params: '='
                },
                // we need this because the isolated scope is no longer avaiable in the html
                // https://github.com/dnnsfAngular15/dnnsfAngular15.js/issues/4845#issuecomment-28339616
                template: function (tElement, tAttrs) {
                    return tElement.html();
                },
                link: function (scope, element, attrs) {
                    // sometimes model is a string
                    if (($.type(scope.model) != "object" || (!scope.model.hasOwnProperty('Value') && !scope.model.hasOwnProperty('IsExpression'))) && scope.pdef.Type != 'CheckboxList')
                        scope.model = { Value: scope.model, IsExpression: false };

                    scope.model = scope.model || {};

                    // sometimes model is a string
                    scope.$watch('model', function () {
                        if ($.type(scope.model) != "object" && scope.pdef.Type != 'CheckboxList')
                            scope.model = { Value: scope.model, IsExpression: false };

                        if (scope.model && !scope.model.Parameters && scope.pdef.Type != 'CheckboxList') {
                            scope.model.Parameters = {};
                            var primaryKeys = ["Name", "Parameters", "Value", "Expression", "IsExpression"];
                            //we do not change the config files for backwards compatibility
                            _.forEach(scope.model, function (value, key) {
                                if (primaryKeys.indexOf(key) == -1) {
                                    scope.model.Parameters[key] = value;
                                    delete scope.model[key];
                                }
                            });
                        }
                    });


                    $timeout(function () {

                        // migrate parametrs to new form
                        // if (scope.model) {
                        //     if (!scope.model.hasOwnProperty('Value')) {
                        //         scope.model.Parameters[i] = { Value: p, IsExpression: false, Expression: '' };
                        //     }
                        // }

                        // handle old format that didn't support data sources
                        if (scope.params && (!scope.params.DataSource || !scope.params.DataSource.Value) && scope.params.Values) {
                            var isSql = new RegExp("select.+from", "gi").test(scope.params.Values);
                            scope.model = {
                                Value: isSql ? 'SQL Query' : 'Items'
                            };
                        }

                        if (scope.model && !scope.model.Parameters && scope.params && scope.params.Values) {
                            scope.model.Parameters = {};
                            var isSql = new RegExp("select.+from", "gi").test(scope.params.Values);
                            if (isSql)
                                scope.model.Parameters.SqlQuery = scope.params.Values || scope.params.Items;
                            else
                                scope.model.Parameters.Items = scope.params.Values || scope.params.Items;
                        }

                        if (scope.pdef.Settings['Items']) {
                            if (!scope.model)
                                scope.model = {};

                            var items = scope.pdef.Settings['Items'];
                            if ($.type(items) === "string")
                                items = $.parseJSON(items);

                            scope.items = [];

                            for (var i in items) {
                                // for array, use text as value, for objects, use key
                                var li;
                                if (scope.pdef.Type === "SelectWithGroups") {
                                    li = { Value: items[i].Value, Text: g_localize(items[i]), Group: items[i].Group || "" };
                                } else {
                                    li = { Value: $.isArray(items) ? g_localize(items[i]) : i, Text: g_localize(items[i]) };
                                }

                                scope.items.push(li);
                                if (scope.model && li.Value == scope.model.Value) {
                                    scope.selectedSource = li;
                                }
                            }

                        } else {
                            // interpolate data in settings
                            // if interplation is used, {{..}} patterns will get replaced with bindings
                            // which means we need to sync with the model as it updates
                            if (scope.pdef.Settings['Interpolate'] == true) {
                                // settings need to be a unique object so it keeps the http promise in order to cancel 
                                // multiple requests when the parentObject changes quickly
                                var settings = {};
                                scope.$watch('parentObject', function () {
                                    settings = $.extend(settings, scope.pdef.Settings)
                                    $.each(settings, function (k) {
                                        if (k.indexOf('$') == 0)
                                            return;
                                        settings[k] = $interpolate((settings[k] || '').toString())(scope);
                                    });
                                    dataSources.callForData(settings, fnCallForData);
                                }, true);
                            } else {
                                dataSources.callForData(scope.pdef.Settings, fnCallForData);
                            }
                        }

                        function fnCallForData(data) {
                            scope.items = data;

                            if (!scope.model) {
                                return;
                            }

                            if (scope.pdef.Settings['DataSource'] === 'Modules' && !isNaN(Number(scope.model.Value))) {
                                // this means that the saved param is referencing ModuleId(number) instead of release 1.17 GUID(string) and should be migrated
                                scope.selectedSource = data.find(function (dataItem) {
                                    return Number(dataItem.ItemId) === scope.model.Value;
                                });

                                if (scope.selectedSource) {
                                    scope.model.Value = scope.selectedSource;
                                }
                                return;
                            }

                            scope.selectedSource = data.find(function (dataItem) {
                                return dataItem.Value == scope.model.Value
                            });
                        }
                    });
                }
            };
        }])

        // the default cookieStore does not support path or expiration
        .provider('$cookieStore', [function () {
            var self = this;
            self.defaultOptions = {};

            self.setDefaultOptions = function (options) {
                self.defaultOptions = options;
            };

            self.$get = function () {
                return {
                    get: function (name) {
                        var jsonCookie = $.cookie(name);
                        if (jsonCookie) {
                            return angular.fromJson(jsonCookie);
                        }
                    },
                    put: function (name, value, options) {
                        options = $.extend({}, self.defaultOptions, options);
                        $.cookie(name, angular.toJson(value), options);
                    },
                    remove: function (name, options) {
                        options = $.extend({}, self.defaultOptions, options);
                        $.removeCookie(name, options);
                    }
                };
            };
        }])


        // checkbox list
        .directive('dnnsfCheckboxlist', ['$compile', '$timeout', '$parse', function ($compile, $timeout, $parse) {
            return {
                restrict: 'A',
                template: '<label data-ng-repeat="item in internalValues" class="{{cssclass}}"><input type="checkbox" data-ng-model="item.$_selected" data-ng-change="updateSelection(item)" /> {{getTitle({item:item})}}</label>',
                scope: {
                    cssclass: '@',
                    ngModel: '=',
                    values: '=',
                    getTitle: '&',
                    serializeItem: '&'
                },
                link: function (scope, element, attrs) {

                    //scope.ngModel = scope.ngModel || [];
                    function loadChecked() {
                        // setup check state
                        $.each(scope.internalValues, function (i, item) {
                            var serializedItem = scope.serializeItem({ item: item });
                            item.$_selected = $.inArray(serializedItem, scope.ngModel) != -1;
                        });
                    }

                    scope.$watch('values', function () {
                        // create a local copy of the values so we can maintain the selection state easily
                        scope.internalValues = $.extend(true, {}, scope.values);
                        loadChecked();
                    });

                    scope.$watch('ngModel', function () {
                        loadChecked();
                    });

                    scope.getTitle = scope.getTitle || function (item) {
                        return item;
                    };

                    scope.serializeItem = scope.serializeItem || function (item) {
                        return item;
                    };

                    scope.updateSelection = function (item) {

                        var serializedItem = scope.serializeItem({ item: item });
                        if (!item.$_selected && $.inArray(serializedItem, scope.ngModel) != -1)
                            scope.ngModel.splice($.inArray(serializedItem, scope.ngModel), 1);
                        else if (item.$_selected)
                            scope.ngModel.push(serializedItem);
                    };
                }
            };
        }])

        .directive('syncArray', ['$timeout', function ($timeout) {
            return {
                restrict: 'A',
                template: '<div data-ng-repeat="item in internalValues" class="{{cssclass}}"><input type="checkbox" data-ng-model="item.$_selected" data-ng-change="updateSelection(item)" data-ng-disabled="isDisabled(item)" /> {{getTitle({item:item})}}</div>',
                scope: {
                    syncArray: '=',
                    syncItem: '=',
                    syncValue: '='
                },
                link: function (scope, element, attrs) {

                    $(element).change(function () {
                        if (!this.checked && $.inArray(scope.syncValue, scope.syncArray) != -1)
                            scope.syncArray.splice($.inArray(scope.syncValue, scope.syncArray), 1);
                        else if (this.checked)
                            scope.syncArray.push(scope.syncValue);
                    });

                    scope.$watch('syncArray', function () {
                        scope.syncItem.$_selected = $.inArray(scope.syncValue, scope.syncArray) != -1;
                    });
                }
            };
        }])

        // The purpose of this directive is to avoid infinite loops with nested templates.
        // This happens because Angular is eager to compile nested directives even if they are not being used (for example, when they're in an IF statement).
        .directive('dnnsfCalldirective', ['$compile', '$timeout', '$parse', '$sce', 'dnnsf', function ($compile, $timeout, $parse, $sce, dnnsf) {
            return {
                restrict: 'A',
                scope: true,
                replace: true,
                template: '',
                link: function (scope, element, attrs) {

                    // pass all marked attributes to nested directive
                    var tplEl = $('<div>');
                    for (var i in element[0].attributes) {
                        var name = element[0].attributes[i].name;
                        if (name && name.indexOf('pass-') != -1)
                            tplEl.attr(name.replace('pass-', ''), element[0].attributes[i].value);
                    }

                    var tpl = $('<div>').append(tplEl).html();
                    $compile(tpl)(scope, function (cloned, scope) {
                        element.append(cloned);
                    });
                }
            }
        }])

        .factory('actionCredentials', ['$http', '$q', 'dnnsf', function ($http, $q, dnnsf) {
            return {
                groupsDictionary: {},
                toggleExpr: function (itemParam) {
                    itemParam.Group && (itemParam.Group = "");
                    itemParam.EntireGroup = false;
                    itemParam.IsExpression = !itemParam.IsExpression;
                },
                initModel: function (p, itemParameters) {
                    p.$_cleanHashKey = dnnsf.uniqueId('');
                    var itemParam = itemParameters[p.Id];
                    var settings = p.Settings;
                    if (itemParam == null || itemParam instanceof String || typeof itemParam == 'string')
                        itemParam = itemParameters[p.Id] = {};

                    // use this to watch for Entry property changes when the drop-down does not behave.
                    // var entryPropDescr = Object.getOwnPropertyDescriptor(itemParam, "Entry");
                    // if (!entryPropDescr || !entryPropDescr.get) {
                    //     var exVal = entryPropDescr ? entryPropDescr.value : undefined;
                    //     Object.defineProperty(itemParam, "Entry", {
                    //         set: function (val) {
                    //             this._e = val;
                    //         },
                    //         get: function () {
                    //             return this._e;
                    //         },
                    //         configurable: true,
                    //         enumerable: true
                    //     });
                    //     itemParam.Entry = exVal;
                    // }

                    if (!itemParam.Type || itemParam.Type != settings['Type'])
                        itemParameters[p.Id].Type = settings['Type'];

                    if (!itemParam.Group)
                        itemParameters[p.Id].Group = '';

                    if (!itemParam.EntireGroup)
                        itemParameters[p.Id].EntireGroup = false;
                },
                getGroups: function (type, itemParam) {

                    if (this.groupsDictionary[type]) {
                        return this.groupsDictionary[type];
                    }

                    this.groupsDictionary[type] = {};
                    var _that = this;

                    $http.get(dnnsf.adminApi('GetCredentialGroups', { TypeName: itemParam.Type }, { apiUrl: dnnsf.commonUrl + '/CommonApi.ashx' }))
                        .then(function (response) {
                            $.each(response.data, function (idx, group) {
                                group.Children = null;
                            });
                            _that.groupsDictionary[type] = response.data;
                            if (!itemParam.Group && !itemParam.IsExpression && response.data[0])
                                itemParam.Group = response.data[0].Value || '';
                        });
                    return this.groupsDictionary[type];
                },
                getEntries: function (type, selectionMode, groupId, itemParam) {

                    if (groupId == '') return [];
                    var group = this.groupsDictionary[type];
                    if (group)
                        group = _.find(group, function (grp) { return grp.Value == groupId; });
                    if (group && group.Children) {
                        if (group.Children.length && !itemParam.Entry) {
                            itemParam.Entry = group.Children[0].Value || '';
                        }
                        return group.Children;
                    }

                    if (!group) return [];

                    group.Children = [];
                    $http.get(dnnsf.adminApi('GetCredentialEntries', { GroupId: groupId }, { apiUrl: dnnsf.commonUrl + '/CommonApi.ashx' }))
                        .then(function (response) {
                            group.Children = response.data;

                            if (!itemParam.Entry && response.data[0]) {
                                if (selectionMode.toLowerCase() != 'multiple') {
                                    itemParam.EntireGroup = false;
                                }
                                if (!itemParam.EntireGroup && !itemParam.IsExpression)
                                    itemParam.Entry = response.data[0].Value || '';
                            }
                        });
                    return group.Children;
                },
                updateEntireGroup: function (pId, selectionMode, itemParameters) {
                    var itemParam = itemParameters[pId];
                    itemParam.EntireGroup = selectionMode.toLowerCase() == 'multiple' && (!itemParam.Entry || itemParam.Entry == '');
                },
                groupOnChange: function (type, itemParams) {
                    var group = this.groupsDictionary[type];
                    if (group)
                        group = _.find(group, function (grp) { return grp.Value == itemParams.Group; });

                    itemParams.Entry = '';
                    itemParams.EntireGroup = true;

                    if (group && group.Children)
                        group.Children = null;
                },
                initIframe: function (p, modalSelector, dismissCallback) {
                    $(modalSelector).on('shown.bs.modal', function () {
                        window.top.postMessage(JSON.stringify({
                            type: dnnsf.urlParam('comm-prefix') + "-scroll",
                            offset: scroll
                        }), "*");
                    })
                    if (!p.$_modalBind) {
                        var _that = this;
                        p.$_modalBind = true;
                        $(modalSelector).on('hidden.bs.modal', function (e) {
                            _that.groupsDictionary[p.Settings.Type] = null;
                            dismissCallback && dismissCallback();
                        });
                    }
                    return dnnsf.commonUrl + '/CredentialManager.aspx?product=' + dnnsf.productCode + "&type=" + p.Settings.Type
                        + "&_aliasid=" + encodeURIComponent(dnnsf.urlParam('_aliasid'))
                        + "&portalid=" + dnnsf.urlParam('portalid')
                        + "&_tabid=" + dnnsf.urlParam('_tabid')
                        + "&_mid=" + dnnsf.urlParam('_mid');
                }
            }
        }])
        // usage: item should be an action/field/button/etc, with the Parameters property populated with at least one key
        // hint: use dnnsf.initParameters to also setup default values for the Parameters
        .directive('dnnsfParams', ['$compile', '$timeout', '$parse', '$sce', 'dnnsf', 'actionCredentials', 'constantsFactory', function ($compile, $timeout, $parse, $sce, dnnsf, actionCredentials, constantsFactory) {
            return {
                restrict: 'A',
                scope: {
                    params: '=dnnsfParams',
                    item: '=dnnsfItem',
                    fields: '=dnnsfFields',
                    fieldFilters: '=dnnsfFieldFilters',
                    itemParameters: '=?',
                    useActionInfo: '=?dnnsfUseActionInfo',
                },
                templateUrl: dnnsf.commonUrl + '/static/dnnsf/tpl/parameter.html?v=' + dnnsf.env.version,
                link: function (scope, element, attrs) {
                    var constantsService = constantsFactory.getConstantsService();

                    $timeout(function () { dnnsfjQuery('[data-toggle="tooltip"]').tooltip(); }, 1000);
                    scope.localize = g_localize;
                    scope.$sce = $sce;
                    scope.dnnsf = dnnsf;
                    scope.actionCredentials = actionCredentials;
                    scope.useSharedActionList = true;

                    // this is for the rich text editor parameter, called on its 'append all fields' button click
                    scope.appendData = function (item, pId) {
                        // append all fields
                        var data = '';
                        $.each(scope.fields, function (i, field) {
                            if (field.Def && field.Def.Settings.HasValue == 'false') //.InputTypeStr == 'button' || field.InputTypeStr == 'image-button' || field.InputTypeStr == 'button-group'
                                //|| field.InputTypeStr == 'progressbar' ||field.InputTypeStr == 'captcha' || field.InputTypeStr == 'upload.single')
                                return;
                            data += field.Title + ': [' + (field.BoundName || field.RefName) + ']<br />';
                        });

                        if (scope.itemParameters)
                            scope.itemParameters[pId] = (scope.itemParameters[pId] || '') + data;
                    };

                    // this is for the rich text editor parameter, called on its 'append one field' dropdown button click
                    scope.appendField = function (field, pId) {
                        var data = field.Title + ': [' + (field.BoundName || field.RefName) + ']<br />';
                        scope.itemParameters[pId] = (scope.itemParameters[pId] || '') + data;
                    };
                    scope.safeParse = function (str) {
                        if (!str) {
                            return true;
                        } else {
                            return scope.$eval(String(str));
                        }
                    }
                    scope.evalShowCondition = function (paramSettings, row) {
                        if (!paramSettings || !paramSettings.ShowCondition)
                            return true;
                        if (row) //for field type grid
                            return eval(String(paramSettings.ShowCondition))
                        return scope.safeParse(paramSettings.ShowCondition);
                    }

                    var nonSharedActionList_ItemTypes = ["action"];
                    function identifyItemType() {
                        if (!scope.item) {
                            return;
                        }

                        scope.itemType = "unknown";
                        if (scope.item.itemType) {
                            scope.itemType = scope.item.itemType;
                        } else if (scope.item.ActionType) {
                            scope.itemType = "action";
                        } else if (scope.item.InputTypeStr) {
                            scope.itemType = "field";
                            if (scope.item.InputTypeStr === "button") {
                                scope.itemType = "button";
                            }
                        } else if (scope.item.hasOwnProperty("Expression") && scope.item.hasOwnProperty("IsExpression")) {
                            scope.itemType = "expressionParameter";
                        }

                        if (scope.itemType === "unknown") {
                            console.warn("dnnsfParams: Could not determine item type for:", scope.item);
                            return;
                        }

                        scope.useSharedActionList = nonSharedActionList_ItemTypes.indexOf(scope.itemType) === -1
                    }
                    identifyItemType();

                    // backwards compatibility
                    scope.$watch('item', function () {
                        if (scope.item) {
                            scope.itemParameters = _.size(scope.item.Parameters) ? scope.item.Parameters : scope.item;
                            identifyItemType();
                        }
                    }, true);

                    // field filtering functions

                    // filter fields by type(s)
                    scope.byType = function (type) {

                        // make sure types is an array
                        var types = dnnsf.eval(type);
                        types = dnnsf.toArray(types);

                        return function (item) {
                            return types.length == 0 || $.inArray(item.InputTypeStr, types) != -1;
                        };
                    };

                    scope.convertDate = function (id) {
                        var dt = scope.itemParameters[id];
                        if (dt.hasOwnProperty('Date')) {
                            //is date and time field - scheduler
                            dt.Date.indexOf('T') != -1 && (scope.itemParameters[id].Date = dt.Date.substr(0, dt.Date.indexOf('T')));
                        }
                        else if (dt.indexOf('T') != -1) {
                            //date field - user Actions
                            scope.itemParameters[id] = dt.substr(0, dt.indexOf('T'));
                        }
                    }
                    scope.notParentButton = function (action) {
                        return function (item) {
                            return item != action.$_field;
                        };
                    };

                    scope.notInArray = function (arr, currentItem) {
                        return function (input) {
                            var i = $.inArray(input.BoundName, arr);
                            if (i != currentItem && i != -1)
                                return false;
                            return true;
                        };
                    };

                    scope.exceptItem = function (item) {
                        return function (input) {
                            return item != input.BoundName;
                        };
                    };
                    scope.iframeSrc = "";
                    scope.initActionCredentialIframe = function (p, modalSelector) {
                        scope.iframeSrc = actionCredentials.initIframe(p, modalSelector, function () {
                            scope.$apply();
                        });
                    };

                    scope.injectGetterSetter = function (pId) {
                        scope.$watch('itemParameters', function (newValue, oldValue) {
                            if (newValue) {
                                var stringToBool = function (input) {
                                    return typeof input === 'boolean' && input || (input ? JSON.parse(input.toLowerCase()) : false);
                                }
                                //                                                               GET                        SET
                                var getterSetter = function (newVal) { return arguments.length ? (newValue[pId] = newVal) : stringToBool(newValue[pId]); }

                                if (!newValue['$_' + pId] || typeof newValue['$_' + pId] !== 'function')
                                    newValue['$_' + pId] = getterSetter;
                            }
                        });
                    };

                    scope.getUrl = function (scriptName) {
                        return constantsService.helperScriptsPath + scriptName + constantsService.helperScriptsExtension;
                    }
                }
            };
        }])


        .directive('dnnsfParamList', ['$compile', '$timeout', '$parse', '$sce', 'dnnsf', function ($compile, $timeout, $parse, $sce, dnnsf) {
            return {
                restrict: 'A',
                scope: {
                    params: '=',
                    item: '=',
                    fields: '=',
                    values: '='
                },
                templateUrl: dnnsf.commonUrl + '/static/dnnsf/tpl/parameter-list.html?v=' + dnnsf.env.version,
                link: function (scope, element, attrs) {
                    scope.localize = g_localize;
                    scope.$sce = $sce;

                    function setDefaults() {
                        if (!scope.params || !scope.values)
                            return;
                        $.each(scope.params, function (i, param) {
                            if (!scope.values[param.Id])
                                scope.values[param.Id] = { Name: param.Id, Value: g_localizeMaybeJson(param.DefaultValue) };
                        });
                    }

                    // make sure all paramters are initialized
                    scope.$watch('params', function () {
                        setDefaults();
                    });

                    var noBubble;
                    scope.$watch('values', function () {
                        setDefaults();
                    });


                }
            };
        }])

        .directive('dnnsfRenderParam', ['$compile', '$timeout', '$parse', '$sce', 'dnnsf', '$rootScope', function ($compile, $timeout, $parse, $sce, dnnsf, $rootScope) {
            return {
                restrict: 'A',
                //require: 'ngModel',
                scope: {
                    def: '=',
                    item: '=',
                    container: '=',
                    model: '=',
                    fields: '=',
                    skipShowConditionEval: '=?',
                },
                templateUrl: dnnsf.commonUrl + '/static/dnnsf/tpl/parameter2.html?v=' + dnnsf.env.version,
                link: function (scope, element, attrs) {
                    scope.localize = g_localize;
                    scope.$sce = $sce;

                    scope.safeParse = function (str) {
                        if (!str) {
                            return true;
                        } else {
                            return scope.$eval(String(str));
                        }
                    };

                    scope.evalShowCondition = function (paramSettings, row) {
                        if (!paramSettings || !paramSettings.ShowCondition || scope.skipShowConditionEval) {
                            return true;
                        }

                        // TODO: eval(String(paramSettings.ShowCondition)) to be implemented for the grid field type,
                        // after the grid will be properly implemented
                        return scope.safeParse(paramSettings.ShowCondition);
                    };
                },
            };
        }])

        .directive('dnnsfInitparam', ['$compile', '$timeout', '$parse', '$sce', 'dnnsf', function ($compile, $timeout, $parse, $sce, dnnsf) {
            return {
                restrict: 'A',
                //require: 'ngModel',
                scope: {
                    parametersContainer: '=',
                    parameterDef: '='
                },
                link: function (scope, element, attrs) {
                    scope.localize = g_localize;

                    var paramValue = scope.parametersContainer[scope.parameterDef.Id];
                    switch (scope.parameterDef.Type) {
                        case 'ActionList':
                            paramValue = paramValue || [];
                            break;

                        default:
                            paramValue = paramValue || { Value: scope.localize(scope.parameterDef.DefaultValue) || '', IsExpression: false }
                            break;
                    }

                    scope.parametersContainer[scope.parameterDef.Id] = paramValue;
                }
            };
        }])

        .directive('dnnsfModal', ['dnnsf', function (dnnsf) {
            return {
                restrict: 'A',
                scope: {
                    settings: '=dnnsfModalSettings',
                    item: '=dnnsfItem'
                },
                templateUrl: dnnsf.commonUrl + '/static/dnnsf/tpl/modal.html?v=' + dnnsf.env.version,
                link: function (scope, element, attrs) {
                    if (scope.item)
                        scope.item.itemType = "modal";
                    var el = $(element.find('.modal'));
                    scope.$on('displayModal', function (e, visible) {
                        el.modal(visible ? 'show' : 'hide');
                    })
                    if (scope.settings.onCloseEvent)
                        el.on('hidden.bs.modal', function () {
                            scope.$emit('modalClosed');
                        })
                    el.on('shown.bs.modal', function (e) {
                        if ($(el).closest('div[data-dnnsf-modal]').attr('data-dnnsf-item', 'clonedJobs').length || $(el).closest('div[data-dnnsf-modal]').attr('data-dnnsf-item', 'clonedMethod').length) {
                            $(el).find('.modal-dialog').css({ 'top': '50%', 'right': '50%', 'transform': 'translate(50%, -50%)', 'position': 'absolute' });
                        }
                        else if (window.self !== window.top && !$(document).scrollTop() && !($(el).closest('div[data-dnnsf-modal]').attr('data-dnnsf-item', 'clonedJobs').length) && !($(el).closest('div[data-dnnsf-modal]').attr('data-dnnsf-item', 'clonedMethod').length)) {
                            el.css({ 'top': window.top.pageYOffset - 200 });
                            $('body.modal-open').find('.modal-backdrop')
                                .css({ 'height': '100%' })
                                .on('click', function () { el.modal('hide') });
                        }
                    });
                }
            };
        }])

        .filter('searchActions', function () {
            return function (actionList, actionSearchTerms) {
                if (actionSearchTerms) {
                    var lowerTerms = actionSearchTerms.toLowerCase();
                    return _.filter(actionList, function (action) {
                        return action.Title['default'].toLowerCase().indexOf(lowerTerms) !== -1;
                    });
                }
                return actionList || [];
            }
        })

        .filter('hideIfSearch', function () {
            return function (actionList, actionSearchTerms) {
                return actionSearchTerms ? [] : actionList;
            }
        })

        .filter('showIfSearch', function () {
            return function (actionList, actionSearchTerms) {
                return actionSearchTerms ? actionList : [];
            }
        })

        .directive('dnnsfActions', ['$compile', '$timeout', '$parse', '$sce', 'dnnsf', 'sharedData', 'commonHooks', function ($compile, $timeout, $parse, $sce, dnnsf, sharedData, commonHooks) {
            return {
                restrict: 'A',
                scope: {
                    actions: '=dnnsfActions',
                    fields: '=dnnsfFields',
                    resultActionDefs: '=dnnsfResultDefs',
                    actionDefs: '=?dnnsfDefs',
                    actionDefGroups: '=?dnnsfDefgroups',
                    eventName: '=?eventName',
                    field: '=?dnnsfField',

                    actionList: '=?dnnsfActionlist',
                    hideErrorMessage: '=?dnnsfHideErrorMessage',
                    isDisabled: '=?',
                    clientButton: '=?dnnsfClientButton',
                    useActionInfo: '=?dnnsfUseActionInfo',
                    item: '=?dnnsfItem',
                },
                templateUrl: dnnsf.commonUrl + '/static/dnnsf/tpl/action-list.html?v=' + dnnsf.env.version,
                link: function (scope, element, attrs) {
                    if (dnnsf.buildDate) {
                        scope.importExportActions = new Date(dnnsf.buildDate).getTime() >= 1509091848000;
                    }
                    scope.sharedData = sharedData;
                    scope.clientButton == undefined && (scope.clientButton = false);
                    scope.localize = g_localize;
                    scope.$sce = $sce;
                    scope.toggleAction = function (action) {
                        if (!action.$_uid)
                            action.$_uid = dnnsf.uniqueId('action');
                        action.$_isLoaded = true;
                    }
                    dnnsf.log(scope.actions);
                    _.each(scope.actions, function (action) {
                        var realAction = action.ActionInfo || action;
                        action.Definition = action.Definition || scope.actionDefs[realAction.ActionType];
                        dnnsf.initParameters(action.Definition, realAction);
                    });
                    scope.updateActions = function (e, ui, model) {
                        if (scope.isActionListOverride || !scope.field)
                            return;
                        $timeout(function () {
                            scope.actionsByEvent[scope.eventName] = scope.actions;
                            scope.field.Actions = [];
                            for (var key in scope.actionsByEvent) {
                                scope.field.Actions = scope.field.Actions.concat(scope.actionsByEvent[key]);
                            }
                        }, 0)
                    }
                    // generate unique ids for each action
                    scope.$watch('actions', function () {
                        if (!scope.actions)
                            return;
                        $.each(scope.actions, function (i, action) {
                            if (action.EventName == "BulkAction" && scope.item)
                                scope.item.hasBulkEdit = _.findIndex(scope.actions, function (action) {
                                    return (action.ActionInfo.ActionType == "DataSource.InlineAdd" || action.ActionInfo.ActionType == "DataSource.InlineEdit") && !action.IsDeleted
                                }) != -1;
                            action.$_uid = dnnsf.uniqueId('action');
                        });
                        if (sharedData.flushNotSupported) {
                            scope.checkForFlushableActions();
                        }
                    }, true);

                    var clientActionDefGroups = null;
                    function selectActionDefs() {
                        if (!!scope.clientButton) {
                            // Client buttons and actions
                            clientActionDefGroups = clientActionDefGroups || dnnsf.configUtils.groupDefinitions(scope.actionDefs, function (actionDef) {
                                return actionDef.IsClientAction;
                            });
                            scope._actionDefGroups = clientActionDefGroups;
                        } else {
                            scope._actionDefGroups = dnnsf.configUtils.groupDefinitions(scope.actionDefs, function (actionDef) {
                                return !actionDef.IsClientAction;
                            });
                        }
                    }
                    selectActionDefs();

                    scope.$watch('clientButton', function (newValue, oldValue) {
                        if (newValue != oldValue) {
                            $.each(scope.actions, function (i, action) {
                                action.IsDeleted = !(scope.actionDefs[action.ActionInfo.ActionType || action.ActionType].IsClientAction == newValue)
                            });
                        }
                        selectActionDefs();
                    });

                    scope.preventDropdownEvents = function (event) {
                        event.stopPropagation();
                        event.preventDefault();
                    }

                    $(window).click(function () {
                        $('ul.dropdown-menu').removeClass('hover');
                        $('.action-selected').removeClass('action-selected');
                    });

                    scope.actionsDropdownOpened = function (event) {

                        scope.actionsDdIsOpen = !scope.actionsDdIsOpen;
                        $(document).on('click.handleDropdown', (function (e) {
                            if (e.target !== event.target) {
                                this.actionSearchTerms = '';
                                scope.actionsDdIsOpen = false;
                                $(document).off('click.handleDropdown');
                            }
                        }).bind(this));

                        setTimeout(function () {

                            var actionListDropdown = $(event.currentTarget).siblings('ul.dropdown-menu');
                            actionListDropdown.find('input.action-search').focus();

                            $(document).off('keyup.actionList');

                            $(document).on('keyup.actionList', function (e) {
                                var listItems = $('.action-category').not(':hidden');
                                var subListItems = $('.action-category-item').not(':hidden');
                                var searchItems = $('.action-search-item').not(':hidden');

                                var actionSelected = $('.action-selected', actionListDropdown);

                                switch (e.which) {
                                    case 38: { // UP ARROW
                                        if (!actionSelected.length) {
                                            searchItems.last().addClass('action-selected'); // when you have something in search input
                                            if (subListItems.length) {
                                                subListItems.last().addClass('action-selected');
                                                return;
                                            }
                                            listItems.last().addClass('action-selected'); // when you don't have something in search input
                                            listItems.last().next('ul').addClass('hover');
                                        } else {
                                            var prevSelection = actionSelected;
                                            prevSelection.removeClass('action-selected');
                                            prevSelection.next('ul').removeClass('hover');
                                            var nextSelection;

                                            if (searchItems.length) {
                                                $.each(searchItems, function (index, searchItem) {
                                                    if (searchItem === prevSelection[0]) {
                                                        nextSelection = searchItems[index - 1];
                                                        return;
                                                    };
                                                });
                                            } else {
                                                $.each(subListItems, function (index, subListItem) {
                                                    if (subListItem === prevSelection[0]) {
                                                        nextSelection = subListItems[index - 1];
                                                        return;
                                                    };
                                                });
                                            }

                                            $.each(listItems, function (index, searchItem) {
                                                if (searchItem === prevSelection[0]) {
                                                    nextSelection = listItems[index - 1];
                                                    return;
                                                };
                                            });

                                            $(nextSelection).addClass('action-selected');
                                            $(nextSelection).next('ul').addClass('hover');
                                        }
                                        break;
                                    }
                                    case 40: { // DOWN ARROW
                                        if (!actionSelected.length) {
                                            searchItems.first().addClass('action-selected'); // when you have something in search input
                                            if (subListItems.length) {
                                                subListItems.first().addClass('action-selected');
                                                return;
                                            }
                                            listItems.first().addClass('action-selected'); // when you don't have something in search input
                                            listItems.first().next('ul').addClass('hover');
                                        } else {
                                            var prevSelection = actionSelected;
                                            prevSelection.removeClass('action-selected');
                                            prevSelection.next('ul').removeClass('hover');
                                            var nextSelection;

                                            if (searchItems.length) {
                                                $.each(searchItems, function (index, searchItem) {
                                                    if (searchItem === prevSelection[0]) {
                                                        nextSelection = searchItems[index + 1];
                                                        return;
                                                    };
                                                });
                                            } else {
                                                $.each(subListItems, function (index, subListItem) {
                                                    if (subListItem === prevSelection[0]) {
                                                        nextSelection = subListItems[index + 1];
                                                        return;
                                                    };
                                                });
                                            }

                                            $.each(listItems, function (index, searchItem) {
                                                if (searchItem === prevSelection[0]) {
                                                    nextSelection = listItems[index + 1];
                                                    return;
                                                };
                                            });

                                            $(nextSelection).addClass('action-selected');
                                            $(nextSelection).next('ul').addClass('hover');
                                        }

                                        break;
                                    }

                                    case 37: { //LEFT ARROW
                                        if (actionSelected.hasClass('action-selected')) {
                                            var parentCategory = actionSelected.closest('ul').parents().eq(1);
                                            actionListDropdown = parentCategory;
                                            actionSelected.removeClass('action-selected');
                                            actionSelected.closest('ul').siblings('a').addClass('action-selected');
                                        }
                                        break;
                                    }

                                    case 39: { //RIGHT ARROW
                                        if (actionSelected.next('ul').hasClass('hover')) {
                                            var parentAction = actionSelected.siblings('ul.dropdown-menu');
                                            actionListDropdown = parentAction;
                                            parentAction.closest('li').children().first().removeClass('action-selected');
                                            parentAction.children().first().find('a').addClass('action-selected');
                                        }
                                        break;
                                    }
                                    case 13: { // ENTER KEY
                                        actionSelected.click();
                                        actionSelected.removeClass("action-selected");
                                        actionSelected.parents().eq(1).removeClass("hover");
                                        setTimeout(function () {
                                            $('#btnAddField').parent().removeClass('open');
                                        }, 0);
                                        break;
                                    }
                                    case 27: { // ESC KEY
                                        actionSelected.removeClass("action-selected");
                                        actionSelected.parents().eq(1).removeClass("hover");
                                        actionSelected.parents().find('div.btn-group.open').click();
                                        break;
                                    }
                                }
                            });
                        }, 0);
                    }

                    scope.addAction = function (actionType, action) {
                        if (!action) {
                            action =
                                scope.useActionInfo ?
                                    {
                                        Id: -1,
                                        $_uid: dnnsf.uniqueId('action'),
                                        ActionInfo: {
                                            Parameters: {},
                                            ActionType: actionType.Id
                                        },
                                        EventName: scope.eventName,
                                        $_isOpen: true,
                                        $_isLoaded: true,
                                        $_isFocus: true,
                                        Definition: { IsClientAction: actionType.IsClientAction }
                                    } :
                                    {
                                        Id: -1,
                                        $_uid: dnnsf.uniqueId('action'),
                                        EventName: scope.eventName,
                                        Parameters: {},
                                        ActionType: actionType.Id,
                                        $_isOpen: true,
                                        $_isLoaded: true,
                                        $_isFocus: true,
                                        Definition: { IsClientAction: actionType.IsClientAction, Settings: actionType.Settings }
                                    }
                                ;


                            dnnsf.initParameters(actionType, action.ActionInfo || action);
                        }
                        else {
                            if (scope.useActionInfo && !action.ActionInfo) {
                                action.ActionInfo = {
                                    Description: action.Description,
                                    Condition: action.Condition,
                                    ActionErrorMessage: action.ActionErrorMessage,
                                    Parameters: action.Parameters,
                                    ActionType: action.ActionType
                                }
                            } else {
                                action.ActionInfo && $.extend(action, action.ActionInfo)
                            }
                            action.EventName = scope.eventName;
                        }
                        if (!scope.useActionInfo) {
                            delete action.ActionInfo;
                        }

                        if (!scope.actions)
                            scope.actions = [];

                        scope.actions.push(action);
                        scope.updateActions();

                        $timeout(function () {
                            var actionDescriptionElement = $('#collapse' + action.$_uid + ' .description-input');
                            if (window.top === window) {
                                dnnsf.scrollTo($('#collapse' + action.$_uid).offset().top - 120 + 'px');
                            }
                            actionDescriptionElement.focus();
                        }, 100);
                    };
                    scope.checkForFlushableActions = function () {
                        var hasFlushableActions = _.some(scope.actions, function (action, i) {
                            var actionType = scope.useActionInfo ? action.ActionInfo.ActionType : action.ActionType;

                            if (_.has(scope.actionDefs[actionType], 'Settings.IsFlushableAction'))
                                return !action.IsDeleted && scope.$eval(scope.actionDefs[actionType].Settings.IsFlushableAction) == true;
                        });
                        return hasFlushableActions;
                    };

                    function displayModal(visible) {
                        setTimeout(function () {
                            scope.$broadcast('displayModal', visible);
                        }, 500)
                    }
                    scope.$on('modalClosed', function () {
                        scope.showModal = false;
                    })

                    scope.exportAction = function (action) {
                        scope.clonedAction = {
                            Parameters: { 'Action': '' }
                        };

                        scope.showModal = true;
                        var newAction = scope.cloneAction(action.ActionInfo || action, true);
                        scope.clonedAction = {
                            Parameters: { 'Action': JSON.stringify(newAction, null, 4) }
                        };
                        scope.modalSettings = {
                            'onCloseEvent': true,
                            'buttons': [
                                {
                                    'text': 'Copy',
                                    'cssClass': 'btn btn-info',
                                    'onClick': function ($event, a) {
                                        $($event.currentTarget).closest('.modal').find('textarea').select();
                                        document.execCommand("copy");
                                        $($event.currentTarget).text('Copied');
                                        setTimeout(function () {
                                            $($event.currentTarget).text('Copy');
                                        }, 800)
                                    }
                                }
                            ],
                            'modalTitle': 'Export Action',
                            rootCssClass: "textarea-modal",
                            'params': [{
                                "Id": "Action",
                                "Title": {
                                    "default": "Action JSON"
                                },
                                "HelpText": {
                                    "default": ""
                                },
                                "Type": "Textarea"
                            }]

                        };
                        displayModal(true);
                    }
                    var isValidAction = function (str) {
                        var defaultError = { "errors": { "actionError": "Please enter a valid action" }, "action": false };
                        var action, parentType;
                        var errors = {};
                        try {
                            action = JSON.parse(str);
                            parentType = action.ActionType || action.ActionInfo.ActionType;
                        } catch (e) {
                            return defaultError;
                        }
                        if ($.isEmptyObject(action) || action == [] || !action)
                            return defaultError;
                        if (!scope.actionDefs[parentType]) {
                            var msg = { "errors": {}, "action": false }
                            msg.errors[parentType] = "";
                            return msg;
                        }
                        checkActionLists(action);
                        function checkActionLists(act) {
                            var valid = true;
                            var params = act.Parameters || act.ActionInfo.Parameters;
                            var type = act.ActionType || act.ActionInfo.ActionType;
                            var actionLists = _.reduce(scope.actionDefs[type].Parameters,
                                function (list, parameter, index) {
                                    if (parameter.Type == "ActionList") {
                                        list.push(parameter.Id);
                                    }
                                    return list;
                                }, []);
                            actionLists.every(function (v) {
                                var toRemove = [];
                                $.each(params[v], function (j, k) {
                                    var childType = k.ActionType || k.ActionInfo.ActionType;
                                    if (!scope.actionDefs[childType]) {
                                        toRemove.push(j);
                                        if (!errors[type])
                                            errors[type] = '';
                                        errors[type] += (errors[type] ? '\n' : ' => ') + v + ' => ' + childType;
                                        valid = false;
                                    }
                                    else checkActionLists(k);
                                });
                                if (toRemove.length) {
                                    params[v] = params[v].filter(function (value, index) {
                                        return toRemove.indexOf(index) == -1;
                                    })
                                }
                            })
                        }
                        return {
                            'action': action,
                            'errors': errors
                        };
                    }
                    scope.importAction = function () {
                        scope.showModal = true;
                        scope.clonedAction = {
                            Parameters: { 'Action': "" }
                        };
                        scope.modalSettings = {
                            'onCloseEvent': true,
                            'buttons': [
                                {
                                    'text': 'Import',
                                    'cssClass': 'btn btn-info',
                                    'onClick': function ($event, item) {
                                        var checkedAction = isValidAction(item.Parameters.Action);
                                        if (checkedAction.errors && !$.isEmptyObject(checkedAction.errors)) {
                                            var msg;
                                            if (checkedAction.errors.actionError)
                                                return alert(checkedAction.errors.actionError);
                                            else {
                                                msg = 'The following actions are not compatible with this module and they will not be imported. Do you want to continue?\n';
                                                $.each(checkedAction.errors, function (i, v) {
                                                    msg += i + v + '\n';
                                                })
                                            }
                                            if (confirm(msg) == true && checkedAction.action) {
                                                scope.addAction(null, checkedAction.action);
                                            } else {
                                                displayModal(false);
                                            }
                                        } else {
                                            $.extend(checkedAction.action, {
                                                $_uid: dnnsf.uniqueId('action'),
                                                $_isOpen: true,
                                                $_isLoaded: true,
                                                $_isFocus: true
                                            });
                                            scope.addAction(null, checkedAction.action);
                                        }
                                        displayModal(false);
                                    }
                                }
                            ],
                            'modalTitle': 'Import Action',
                            rootCssClass: "textarea-modal",
                            'params': [{
                                "Id": "Action",
                                "Title": {
                                    "default": "Action JSON"
                                },
                                "HelpText": {
                                    "default": ""
                                },
                                "Type": "Code",
                                "Settings": { "CodeMirrorMode": "json" }
                            }]
                        };

                        displayModal(true);

                    }
                    scope.checkFinal = function (action) {
                        if (!scope.actionDefs[action.ActionType || action.ActionInfo.ActionType])
                            return false;
                        var actionsByEvent = action.EventName ? _.filter(scope.actions, ['EventName', action.EventName]) : scope.actions;
                        return scope.actionDefs[action.ActionType || action.ActionInfo.ActionType].Final && !action.Condition && $.inArray(action, actionsByEvent) != actionsByEvent.length - 1;
                    };

                    scope.cloneAction = function (action, exportAction) {
                        var newAction = $.extend({}, angular.copy(action), { Id: -1, });
                        if (commonHooks && Array.isArray(commonHooks.onCloneAction)) {
                            commonHooks.onCloneAction.forEach((cloneHook) => {
                                cloneHook.call(this, newAction);
                            });
                        }

                        newAction.ActionInfo && (newAction.ActionInfo.Id = -1);
                        var actionType = action.ActionType || action.ActionInfo.ActionType;

                        newAction.Title = g_localize(scope.actionDefs[actionType].Title);
                        dnnsf.initParameters(scope.actionDefs[actionType], newAction.ActionInfo || newAction);
                        if (exportAction) {
                            return {
                                "Title": newAction.Title,
                                "ActionType": actionType,
                                "Description": newAction.Description,
                                "Condition": newAction.Condition,
                                "Parameters": newAction.Parameters
                            }
                        }
                        else {
                            $.extend(newAction, {
                                $_uid: dnnsf.uniqueId('action'),
                                $_isOpen: true,
                                $_isLoaded: true,
                                $_isFocus: true
                            });

                            scope.actions.push(newAction);
                        }
                        scope.updateActions();
                    };

                },
                controller: ["$scope", "$http", "sharedData", "$timeout", "dnnsf", function ($scope, $http, sharedData, $timeout, dnnsf) {
                    if (!$scope.actionDefs) {
                        $scope.actionDefs = window.g_actionDefs || dnnsf.actionDefs;
                    }
                    if (!$scope.actionDefGroups) {
                        $scope.actionDefGroups = dnnsf.configUtils.groupDefinitions($scope.actionDefs);
                    }

                    $scope.sharedData = sharedData;
                    $scope.dnnsf = dnnsf;
                    $scope.onSave = [];
                    $scope.isActionListOverride = Array.isArray($scope.actionList);

                    $scope.prepareActions = function () {
                        if (!$scope.actions)
                            return;

                        dnnsf.log('preparing actions', $scope.actions);

                        // reset modified states
                        $scope.actions.watchAllActions && $scope.actions.watchAllActions(); // this clears previous watch
                        //$scope.sharedData.lockChange = true;
                        $.each($scope.actions, function (iAction, action) {

                            action.$_isOpen = false;
                            action.$_uid = dnnsf.uniqueId('action', action.Id);

                            var actionTypeDefinition = $scope.actionDefs[action.ActionType];
                            if (actionTypeDefinition === undefined)
                                return;

                            var _action = action.ActionInfo || action;
                            dnnsf.initParameters(actionTypeDefinition, _action, true);

                            // Make sure the EventName is set on the action.
                            // This is a fix for miss-configured ActionList parameters that were fixed in https://github.com/dnnsharp/projects/pull/7027
                            // This will only update 1 level of ActionLists and it will not guarantee that all existing actions will be updated at once.
                            // It shouldn't be a problem, we can still rely on the definition of the item (field, action, parameter, etc.) to find out the eventName. (front-end and back-end)
                            if ($scope.eventName && _action.EventName !== $scope.eventName) {
                                _action.EventName = $scope.eventName;
                            }

                        });

                        // setup a watch to show the save button
                        $scope.actions.watchAllActions = $scope.$watch('actions', function (newValue, oldValue) {

                            dnnsf.log('check actions changed for ' + $scope.eventName);
                            if (angular.equals(newValue, oldValue))
                                return;
                            // only call save if not already handled by a button
                            if (!$scope.field && $.inArray($scope.save, $scope.onSave) == -1) {
                                dnnsf.log("onSave handler registered for saving actions of " + $scope.eventName);
                                $scope.onSave.push($scope.save);
                            }
                            dnnsf.log('actions changed for ' + $scope.eventName);
                            // yes, this cope inherits from ActionForm, but there's an assignment happening 
                            //      - this means for objects we get references but for primitive types we get copies
                            // http://stackoverflow.com/questions/14049480/what-are-the-nuances-of-scope-prototypal-prototypical-inheritance-in-angularjs
                            //++$scope.notifyModified(true);
                        }, true); // this last true does a "deep" watch, otherwise angularJs would compare by reference, which never changes in this case here (arrays)
                    };

                    $scope.init = function (eventName, title, field, actionList) {

                        $scope.eventName = eventName;
                        $scope.field = field;
                        $scope.eventFriendlyTitle = title;

                        if (field) {
                            if (field.Actions && actionList) {
                                var isMitigated = mitigateInvalidActionList_Actions(field);

                                if (!isMitigated) {
                                    // if both of these have values we can't be sure what to choose.
                                    console.error("Possible invalid state in dnnsfActions. Both field.Actions and actionList have values.", {
                                        field: field,
                                        actionList: actionList
                                    });
                                }
                            }

                            if (!field.Actions) {
                                dnnsf.log('Loading ' + eventName + ' actions from action list ', actionList);
                                $scope.actions = actionList;
                                $scope.prepareActions();
                            } else {
                                $scope.actions = [];
                                dnnsf.log('Loading ' + eventName + ' actions for field ', field);

                                $scope.actionsByEvent = _.reduce(field.Actions, function (acc, action, index) {
                                    var evtActions = acc[action.EventName] || (acc[action.EventName] = []);
                                    evtActions.push(action);

                                    return acc;
                                }, {});

                                if ($scope.actionsByEvent[eventName]) {
                                    $scope.actions = $scope.actionsByEvent[eventName] || [];
                                }
                                $scope.prepareActions();
                            }
                        } else {
                            dnnsf.log('Loading actions for event ' + eventName);
                            loadActions(eventName);
                        }
                    };
                    $scope.init($scope.eventName, null, $scope.field, $scope.actionList);

                    $scope.deleteAction = function (action) {
                        action.IsDeleted = true;
                    };

                    function loadActions(eventName) {
                        $scope.sharedData.loadCount++;
                        $scope.prepareActions();
                        $scope.sharedData.loadCount--;
                        if (!$scope.sharedData.eventActions) // SharpScheduler admin.js did not have this until v5.6
                            return;

                        if (Array.isArray($scope.actions)) // do not add null/undefined/non-arrays. There is a $.grep in AF admin.js (getFixedButtons())
                            $scope.sharedData.eventActions[eventName] = $scope.actions;
                    }

                    $scope.checkFinal = function (action) {
                        if (!$scope.actionDefs[action.ActionType])
                            return false;
                        return $scope.actionDefs[action.ActionType].Final && !action.Condition && $.inArray(action, $scope.actions) != $scope.actions.length - 1;
                    };

                    $scope.save = function () {

                        if ($scope.field)
                            return; // save already handled
                        $http({
                            method: 'POST',
                            url: dnnsf.adminApi('SaveEventActions', { eventName: $scope.eventName }),
                            data: angular.toJson($scope.actions)
                        }).success(function (data, status) {
                            // update our local copy, since the server may have done some alteration

                            $scope.actions = data;

                            // setup a watch to show the save button
                            $scope.prepareActions();
                        });

                        // delete entries right away
                        $scope.actions = $.grep($scope.actions, function (e) { return !e.IsDeleted });

                    };

                    function mitigateInvalidActionList_Actions(field) {

                        // try to fix some known scenarios
                        var isAction = field && field.ActionType != undefined;

                        if (isAction && field.Id === -1) {
                            // these are actions that are saved as JSON inside ActionList parameters.
                            // The Actions property was added by the previous version of `scope.updateActions()`.
                            delete field.Actions;
                            return true;
                        }

                        return false;
                    }
                }]
            };

        }])


        .directive('dnnsfValidators', ['$compile', '$timeout', '$parse', '$sce', 'dnnsf', function ($compile, $timeout, $parse, $sce, dnnsf) {
            return {
                restrict: 'A',
                scope: {
                    validators: '=dnnsfValidators',
                    vldDefs: '=dnnsfDefs'
                },
                templateUrl: dnnsf.commonUrl + '/static/dnnsf/tpl/validators.html?v=' + dnnsf.env.version,
                link: function (scope, element, attrs) {

                    scope.localize = g_localize;
                    scope.$sce = $sce;
                    scope.commonUrl = dnnsf.commonUrl;

                    scope.addValidator = function (vldType) {
                        var validator = {
                            Id: -1,
                            $_uid: 'vld' + new Date().getTime(),
                            Parameters: {},
                            Type: vldType.Id,
                            $_isOpen: true,
                            $_isLoaded: true,
                            $_isFocus: true
                        };

                        // copy defaults
                        $.each($.grep(vldType.Parameters, function (e) { return e.DefaultValue; }), function (intIndex, objValue) {
                            var val = g_localizeMaybeJson(objValue.DefaultValue);
                            validator.Parameters[objValue.Id] = val;
                        });

                        dnnsf.initParameters(vldType, validator);
                        scope.validators.push(validator);
                    };

                }
            };
        }])

        .directive('dnnsfRequired', ['$compile', '$timeout', '$parse', '$sce', 'dnnsf', function ($compile, $timeout, $parse, $sce, dnnsf) {
            return {
                restrict: 'A',
                scope: {
                    required: '=dnnsfRequired'
                },
                //templateUrl: 'static/dnnsf/tpl/validators.html?v=' + dnnsf.env.version,
                require: 'ngModel',
                replace: false,
                link: function (scope, element, attrs, ngModelCtrl) {

                    scope.localize = g_localize;
                    scope.$sce = $sce;

                    scope.$watch('required', function () {
                        //element.css('border-left', '3px solid #d9534f');
                    });

                    scope.addValidator = function (vldType) {
                        var validator = {
                            Id: -1,
                            $_uid: 'vld' + new Date().getTime(),
                            Parameters: {},
                            Type: vldType.Id,
                            $_isOpen: true,
                            $_isLoaded: true,
                            $_isFocus: true
                        };

                        // copy defaults
                        $.each($.grep(vldType.Parameters, function (e) { return e.DefaultValue; }), function (intIndex, objValue) {
                            var val = g_localizeMaybeJson(objValue.DefaultValue);
                            validator.Parameters[objValue.Id] = val;
                        });

                        scope.validators.push(validator);
                    };

                }
            };
        }])

        // fancy file picker
        .directive('dnnsfFilepicker', ['$compile', '$timeout', '$parse', '$sce', 'dnnsf', 'dataSources', function ($compile, $timeout, $parse, $sce, dnnsf, dataSources) {
            return {
                restrict: 'A',
                scope: {
                    ngModel: '='
                },
                templateUrl: dnnsf.commonUrl + '/static/dnnsf/tpl/filepicker.html?v=' + dnnsf.env.version,
                link: function (scope, element, attrs) {
                    scope.dnnsf = dnnsf;
                    scope.$sce = $sce;
                    scope.singleSelect = attrs.dnnsfPickermode == 'Single';

                    // load seleceted files
                    scope.selectedFiles = scope.ngModel ? angular.copy(scope.ngModel) : [];

                    scope.openFolder = function (folder) {

                        scope.currentFolder = folder;

                        // build breadcrumbs
                        scope.breadcrumbs = [folder];
                        var parent = folder.$_parent;
                        while (parent) {
                            scope.breadcrumbs.splice(0, 0, parent);
                            parent = parent.$_parent;
                        }

                        // get data from the server
                        scope.loading = true;
                        dataSources.callForData({
                            dataSource: 'FilesInFolder',
                            folderId: folder.Value
                        }, function (data) {
                            scope.files = data;

                            // mark selected files
                            var filesInFolder = $.grep(scope.selectedFiles, function (o, i) { return o.Filter == folder.Value; });
                            if (filesInFolder) {
                                var matches = 0
                                for (var i = 0; i < scope.files.length; i++) {
                                    for (var j = 0; j < filesInFolder.length; j++) {
                                        if (scope.files[i].Value == filesInFolder[j].Value) {
                                            scope.files[i].Selected = true;
                                            filesInFolder[j] = scope.files[i];
                                            matches++;
                                            break;
                                        }
                                    }

                                    // stop if we already matched all selected files in this fodler
                                    if (matches == filesInFolder.length)
                                        break;
                                }

                                //$.each(scope.files, function (i, o) {
                                //    if ($.inArray(o, scope.selectedFiles) != -1)
                                //        o.Selected = true;
                                //});
                            }
                            scope.loading = false;
                        });
                    }

                    scope.updateCount = function (folder, toAdd) {
                        folder.selectedCount = (folder.selectedCount || 0) + toAdd;
                        while (folder) {
                            folder.fullTreeSelectedCount = (folder.fullTreeSelectedCount || 0) + toAdd;
                            folder = folder.$_parent;
                        }
                    };
                    scope.deleteFile = function (index) {
                        scope.ngModel.splice(index, 1);
                        scope.selectedFiles = scope.ngModel;
                    };

                    scope.toggleSelectFile = function (file, bSelect) {

                        file.Selected = bSelect;

                        if (scope.singleSelect) {
                            if (scope.selectedFiles && scope.selectedFiles.length) {
                                scope.selectedFiles[0].Selected = false;

                                // reset counts for all folders
                                function resetCounts(folder) {
                                    folder.selectedCount = folder.fullTreeSelectedCount = 0;
                                    $.each(folder.Children, function (i, folder) {
                                        resetCounts(folder);
                                    });
                                }
                                resetCounts(scope.folder);
                            }
                            scope.selectedFiles = [];
                            if (bSelect)
                                scope.selectedFiles.push(file);
                        } else {

                            // find it in the list - if found and currently unchecked, remove it
                            var found = false;
                            for (var i = 0; i < scope.selectedFiles.length; i++) {
                                if (scope.selectedFiles[i].Value == file.Value) {
                                    if (!bSelect)
                                        scope.selectedFiles.splice(i, 1);
                                    found = true;
                                    break;
                                }
                            }

                            // if not found and currently checked, push it to the list
                            if (!found && bSelect)
                                scope.selectedFiles.push(file);
                        }

                        // the easy way: file is in current folder
                        scope.updateCount(scope.currentFolder, bSelect ? 1 : -1);

                        // update all relevant folders for this file
                        //scope.folder.selectedCount += bSelect ? 1 : -1;
                    };

                    scope.update = function () {
                        scope.ngModel = angular.copy(scope.selectedFiles);
                        scope.editing = false;
                    };

                    scope.getPortalFolders = function () {
                        scope.loading = true;
                        dataSources.callForData({
                            dataSource: 'PortalFolders'
                        }, function (data) {
                            scope.folder = data[0];
                            scope.folder.$_isExpanded = true;

                            // link child folders with their parents
                            function linkChildren(parent) {

                                // update counts
                                var filesInFolder = $.grep(scope.selectedFiles, function (o2, i2) { return o2.Filter == parent.Value; });
                                if (filesInFolder.length)
                                    scope.updateCount(parent, filesInFolder.length);

                                $.each(parent.Children, function (i, folder) {
                                    // link parent
                                    folder.$_parent = parent;

                                    // also link all children
                                    linkChildren(folder);
                                });
                            }

                            linkChildren(scope.folder);

                            // open root folder
                            scope.openFolder(scope.folder);

                            scope.loading = false;
                        });
                    }
                }
            };
        }])


        .directive('dnnsfBgPicker', ['$compile', '$timeout', '$parse', '$sce', 'dnnsf', 'dataSources', function ($compile, $timeout, $parse, $sce, dnnsf, dataSources) {
            return {
                restrict: 'A',
                scope: {
                    model: '=ngModel'
                },
                templateUrl: dnnsf.commonUrl + '/static/dnnsf/tpl/bg-picker.html?v=' + dnnsf.env.version,
                link: function (scope, element, attrs) {

                    scope.bg = {};
                    dataSources.callForData({
                        'DataSource': 'BgPatterns'
                    }, function (data) {
                        scope.patterns = data;
                    });

                    dataSources.callForData({
                        'DataSource': 'BgImages'
                    }, function (data) {
                        scope.images = data;
                    });

                    scope.$watch('model', function () {
                        dnnsf.log('model changed', scope.model);
                        if (scope.model == null)
                            return;

                        scope.bg.type = 'None';
                        var css = dnnsf.parseCssBlock(scope.model);
                        dnnsf.log(css);
                        if (css['background-color']) {
                            scope.bg.type = 'Color';
                            scope.bg.color = css['background-color'];
                        } else if (css['background-image']) {
                            var img = css['background-image'];
                            var myRegexp = /url\((.+)\)/g;
                            var match = myRegexp.exec(img);
                            img = match && match.length > 1 ? match[1] : img;

                            if (css['background-repeat'] == 'no-repeat') {
                                scope.bg.type = 'Image';
                                scope.bg.image = img;
                            } else {
                                scope.bg.type = 'Pattern';
                                scope.bg.pattern = img;
                            }
                        }

                    });


                    // watch changes to recompute value
                    scope.$watch('bg', function () {

                        dnnsf.log('bg changed', scope.bg);

                        switch (scope.bg.type) {
                            case 'None':
                                scope.model = '';
                                break;
                            case 'Color':
                                scope.model = 'background-color: ' + (scope.bg.color || 'transparent') + ';';
                                break;
                            case 'Pattern':
                                scope.model = 'background-image: url(' + scope.bg.pattern + '); background-repeat: repeat;';
                                break;
                            case 'Image':
                                scope.model = 'background-image: url(' + scope.bg.image + ');  background-repeat: no-repeat; background-size:cover';
                                break;
                        }

                    }, true);
                }
            };
        }])


        // select picker
        .directive('bsSelectpicker', ['$compile', '$timeout', '$parse', function ($compile, $timeout, $parse) {
            return {
                restrict: 'A',
                link: function (scope, element, attrs) {
                    $timeout(function () {
                        $(element).selectpicker();
                    }, 200);
                }
            };
        }])


        // select picker
        .directive('dnnsfFieldSelect', ['$compile', '$timeout', '$parse', 'dnnsf', function ($compile, $timeout, $parse, dnnsf) {
            return {
                restrict: 'A',
                scope: {
                    model: '=ngModel',
                    fields: '=',
                    filterType: '=',
                    currentItem: '='
                },
                templateUrl: dnnsf.commonUrl + '/static/dnnsf/tpl/field-select.html?v=' + dnnsf.env.version,
                link: function (scope, element, attrs) {

                    scope.byType = function (type) {

                        // make sure types is an array
                        var types = dnnsf.eval(type);
                        types = dnnsf.toArray(types);

                        return function (item) {
                            return types.length == 0 || $.inArray(item.InputTypeStr, types) != -1;
                        };
                    };

                    scope.exceptItem = function (item) {
                        return function (input) {
                            return item != input.BoundName;
                        };
                    };

                },
                controller: function ($scope) {
                    $scope.checkIfExists = function (model) {
                        if (typeof model === 'object') {
                            return model;
                        } else {
                            var t = false;
                            $.each($scope.fields, function (i, v) {
                                if (v.BoundName == model)
                                    t = true;
                            });
                            return t ? { 'Value': model } : { 'Value': "" }
                        }
                    }
                    $scope.model = $scope.checkIfExists($scope.model);
                }
            };
        }])

        .directive('dnnsfListParameter', ['$timeout', 'dnnsf', function ($timeout, dnnsf) {
            return {
                restrict: 'A',
                scope: {
                    model: '=dnnsfListParameter',
                    def: '=definition'
                },
                templateUrl: dnnsf.commonUrl + '/static/dnnsf/tpl/list-parameter.html?v=' + dnnsf.env.version,
                link: function ($scope, element) {

                    $scope.localize = g_localize;
                    $scope.newValue = '';
                    $scope.editFields = {};
                    $scope.newValueInFocus = false;

                    $scope.addNewValue = function () {
                        if (!$scope.newValue)
                            return;

                        $scope.model.push($scope.newValue);
                        $scope.newValue = '';
                    };

                    $scope.addMultiValue = function () {
                        if (!$scope.newValue)
                            return;

                        var values = $scope.newValue.split(',').map(function (item) { return item.replace(/^\s+|\s+$/g, ''); });
                        Array.prototype.push.apply($scope.model, values);
                        $scope.newValue = '';
                    };

                    $scope.isEditMode = function (index) {
                        return !$scope.model[index] || $scope.editFields[index];
                    };

                    $scope.setEditMode = function (index) {
                        $scope.editFields[index] = true;
                    };

                    $scope.unsetEditMode = function (index, updatedValue) {
                        // Do not disable edit mode if we do not have a value
                        if (!updatedValue) {
                            // but, if this is the last item, remove it
                            if (index == $scope.model.length - 1)
                                $scope.model.splice(index, 1);
                            return;
                        }

                        // update the model value. we do not have two way binding because of the ngIf directive scope.
                        $scope.model[index] = updatedValue;
                        $scope.editFields[index] = false;
                    };

                    $scope.removeValue = function (index) {
                        $scope.editFields[index] = false;
                        $scope.model.splice(index, 1);
                    };

                    $scope.focus = function (index) {
                        $timeout(function () {
                            var input = element.find('#lp-item-' + index);
                            if (input.length)
                                input.focus();
                        });
                    };

                    var TabKey = 9, EnterKey = 13;
                    $scope.keydownItem = function (event, index, value) {
                        if (event.keyCode != EnterKey)
                            return;

                        event.preventDefault();
                        $scope.unsetEditMode(index, value);
                    };

                    $scope.keydownNewValue = function (event) {
                        if (event.keyCode != TabKey && event.keyCode != EnterKey)
                            return;

                        if (event.keyCode == EnterKey) {
                            event.preventDefault();
                            if (event.shiftKey) {
                                $scope.addMultiValue();
                            } else {
                                $scope.addNewValue();
                            }
                        }

                        // do not re-focus if the value is empty or the shift key is pressed (e.g. shift + tab)
                        if (!$scope.newValue || event.shiftKey)
                            return;

                        $timeout(function () {
                            event.target.focus();
                        });
                    };

                    $scope.focusNewValue = function () {
                        $scope.newValueInFocus = true;
                    }

                    $scope.blurNewValue = function () {
                        $scope.newValueInFocus = false;
                        $scope.addNewValue();
                    }
                }
            }
        }])

        .directive('uiShow', function () {
            return {
                restrict: 'A',
                link: function (scope, element, attrs) {

                    var expression = attrs.uiShow;

                    // optional slide duration.
                    var duration = (attrs.uiDuration || "fast");
                    var effect = (attrs.uiEffect || "slide");

                    // check to see the default display of the element based on the link-time value of the model we are watching.
                    if (!scope.$eval(expression)) {
                        element.hide();
                    }

                    // watch the expression in scope context to when it changes - and adjust the visibility of the element accordingly.
                    scope.$watch(
                        expression,
                        function (newValue, oldValue) {

                            // Ignore first-run values since we've already defaulted the element state.
                            if (newValue === oldValue)
                                return;

                            if (newValue) {
                                if (effect == 'fade') {
                                    element.stop(true, true).fadeIn(duration);
                                } else {
                                    element.stop(true, true).slideDown(duration);
                                }
                            } else {
                                if (effect == 'fade') {
                                    element.stop(true, true).fadeOut(duration);
                                } else {
                                    element.stop(true, true).slideUp(duration);
                                }
                            }

                        }
                    );

                }
            };
        })


        // Directives based on http://stackoverflow.com/a/24271309/3894163
        .directive("dnnsfNumberLimits", function () {
            return {
                link: function (scope, element, attributes) {
                    element.on("keydown keyup", function (e) {
                        if (e.keyCode == 46 || e.keyCode == 8) {
                            return;
                        }
                        if (Number(element.val()) > Number(attributes.max)) {
                            e.preventDefault();
                            element.val(attributes.max);
                        }

                        if (Number(element.val()) < Number(attributes.min)) {
                            e.preventDefault();
                            element.val(attributes.min);
                        }
                    });
                }
            };
        })

        .directive('uiFocus', ['$timeout', function ($timeout) {
            return {
                restrict: 'A',
                link: function (scope, element, attrs) {
                    scope.$watch(attrs.uiFocus, function (value) {
                        if (value) {
                            $timeout(function () {
                                $(element[0]).focus().select();
                            });
                        }
                    }, true);
                }
            };
        }])

        .directive('ngConfirmClick', [
            function () {
                return {
                    priority: -1,
                    restrict: 'A',
                    link: function (scope, element, attrs) {
                        element.bind('click', function (e) {
                            var message = attrs.ngConfirmClick;
                            if (message && !confirm(message)) {
                                e.stopImmediatePropagation();
                                e.preventDefault();
                            }
                        });
                    }
                }
            }
        ])

        .directive('ngEnter', function () {
            return function (scope, element, attrs) {
                element.bind("keydown keypress", function (event) {
                    if (event.which === 13) {
                        scope.$apply(function () {
                            scope.$eval(attrs.ngEnter);
                        });

                        event.preventDefault();
                    }
                });
            };
        })

        .directive('dynamic', ['$compile', function ($compile) {
            return {
                restrict: 'A',
                replace: true,
                link: function (scope, ele, attrs) {
                    scope.$watch(attrs.dynamic, function (html) {
                        ele.html(g_localize(html));
                        $compile(ele.contents())(scope);
                    });
                }
            };
        }]);
}
window.dnnsfAngular15 ? initDnnsfComponents(dnnsfAngular15) : '';
window.angular ? initDnnsfComponents(angular) : '';
