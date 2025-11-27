# config/projectapikey/TestAccProjectAPIKey_recreateWhenDeletedExternally Test Details
# Found 31 TestRuns in dev, qa from 2025-10-29 to 2025-11-27 from master branch: 1 unique tests, PASS(x 26) FAIL(x 5)
Success rate: 83.87%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-29 00:31](#error-2025-10-29t0031470000) |  | dev |  | 13.08s
[2025-11-05 00:31](#error-2025-11-05t0031080000) |  | dev |  | 25.02s
[2025-11-12 00:30](#error-2025-11-12t0030550000) |  | dev | flaky_check | 8.02s
[2025-11-15 00:29](#error-2025-11-15t0029530000) |  | dev |  | 7.08s

### Timeline
- 2025-10-28: MISSING
- 2025-10-29

### Error 2025-10-29T00:31:47+00:00
```
2025-10-29T00:31:47.5606299Z === RUN   TestAccProjectAPIKey_recreateWhenDeletedExternally
2025-10-29T00:31:47.5609645Z === CONT  TestAccProjectAPIKey_recreateWhenDeletedExternally
2025-10-29T00:31:47.5623223Z === NAME  TestAccProjectAPIKey_recreateWhenDeletedExternally
2025-10-29T00:31:47.5624069Z     resource_project_api_key_test.go:164: Step 2/2 error: Expected a non-empty plan, but got an empty refresh plan
2025-10-29T00:31:47.5624672Z --- FAIL: TestAccProjectAPIKey_recreateWhenDeletedExternally (13.81s)
```

- 2025-10-30 PASS 15 seconds
- 2025-10-31 PASS 14 seconds
- 2025-11-01: MISSING
- 2025-11-02: MISSING
- 2025-11-03 PASS 11 seconds
- 2025-11-04 PASS 12 seconds
- 2025-11-05
  - FAIL 25 seconds

### Error 2025-11-05T00:31:08+00:00
```
2025-11-05T00:31:08.0751681Z === RUN   TestAccProjectAPIKey_recreateWhenDeletedExternally
2025-11-05T00:31:08.0756987Z === CONT  TestAccProjectAPIKey_recreateWhenDeletedExternally
2025-11-05T00:31:08.0770726Z === NAME  TestAccProjectAPIKey_recreateWhenDeletedExternally
2025-11-05T00:31:08.0771685Z     resource_project_api_key_test.go:164: Step 2/2 error: Expected a non-empty plan, but got an empty refresh plan
2025-11-05T00:31:08.0772287Z --- FAIL: TestAccProjectAPIKey_recreateWhenDeletedExternally (25.25s)
```

  - PASS 16 seconds
- 2025-11-06 PASS 7 seconds
- 2025-11-07 PASS 8 seconds
- 2025-11-08 PASS 6 seconds
- 2025-11-09: MISSING
- 2025-11-10 PASS 10 seconds
- 2025-11-11 PASS 6 seconds
- 2025-11-12

### Error 2025-11-12T00:30:55+00:00
GoTestErrorClassification(error_class='flaky_check',author='human',run_id='2025-11-12T00:30:55.683000+00:00-TestAccProjectAPIKey_recreateWhenDeletedExternally',confidence=1.0,ts_when='15 days ago')

```
2025-11-12T00:30:55.6835550Z === RUN   TestAccProjectAPIKey_recreateWhenDeletedExternally
2025-11-12T00:30:55.6843115Z === CONT  TestAccProjectAPIKey_recreateWhenDeletedExternally
2025-11-12T00:30:55.6862963Z === NAME  TestAccProjectAPIKey_recreateWhenDeletedExternally
2025-11-12T00:30:55.6864129Z     resource_project_api_key_test.go:164: Step 2/2 error: Expected a non-empty plan, but got an empty refresh plan
2025-11-12T00:30:55.6865133Z --- FAIL: TestAccProjectAPIKey_recreateWhenDeletedExternally (8.17s)
```

- 2025-11-13 PASS 9 seconds
- 2025-11-14 PASS 8 seconds
- 2025-11-15

### Error 2025-11-15T00:29:53+00:00
```
2025-11-15T00:29:53.3066645Z === RUN   TestAccProjectAPIKey_recreateWhenDeletedExternally
2025-11-15T00:29:53.3075011Z === CONT  TestAccProjectAPIKey_recreateWhenDeletedExternally
2025-11-15T00:29:53.3095273Z === NAME  TestAccProjectAPIKey_recreateWhenDeletedExternally
2025-11-15T00:29:53.3096533Z     resource_project_api_key_test.go:164: Step 2/2 error: Expected a non-empty plan, but got an empty refresh plan
2025-11-15T00:29:53.3097615Z --- FAIL: TestAccProjectAPIKey_recreateWhenDeletedExternally (7.85s)
```

- 2025-11-16: MISSING
- 2025-11-17 PASS 9 seconds
- 2025-11-18 PASS 6 seconds
- 2025-11-19 PASS 8 seconds
- 2025-11-20 PASS 8 seconds
- 2025-11-21 PASS 16 seconds
- 2025-11-22 PASS 6 seconds
- 2025-11-23: MISSING
- 2025-11-24 PASS 8 seconds
- 2025-11-25 PASS 6 seconds
- 2025-11-26 PASS 10 seconds
- 2025-11-27 PASS 6 seconds

## QA Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-11-16 00:32](#error-2025-11-16t0032430000) |  | qa | 6.07s

### Timeline
- 2025-10-28: MISSING
- 2025-10-29: MISSING
- 2025-10-30: MISSING
- 2025-10-31: MISSING
- 2025-11-01: MISSING
- 2025-11-02 PASS 17 seconds
- 2025-11-03: MISSING
- 2025-11-04: MISSING
- 2025-11-05: MISSING
- 2025-11-06: MISSING
- 2025-11-07: MISSING
- 2025-11-08: MISSING
- 2025-11-09 PASS 10 seconds
- 2025-11-10: MISSING
- 2025-11-11: MISSING
- 2025-11-12: MISSING
- 2025-11-13 PASS 15 seconds
- 2025-11-14: MISSING
- 2025-11-15: MISSING
- 2025-11-16

### Error 2025-11-16T00:32:43+00:00
```
2025-11-16T00:32:43.3050411Z === RUN   TestAccProjectAPIKey_recreateWhenDeletedExternally
2025-11-16T00:32:43.3056211Z === CONT  TestAccProjectAPIKey_recreateWhenDeletedExternally
2025-11-16T00:32:43.3078807Z === NAME  TestAccProjectAPIKey_recreateWhenDeletedExternally
2025-11-16T00:32:43.3080021Z     resource_project_api_key_test.go:164: Step 2/2 error: Expected a non-empty plan, but got an empty refresh plan
2025-11-16T00:32:43.3081059Z --- FAIL: TestAccProjectAPIKey_recreateWhenDeletedExternally (6.70s)
```

- 2025-11-17: MISSING
- 2025-11-18: MISSING
- 2025-11-19: MISSING
- 2025-11-20: MISSING
- 2025-11-21: MISSING
- 2025-11-22: MISSING
- 2025-11-23 PASS 14 seconds
- 2025-11-24: MISSING
- 2025-11-25: MISSING
- 2025-11-26: MISSING
- 2025-11-27: MISSING
