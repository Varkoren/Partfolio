gsap.registerPlugin(ScrollTrigger);

const translations = {
    en: {
        nav: {
            about: "About",
            projects: "Projects",
            contact: "Contact"
        },
        hero: {
            subtitle: "Developer & Technical Writer",
            exploreBtn: "Explore Projects",
            contactBtn: "Contact"
        },
        about: {
            title: "About Me",
            dev: {
                title: "Full-Stack Development",
                text: "Specializing in building high-load web applications with a focus on security and performance. Deep expertise in modern frameworks, architectural patterns, and cryptographic protocols."
            },
            security: {
                title: "Security & Encryption",
                text: "Deep understanding of cryptography and security protocols. Experience in developing systems with end-to-end encryption, zero-knowledge architecture, and protection against various attack vectors."
            },
            writing: {
                title: "Technical Writing",
                text: "Creating detailed technical documentation, architectural specifications, and guides. Ability to translate complex technical concepts into understandable form for various audiences."
            },
            innovation: {
                title: "Innovation",
                text: "Constant search for innovative solutions and optimizations. Researching new technologies, algorithms, and approaches to solving complex technical problems."
            }
        },
        projects: {
            title: "Featured Projects",
            featured: "Featured",
            demo: "Live Demo",
            source: "Source Code",
            close: "Close"
        },
        contact: {
            title: "Let's Connect",
            text: "Open to interesting projects and collaborations. Contact me to discuss collaboration opportunities."
        }
    },
    ru: {
        nav: {
            about: "О себе",
            projects: "Проекты",
            contact: "Контакты"
        },
        hero: {
            subtitle: "Разработчик и Технический Писатель",
            exploreBtn: "Посмотреть проекты",
            contactBtn: "Связаться"
        },
        about: {
            title: "Обо мне",
            dev: {
                title: "Full-Stack разработка",
                text: "Специализируюсь на создании высоконагруженных веб-приложений с фокусом на безопасность и производительность. Глубокая экспертиза в современных фреймворках, архитектурных паттернах и криптографических протоколах."
            },
            security: {
                title: "Безопасность и шифрование",
                text: "Глубокое понимание криптографии и протоколов безопасности. Опыт разработки систем с end-to-end шифрованием, zero-knowledge архитектурой и защитой от различных векторов атак."
            },
            writing: {
                title: "Техническое письмо",
                text: "Создание подробной технической документации, архитектурных спецификаций и гайдов. Умение переводить сложные технические концепции в понятную форму для различных аудиторий."
            },
            innovation: {
                title: "Инновации",
                text: "Постоянный поиск инновационных решений и оптимизаций. Исследование новых технологий, алгоритмов и подходов к решению сложных технических задач."
            }
        },
        projects: {
            title: "Избранные проекты",
            featured: "Избранное",
            demo: "Демо",
            source: "Исходный код",
            close: "Закрыть"
        },
        contact: {
            title: "Давайте сотрудничать",
            text: "Открыт к интересным проектам и коллаборациям. Свяжитесь со мной для обсуждения возможностей сотрудничества."
        }
    }
};

