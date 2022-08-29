
DROP TABLE IF EXISTS exercises CASCADE; 
DROP TABLE IF EXISTS journal CASCADE;
DROP TABLE IF EXISTS users CASCADE;





CREATE TABLE exercises (
    id SERIAL PRIMARY KEY,
    name TEXT UNIQUE,
    prime_movers TEXT,
    secondaries TEXT,
    video TEXT
);

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name TEXT UNIQUE
);


CREATE TABLE journal (
    id SERIAL PRIMARY KEY,
    username TEXT NOT NULL REFERENCES users(name) ON DELETE CASCADE,
    name TEXT NOT NULL REFERENCES exercises(name),
    sets TEXT NOT NULL,
    reps TEXT NOT NULL,
    info TEXT NOT NULL,
    logId TEXT NOT NULL
    -- video TEXT NOT NULL REFERENCES exercises(video),
    -- logs INTEGER REFERENCES userDatabase(logs)
);



INSERT INTO exercises (name, prime_movers, secondaries, video) VALUES ('Pec Deck', 'Pectoralis Major(chest)', 'Anterior deltoids(shoulders)', 'https://youtube.com/shorts/kYw-bfn4sZw?feature=share');
INSERT INTO exercises (name, prime_movers, secondaries, video) VALUES ('Flat Barbell Benchpress', 'Pectoralis Major(chest)', 'Anterior deltoids(shoulders), Lateral head(tricep)', 'https://www.youtube.com/watch?v=vcBig73ojpE&ab_channel=JeffNippard');
INSERT INTO exercises (name, prime_movers, secondaries, video) VALUES ('Strict Military press', 'Anterior deltoids(shoulders)', 'Lateral head(tricep), Trapezius(upper back), Lumbar(lower back)', 'https://www.youtube.com/watch?v=mUxbYo3Im34&ab_channel=RenaissancePeriodization');
INSERT INTO exercises (name, prime_movers, secondaries, video) VALUES ('Lateral Raise', 'Lateral deltoids(shoulders)', 'Anterior deltoids(shoulders)', 'https://www.youtube.com/watch?v=fD6kaKjiy84&t=861s&ab_channel=RenaissancePeriodization');
INSERT INTO exercises (name, prime_movers, secondaries, video) VALUES ('Tricep Pushdown', 'Lateral head(tricep)', 'Long head(tricep), Medial head(tricep)', 'https://www.youtube.com/watch?v=yftl1tBWmKk&ab_channel=RenaissancePeriodization');

INSERT INTO exercises (name, prime_movers, secondaries, video) VALUES ('Pendlay Row', 'Middle Trapezius(inner back)', 'Latissimus Dorsi(lats), Rhomboids(upper back), Lumbar(lower back)', 'https://www.youtube.com/watch?v=xVFU7XSgdxI&ab_channel=RenaissancePeriodization');
INSERT INTO exercises (name, prime_movers, secondaries, video) VALUES ('Standing Cable Pullover ', 'Latissimus Dorsi(lats)', 'Rhomboids(upper back), Posterior Deltoid(upper back)', 'https://www.youtube.com/watch?v=hKrPaheywB8&ab_channel=TigerFitness');
INSERT INTO exercises (name, prime_movers, secondaries, video) VALUES ('Chin up', 'Latissiumus Dorsi(lats)', 'Biceps Brachii(Biceps), Teres Major(upper back), Rhomboids(upper back)', 'https://www.youtube.com/watch?v=brhRXlOhsAM&ab_channel=BuffDudesWorkouts');
INSERT INTO exercises (name, prime_movers, secondaries, video) VALUES ('Cable Bicep Curl', 'Biceps Brachii(biceps)', 'Brachialis(Biceps), Brachioradialis(Forearm)', 'https://www.youtube.com/watch?v=Bzd5khj44CQ&ab_channel=mountaindog1');
INSERT INTO exercises (name, prime_movers, secondaries, video) VALUES ('Below-the-knee Rack pull', 'Erector Spinae(inner back)', 'Trapezius(traps), Teres Major(upper back), Rhomboids(upper back), Latissimus Dorsi(lats)', 'https://www.youtube.com/watch?v=Uq8fmQw0V9g&ab_channel=JONNISHREVE');

INSERT INTO exercises (name, prime_movers, secondaries, video) VALUES ('Leg Extension', 'Vastus Medialis(quads)', 'Rectus Femoris(hips), Vastus Lateralis(quads), and Vastus Intermedius(quads)', 'https://www.youtube.com/watch?v=yiEDToHWs2E&ab_channel=mountaindog1');
INSERT INTO exercises (name, prime_movers, secondaries, video) VALUES ('Leg Curl', 'Bicep Femoris(hamstrings)', 'Semitendinosus(hamstrings), and Semimembranosus(hamstrings)', 'https://www.youtube.com/watch?v=jobEeklwrrs&ab_channel=RenaissancePeriodization');
INSERT INTO exercises (name, prime_movers, secondaries, video) VALUES ('High-Bar Squat', 'Quads', 'Hamstrings, and Glutes', 'https://www.youtube.com/watch?v=dW5-C1fsMjk&ab_channel=OmarIsuf');
INSERT INTO exercises (name, prime_movers, secondaries, video) VALUES ('Romanian Deadlift', 'Hamstrings', 'Glutes and Erector Spinae(posterior chain)', 'https://www.youtube.com/watch?v=Ka6GhzIfh-c&t=854s&ab_channel=RenaissancePeriodization');
INSERT INTO exercises (name, prime_movers, secondaries, video) VALUES ('Hip Thrust', 'Glutes', 'Hamstrings, Core, Quads', 'https://www.youtube.com/watch?v=xDmFkJxPzeM&ab_channel=JeffNippard');


INSERT INTO users (name) VALUES ('Drake');
INSERT INTO users (name) VALUES ('Bob');



INSERT INTO journal (username, name, sets, reps, info, logId) VALUES ('Drake', 'Leg Curl', '3', '16', 'failure', 'legs#1');
INSERT INTO journal (username, name, sets, reps, info, logId) VALUES ('Bob', 'Leg Curl', '3', '16', 'failure', 'legs#2');