const projectData = {
    cognito: {
        en: {
            title: "Cognito",
            subtitle: "Enterprise-Grade E2EE Messenger Platform",
            description: "Cognito is a full-featured enterprise-grade secure communications platform, designed with a focus on absolute privacy and cryptographic resilience.",
            sections: [
                {
                    title: "Security Architecture",
                    content: `The system is built on zero-knowledge architecture principles, where the server acts solely as a relay node without the ability to decrypt content. A complete end-to-end encryption is implemented using a hybrid cryptographic scheme:

For key exchange, the Elliptic Curve Diffie-Hellman (ECDH) protocol on the Curve25519 curve is applied, providing forward secrecy. Each session generates a unique ephemeral key pair, which eliminates the compromise of historical correspondence even if long-term keys are leaked.

Symmetric message encryption is performed through AES-256-GCM with authenticated mode, which guarantees not only confidentiality but also data integrity. Each message is encrypted with a unique session key generated through HKDF (HMAC-based Key Derivation Function).

The cryptographic architecture includes multiple layers of defense:
• Perfect Forward Secrecy through ephemeral key pairs
• Deniable authentication using modified Signal protocol
• Post-quantum resistance preparation with hybrid key exchange
• Metadata minimization to prevent traffic analysis`
                },
                {
                    title: "Protection from Database Owner",
                    content: `A critical feature is complete protection from infrastructure administrators. The database stores exclusively:

• Encrypted data packets, unsuitable for decoding without client keys
• Hashed user identifiers (SHA-256 with salt)
• Metadata in minimal volume necessary for routing

Private user keys never leave the client device and are stored encrypted using a key derived from the user's password through Argon2id with high iteration parameters. This provides protection against rainbow table attacks and brute force.

Additional security measures:
• Client-side key generation and storage in encrypted form
• No server access to plaintext messages at any point
• Secure key backup with user-controlled encryption
• Automatic key rotation for enhanced security
• Zero-knowledge user authentication system`
                },
                {
                    title: "Client Architecture and Native Applications",
                    content: `Native clients developed for multiple platforms:

**Desktop (EXE)**: Electron-based application with system keychain integration for secure credential storage. Sandbox process isolation implemented to minimize attack surface. Features include:
• Hardware security module integration where available
• Automatic updates with code signing verification
• Local database encryption with SQLCipher
• Memory protection against debugging and injection

**Mobile (APK)**: Native Android application using Android Keystore System for hardware protection of cryptographic keys. StrongBox biometric authentication support. Includes:
• TEE (Trusted Execution Environment) integration
• SafetyNet attestation for device integrity
• Secure screen capture prevention
• Encrypted local storage with key derivation

**Web Client**: Progressive Web Application using Web Crypto API for cryptographic operations. Service Worker implemented for offline functionality and encrypted data caching. Features:
• IndexedDB encryption for local storage
• Content Security Policy implementation
• Subresource Integrity for external resources`
                },
                {
                    title: "Technology Stack & Performance",
                    content: `Frontend built on React with TypeScript for type safety. State managed through Redux Toolkit with middleware for cryptographic operations. Optimized rendering with React.memo and useMemo hooks for crypto-intensive operations.

Backend written in Node.js with Express, uses WebSocket for real-time communication with automatic reconnection and message queuing. PostgreSQL database with full column-level encryption.

Performance optimizations:
• Message batching for reduced network overhead
• Lazy loading of conversation history
• Web Workers for non-blocking encryption operations
• Optimistic UI updates with conflict resolution
• CDN integration for static assets
• Database query optimization with proper indexing

For cross-platform native applications, Electron is used for desktop and React Native for mobile platforms with native modules for cryptographic operations to ensure maximum performance.`
                }
            ],
            tech: ["E2EE", "Curve25519", "AES-256-GCM", "React", "TypeScript", "WebCrypto API", "Electron", "React Native", "WebSocket", "PostgreSQL", "Argon2id", "Redux Toolkit"],
            link: "https://vark-gram.vercel.app",
            demo: "https://vark-gram.vercel.app"
        },
        ru: {
            title: "Cognito",
            subtitle: "Мессенджер корпоративного уровня с E2EE шифрованием",
            description: "Cognito представляет собой полнофункциональную платформу защищенных коммуникаций корпоративного уровня, разработанную с фокусом на абсолютную приватность и криптографическую стойкость.",
            sections: [
                {
                    title: "Архитектура безопасности",
                    content: `Система построена на принципах zero-knowledge архитектуры, где сервер выступает исключительно в роли relay-узла без возможности дешифрования контента. Реализована полная end-to-end encryption с использованием гибридной криптографической схемы:

Для обмена ключами применяется протокол Elliptic Curve Diffie-Hellman (ECDH) на кривой Curve25519, обеспечивающий forward secrecy. Каждая сессия генерирует уникальную эфемерную пару ключей, что исключает компрометацию исторической переписки даже при утечке долгосрочных ключей.

Симметричное шифрование сообщений выполняется через AES-256-GCM с аутентифицированным режимом, что гарантирует не только конфиденциальность, но и целостность данных. Каждое сообщение шифруется уникальным сессионным ключом, генерируемым через HKDF (HMAC-based Key Derivation Function).

Криптографическая архитектура включает множественные уровни защиты:
• Perfect Forward Secrecy через эфемерные пары ключей
• Отрицаемая аутентификация с модифицированным Signal протоколом
• Подготовка к пост-квантовой устойчивости с гибридным обменом ключей
• Минимизация метаданных для предотвращения анализа трафика`
                },
                {
                    title: "Защита от владельца базы данных",
                    content: `Критической особенностью является полная защита от администраторов инфраструктуры. В базе данных хранятся исключительно:

• Зашифрованные пакеты данных, непригодные для декодирования без клиентских ключей
• Хэши идентификаторов пользователей (SHA-256 с солью)
• Метаданные в минимальном объеме, необходимом для маршрутизации

Приватные ключи пользователей никогда не покидают клиентское устройство и хранятся в зашифрованном виде с использованием ключа, производного от пароля пользователя через Argon2id с высокими параметрами итераций. Это обеспечивает защиту от rainbow table атак и bruteforce.

Дополнительные меры безопасности:
• Клиентская генерация и хранение ключей в зашифрованном виде
• Отсутствие доступа сервера к незашифрованным сообщениям
• Безопасное резервное копирование ключей под контролем пользователя
• Автоматическая ротация ключей для повышенной безопасности
• Zero-knowledge система аутентификации пользователей`
                },
                {
                    title: "Клиентская архитектура и нативные приложения",
                    content: `Разработаны нативные клиенты для множественных платформ:

**Desktop (EXE)**: Electron-based приложение с интеграцией системного keychain для безопасного хранения credentials. Реализована sandbox-изоляция процессов для минимизации attack surface. Возможности включают:
• Интеграцию с аппаратными модулями безопасности где доступно
• Автоматические обновления с верификацией подписи кода
• Локальное шифрование базы данных с SQLCipher
• Защита памяти от отладки и инъекций

**Mobile (APK)**: Нативное Android-приложение с использованием Android Keystore System для аппаратной защиты криптографических ключей. Поддержка биометрической аутентификации через StrongBox. Включает:
• Интеграцию TEE (Trusted Execution Environment)
• SafetyNet аттестацию для проверки целостности устройства
• Защиту от снимков экрана в критичных местах
• Зашифрованное локальное хранилище с деривацией ключей

**Web Client**: Progressive Web Application с использованием Web Crypto API для криптографических операций. Реализован Service Worker для offline-функциональности и кэширования зашифрованных данных. Возможности:
• Шифрование IndexedDB для локального хранения
• Реализация Content Security Policy
• Subresource Integrity для внешних ресурсов`
                },
                {
                    title: "Технологический стек и производительность",
                    content: `Frontend построен на React с TypeScript для типобезопасности. Состояние управляется через Redux Toolkit с middleware для обработки криптографических операций. Оптимизированный рендеринг с React.memo и useMemo хуками для крипто-интенсивных операций.

Backend написан на Node.js с Express, использует WebSocket для real-time коммуникации с автоматическим переподключением и очередью сообщений. База данных PostgreSQL с полным шифрованием на уровне колонок.

Оптимизации производительности:
• Батчинг сообщений для снижения нагрузки на сеть
• Ленивая загрузка истории переписки
• Web Workers для неблокирующих операций шифрования
• Оптимистичные обновления UI с разрешением конфликтов
• Интеграция CDN для статических ассетов
• Оптимизация запросов к БД с правильной индексацией

Для cross-platform нативных приложений применяется Electron для desktop и React Native для мобильных платформ с нативными модулями для криптографических операций для обеспечения максимальной производительности.`
                }
            ],
            tech: ["E2EE", "Curve25519", "AES-256-GCM", "React", "TypeScript", "WebCrypto API", "Electron", "React Native", "WebSocket", "PostgreSQL", "Argon2id", "Redux Toolkit"],
            link: "https://vark-gram.vercel.app",
            demo: "https://vark-gram.vercel.app"
        }
    },
    gevbook: {
        en: {
            title: "GevBook",
            subtitle: "Full-Featured Social Network Platform",
            description: "Full-featured Facebook clone demonstrating deep understanding of social network architecture and real-time systems with scalable infrastructure.",
            sections: [
                {
                    title: "Social Mechanics and Data Architecture",
                    content: `Implemented comprehensive social interaction system with real-time synchronization. The post system supports multiple content types with lazy loading and feed virtualization. Implemented content ranking algorithm based on engagement metrics with temporal decay.

Advanced features include activity feed with personalized ranking, granular privacy controls, group functionality with permissions, event management with RSVP, photo tagging with facial recognition, and live streaming with WebRTC.`
                },
                {
                    title: "Game Integration",
                    content: `Platform includes built-in gaming layer with Chrome Dino Game reimplementation optimized for 60 FPS, plus additional mini-games. Architecture allows easy integration through modular plugin system. Game achievements integrated into user profile with efficient leaderboard using Redis sorted sets.`
                },
                {
                    title: "Database and Scalability",
                    content: `Uses Firebase Realtime Database for instant synchronization, offline persistence with conflict resolution, and optimistic UI updates. Data structure denormalized for fast reads with composite indexes. Security Rules configured for granular authorization. Includes sharding strategy, Redis caching, CDN integration, and horizontal scaling capability.`
                }
            ],
            tech: ["React", "Firebase Realtime DB", "WebSocket", "Canvas API", "Service Workers", "WebP", "OAuth 2.0", "Material-UI", "Redis", "WebRTC"],
            link: "https://gev-book-with-real-data-base.vercel.app",
            demo: "https://gev-book-with-real-data-base.vercel.app"
        },
        ru: {
            title: "GevBook",
            subtitle: "Полнофункциональная платформа социальной сети",
            description: "Полнофункциональный клон Facebook, демонстрирующий глубокое понимание архитектуры социальных сетей и real-time систем с масштабируемой инфраструктурой.",
            sections: [
                {
                    title: "Социальные механики и архитектура данных",
                    content: `Реализована комплексная система социальных взаимодействий с real-time синхронизацией. Система постов поддерживает множественные типы контента с lazy loading и виртуализацией. Реализован алгоритм ранжирования на основе engagement metrics с temporal decay.

Продвинутые возможности включают персонализированную ленту, детальные настройки приватности, функциональность групп с правами, управление событиями с RSVP, тегирование фотографий с распознаванием лиц, и прямые трансляции через WebRTC.`
                },
                {
                    title: "Интеграция игр",
                    content: `Платформа включает встроенный gaming layer с реимплементацией Chrome Dino Game, оптимизированной для 60 FPS, плюс дополнительные мини-игры. Архитектура позволяет легко интегрировать игры через модульную систему плагинов. Игровые достижения интегрированы в профиль с эффективными лидербордами через Redis sorted sets.`
                },
                {
                    title: "База данных и масштабируемость",
                    content: `Используется Firebase Realtime Database для мгновенной синхронизации, offline persistence с разрешением конфликтов, и оптимистичными обновлениями UI. Структура денормализована для быстрых чтений с составными индексами. Security Rules для детальной авторизации. Включает стратегию шардинга, Redis кэширование, CDN интеграцию, и горизонтальное масштабирование.`
                }
            ],
            tech: ["React", "Firebase Realtime DB", "WebSocket", "Canvas API", "Service Workers", "WebP", "OAuth 2.0", "Material-UI", "Redis", "WebRTC"],
            link: "https://gev-book-with-real-data-base.vercel.app",
            demo: "https://gev-book-with-real-data-base.vercel.app"
        }
    },
    password: {
        en: {
            title: "The Password Game",
            subtitle: "Advanced Logic Puzzle with Dynamic Validation",
            description: "Complex logic game demonstrating mastery in regular expressions, real-time validation, and user experience design.",
            sections: [
                {
                    title: "Dynamic Validation System",
                    content: `Game built on gradually increasing rules with cascading validator system. Validation occurs in real-time with debouncing. Rules include minimum length requirements, specific characters, mathematical constraints, contextual rules, pattern prohibitions, chemical elements, chess notation, and more. Complexity escalates dramatically creating both frustration and achievement moments.`
                },
                {
                    title: "Regular Expression Architecture",
                    content: `Each rule implemented through optimized RegEx using advanced features like lookahead/lookbehind assertions, named capturing groups, atomic groups, and conditional patterns. Special attention to preventing catastrophic backtracking. Performance optimizations include memoization, incremental validation, worker threads, and timeout mechanisms.`
                },
                {
                    title: "Real-time Processing and UX",
                    content: `Input processed using requestIdleCallback for heavy validations. Visual feedback through color indicators, progressive disclosure, animated hints, haptic feedback, sound effects, and particle effects. Includes undo/redo system, auto-save with encryption, and accessibility features like screen reader support and keyboard navigation.`
                }
            ],
            tech: ["Vanilla JavaScript", "Advanced RegEx", "Web Workers", "LocalStorage API", "CSS Animations", "Debouncing", "IndexedDB", "Web Audio API"],
            link: "https://varkoren.github.io/PasswordGame",
            demo: "https://varkoren.github.io/PasswordGame"
        },
        ru: {
            title: "The Password Game",
            subtitle: "Продвинутая логическая головоломка",
            description: "Сложная логическая игра, демонстрирующая мастерство в области регулярных выражений, real-time валидации и UX design.",
            sections: [
                {
                    title: "Система динамической валидации",
                    content: `Игра построена на постепенно усложняющихся правилах с каскадной системой валидаторов. Валидация в real-time с debouncing. Правила включают требования к длине, специфические символы, математические ограничения, контекстные правила, запреты паттернов, химические элементы, шахматную нотацию и многое другое. Сложность эскалирует драматически.`
                },
                {
                    title: "Архитектура регулярных выражений",
                    content: `Каждое правило реализовано через оптимизированное RegEx с продвинутыми features: lookahead/lookbehind assertions, named capturing groups, atomic groups, conditional patterns. Особое внимание к предотвращению catastrophic backtracking. Оптимизации: memoization, инкрементальная валидация, worker потоки, механизмы таймаута.`
                },
                {
                    title: "Real-time обработка и UX",
                    content: `Input обрабатывается через requestIdleCallback для тяжелых валидаций. Визуальный feedback: цветовые индикаторы, progressive disclosure, анимированные подсказки, haptic feedback, звуковые эффекты, эффекты частиц. Система undo/redo, автосохранение с шифрованием, доступность со screen reader и навигацией с клавиатуры.`
                }
            ],
            tech: ["Vanilla JavaScript", "Advanced RegEx", "Web Workers", "LocalStorage API", "CSS Animations", "Debouncing", "IndexedDB", "Web Audio API"],
            link: "https://varkoren.github.io/PasswordGame",
            demo: "https://varkoren.github.io/PasswordGame"
        }
    },
    shahlikey: {
        en: {
            title: "ShahliKey",
            subtitle: "Modern Game Keys E-commerce Platform",
            description: "Modern e-commerce platform for game keys with focus on UX/UI excellence and performance optimization.",
            sections: [
                {
                    title: "User Experience and Interface",
                    content: `Design built on minimal friction principles with grid-based layout and dynamic card sizing. Smart search with autocomplete using Levenshtein distance. Product pages optimized for conversion with above-the-fold content, trust signals, sticky CTAs, and quick view modals. Single-page checkout with progressive disclosure.`
                },
                {
                    title: "Dynamic Filter System",
                    content: `Advanced filtering with real-time updates and URL state synchronization. Multi-select categories, price range slider with histogram, availability status, rating threshold, release date range, language support, and region compatibility. Filters combine through AND/OR logic. Backend optimized with Elasticsearch integration and Redis caching.`
                },
                {
                    title: "Performance Optimization",
                    content: `Next.js with SSR, static generation with ISR, automatic code splitting, and image optimization. Aggressive caching: CDN, browser caching, React Query, Service Worker. Image pipeline with multiple sizes and WebP format. Performance metrics: FCP < 1.5s, TTI < 3.5s, Lighthouse > 95.`
                }
            ],
            tech: ["Next.js", "React Query", "TypeScript", "Tailwind CSS", "PostgreSQL", "Redis", "Stripe API", "GraphQL", "Elasticsearch", "Docker"],
            link: "https://shahli-key.vercel.app",
            demo: "https://shahli-key.vercel.app"
        },
        ru: {
            title: "ShahliKey",
            subtitle: "Современная платформа для игровых ключей",
            description: "Современная e-commerce платформа для игровых ключей с акцентом на UX/UI и оптимизацию производительности.",
            sections: [
                {
                    title: "UX и интерфейс",
                    content: `Дизайн на принципах minimal friction с grid layout и dynamic card sizing. Smart search с autocomplete через Levenshtein distance. Product pages для конверсии: above-the-fold контент, trust signals, sticky CTAs, quick view модали. Single-page checkout с progressive disclosure.`
                },
                {
                    title: "Система фильтров",
                    content: `Продвинутая фильтрация с real-time обновлениями и URL state synchronization. Multi-select категории, price range slider с histogram, availability status, rating threshold, release date range, поддержка языков, совместимость регионов. Фильтры через AND/OR логику. Backend с Elasticsearch и Redis кэшированием.`
                },
                {
                    title: "Оптимизация производительности",
                    content: `Next.js с SSR, static generation с ISR, automatic code splitting, image optimization. Aggressive caching: CDN, browser, React Query, Service Worker. Image pipeline с множеством размеров и WebP. Метрики: FCP < 1.5s, TTI < 3.5s, Lighthouse > 95.`
                }
            ],
            tech: ["Next.js", "React Query", "TypeScript", "Tailwind CSS", "PostgreSQL", "Redis", "Stripe API", "GraphQL", "Elasticsearch", "Docker"],
            link: "https://shahli-key.vercel.app",
            demo: "https://shahli-key.vercel.app"
        }
    },
    rkn: {
        en: {
            title: "RKN Roulette",
            subtitle: "Interactive Satirical Web Experience",
            description: "Interactive satirical project with game elements and creative web development approach.",
            sections: [
                {
                    title: "Concept and Implementation",
                    content: `Interactive satire with roulette mechanic using CSS transforms and JavaScript timing functions for realistic physics. Provocative visual style with bright colors, bold typography, modern CSS features: Grid, custom properties, backdrop filters, animation keyframes, 3D transforms. Weighted probability system and physics simulation.`
                },
                {
                    title: "Interactivity and Animations",
                    content: `Comprehensive feedback: particle effects, sound through Web Audio API, haptic feedback, smooth scrolling, screen reader support, loading states. Animations optimized for 60 FPS using transforms and opacity. Advanced interactions: drag to spin, multi-touch, keyboard shortcuts, gesture recognition.`
                }
            ],
            tech: ["Vanilla JavaScript", "CSS Animations", "Web Audio API", "Canvas API", "ES6+", "CSS Grid"],
            link: "https://varkoren.github.io/RKN",
            demo: "https://varkoren.github.io/RKN"
        },
        ru: {
            title: "RKN Roulette",
            subtitle: "Интерактивный сатирический веб-опыт",
            description: "Интерактивный сатирический проект с игровыми элементами и креативным подходом к веб-разработке.",
            sections: [
                {
                    title: "Концепция и реализация",
                    content: `Интерактивная сатира с механикой рулетки через CSS transforms и JavaScript timing functions для реалистичной физики. Провокационный стиль с яркими цветами, bold typography, modern CSS: Grid, custom properties, backdrop filters, animation keyframes, 3D transforms. Система взвешенной вероятности и симуляция физики.`
                },
                {
                    title: "Интерактивность и анимации",
                    content: `Комплексный feedback: particle effects, звук через Web Audio API, haptic feedback, smooth scrolling, screen reader поддержка, loading states. Анимации для 60 FPS через transforms и opacity. Продвинутые взаимодействия: drag to spin, multi-touch, keyboard shortcuts, распознавание жестов.`
                }
            ],
            tech: ["Vanilla JavaScript", "CSS Animations", "Web Audio API", "Canvas API", "ES6+", "CSS Grid"],
            link: "https://varkoren.github.io/RKN",
            demo: "https://varkoren.github.io/RKN"
        }
    },
    steam: {
        en: {
            title: "Steam Tools Guide Book",
            subtitle: "Comprehensive Technical Documentation",
            description: "Detailed technical guide on Steam API, manifests and Lua scripts for automation.",
            sections: [
                {
                    title: "Working with Steam Manifests",
                    content: `Detailed ACF file structure and modification methods. Guide covers parsing, launch parameter modification, language changes, region lock bypassing, game downgrading through BuildID, depot structure understanding, DLC management. Includes scripts with error handling and validation, backup/rollback functionality.`
                },
                {
                    title: "Lua Scripts for Automation",
                    content: `Collection for Steam automation: bulk settings modification, automatic library organization, backup/restore with compression, batch operations with progress tracking, SteamCMD integration, custom launcher creation. Each script fully documented with examples, parameters, troubleshooting, and best practices.`
                },
                {
                    title: "Technical Documentation Structure",
                    content: `Professional documentation with table of contents, prerequisites, step-by-step instructions with screenshots, code snippets with syntax highlighting, troubleshooting, FAQ, glossary, version history. Markdown with custom CSS, diagrams with Mermaid.js. Features: search, responsive design, theme toggle, copy-to-clipboard.`
                }
            ],
            tech: ["Lua", "ACF Parser", "Steam API", "Markdown", "Technical Writing", "Documentation", "Python", "PowerShell"],
            source: "https://github.com/varkoren/steam-tools-guide"
        },
        ru: {
            title: "Steam Tools Guide Book",
            subtitle: "Исчерпывающая техническая документация",
            description: "Подробное техническое руководство по Steam API, манифестам и Lua-скриптам для автоматизации.",
            sections: [
                {
                    title: "Работа с манифестами Steam",
                    content: `Детальное описание структуры ACF файлов и методов модификации. Гайд покрывает: парсинг, модификацию параметров запуска, изменение языков, обход region locks, downgrade игр через BuildID, структуру depot, управление DLC. Включает скрипты с обработкой ошибок и валидацией, backup/rollback функциональность.`
                },
                {
                    title: "Lua-скрипты для автоматизации",
                    content: `Коллекция для автоматизации Steam: массовое изменение настроек, автоорганизация библиотеки, backup/restore со сжатием, batch операции с отслеживанием прогресса, интеграция SteamCMD, создание кастомных лаунчеров. Каждый скрипт документирован с примерами, параметрами, troubleshooting, best practices.`
                },
                {
                    title: "Структура технической документации",
                    content: `Профессиональная документация с table of contents, prerequisites, step-by-step инструкциями со скриншотами, code snippets с syntax highlighting, troubleshooting, FAQ, глоссарием, version history. Markdown с кастомным CSS, диаграммы с Mermaid.js. Возможности: поиск, responsive design, theme toggle, copy-to-clipboard.`
                }
            ],
            tech: ["Lua", "ACF Parser", "Steam API", "Markdown", "Technical Writing", "Documentation", "Python", "PowerShell"],
            source: "https://github.com/varkoren/steam-tools-guide"
        }
    }
};

let currentLang = 'en';

document.addEventListener('DOMContentLoaded', () => {
    initTypingEffect();
    initScrollAnimations();
    initProjectCards();
    initSmoothScroll();
    initLanguageSwitcher();
    updateContent();
});

function initLanguageSwitcher() {
    const langButtons = document.querySelectorAll('.lang-btn');
    
    langButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            if (lang !== currentLang) {
                currentLang = lang;
                langButtons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                updateContent();
            }
        });
    });
}

function updateContent() {
    const elements = document.querySelectorAll('[data-i18n]');
    
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        const keys = key.split('.');
        let value = translations[currentLang];
        
        for (const k of keys) {
            value = value[k];
            if (!value) break;
        }
        
        if (value) {
            el.textContent = value;
        }
    });
    
    updateProjectCards();
}

function updateProjectCards() {
    const projectCards = document.querySelectorAll('.project-card');
    const projectIds = ['cognito', 'gevbook', 'password', 'shahlikey', 'rkn', 'steam'];
    
    projectCards.forEach((card, index) => {
        const projectId = projectIds[index];
        if (projectData[projectId] && projectData[projectId][currentLang]) {
            const data = projectData[projectId][currentLang];
            const titleEl = card.querySelector('h3');
            const subtitleEl = card.querySelector('.text-sm.text-gray-400');
            const descEl = card.querySelector('.text-gray-300.text-sm');
            
            if (titleEl) titleEl.textContent = data.title;
            if (subtitleEl) subtitleEl.textContent = data.subtitle;
            if (descEl) descEl.textContent = data.description;
        }
    });
    
    const featuredBadge = document.querySelector('.featured-badge');
    if (featuredBadge) {
        featuredBadge.textContent = translations[currentLang].projects.featured;
    }
}

function initTypingEffect() {
    const text = "VARKOREN";
    const element = document.querySelector('.typing-text');
    let index = 0;
    
    function type() {
        if (index < text.length) {
            element.textContent += text.charAt(index);
            index++;
            setTimeout(type, 150);
        }
    }
    
    setTimeout(type, 500);
}

function initScrollAnimations() {
    gsap.utils.toArray('.section-title').forEach(title => {
        gsap.from(title, {
            scrollTrigger: {
                trigger: title,
                start: "top 80%",
                toggleActions: "play none none reverse"
            },
            x: -100,
            opacity: 0,
            duration: 1,
            ease: "power3.out"
        });
    });
    
    gsap.utils.toArray('.cyber-card').forEach((card, index) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: "top 85%",
                toggleActions: "play none none reverse"
            },
            y: 50,
            opacity: 0,
            duration: 0.8,
            delay: index * 0.1,
            ease: "power3.out"
        });
    });
    
    gsap.from('.hero-content', {
        opacity: 0,
        y: 100,
        duration: 1.2,
        ease: "power3.out",
        delay: 0.3
    });
}

function initProjectCards() {
    const cards = document.querySelectorAll('.project-card');
    
    cards.forEach(card => {
        card.addEventListener('click', () => {
            const projectId = card.getAttribute('data-project');
            openProjectModal(projectId);
        });
    });
}

function openProjectModal(projectId) {
    const project = projectData[projectId][currentLang];
    const modal = document.getElementById('projectModal');
    const modalBody = document.getElementById('modalBody');
    
    let sectionsHTML = '';
    project.sections.forEach(section => {
        sectionsHTML += `
            <div class="modal-section">
                <h3>${section.title}</h3>
                <p>${section.content.replace(/\n/g, '<br><br>')}</p>
            </div>
        `;
    });
    
    let techStackHTML = '';
    project.tech.forEach(tech => {
        techStackHTML += `<span class="tech-stack-item">${tech}</span>`;
    });
    
    const demoText = translations[currentLang].projects.demo;
    const sourceText = translations[currentLang].projects.source;
    
    modalBody.innerHTML = `
        <div class="modal-header">
            <h2 class="modal-title text-gradient">${project.title}</h2>
            <p class="modal-subtitle">${project.subtitle}</p>
            <p class="text-gray-300">${project.description}</p>
        </div>
        
        ${sectionsHTML}
        
        <div class="modal-section">
            <h3>${currentLang === 'en' ? 'Technology Stack' : 'Технологический стек'}</h3>
            <div class="tech-stack">
                ${techStackHTML}
            </div>
        </div>
        
        <div class="modal-links">
            ${project.demo ? `
                <a href="${project.demo}" target="_blank" class="modal-button">
                    <i class="fas fa-external-link-alt"></i>
                    <span>${demoText}</span>
                </a>
            ` : ''}
            ${project.source ? `
                <a href="${project.source}" target="_blank" class="modal-button">
                    <i class="fab fa-github"></i>
                    <span>${sourceText}</span>
                </a>
            ` : ''}
        </div>
    `;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    gsap.from('.modal-content', {
        scale: 0.8,
        opacity: 0,
        duration: 0.4,
        ease: "back.out(1.7)"
    });
}

document.querySelector('.modal-overlay')?.addEventListener('click', closeModal);
document.querySelector('.modal-close')?.addEventListener('click', closeModal);

function closeModal() {
    const modal = document.getElementById('projectModal');
    
    gsap.to('.modal-content', {
        scale: 0.8,
        opacity: 0,
        duration: 0.3,
        ease: "power2.in",
        onComplete: () => {
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
    }
});

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const navHeight = 80;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-active');
        }
    });
}, observerOptions);

document.querySelectorAll('.cyber-card').forEach(card => {
    card.classList.add('fade-in');
    observer.observe(card);
});