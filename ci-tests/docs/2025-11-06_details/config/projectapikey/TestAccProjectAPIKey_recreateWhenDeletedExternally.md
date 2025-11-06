# config/projectapikey/TestAccProjectAPIKey_recreateWhenDeletedExternally Test Details
# Found 32 TestRuns in dev, qa from 2025-10-08 to 2025-11-06 from master branch: 1 unique tests, PASS(x 26) FAIL(x 6)
Success rate: 81.25%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-18 00:29](#error-2025-10-18t0029320000) |  | dev |  | 13.05s
[2025-10-21 00:30](#error-2025-10-21t0030480000) |  | dev | unknown | 7.06s
[2025-10-22 08:30](#error-2025-10-22t0830230000) |  | qa |  | 22.04s
[2025-10-28 00:29](#error-2025-10-28t0029580000) |  | dev |  | 12.04s
[2025-10-29 00:31](#error-2025-10-29t0031470000) |  | dev |  | 13.08s
[2025-11-05 00:31](#error-2025-11-05t0031080000) |  | dev |  | 25.02s

## Timeline
- 2025-10-07: MISSING
- 2025-10-08 PASS 9 seconds
- 2025-10-09 PASS 13 seconds
- 2025-10-10 PASS 9 seconds
- 2025-10-11 PASS 10 seconds
- 2025-10-12 PASS 9 seconds
- 2025-10-13 PASS 17 seconds
- 2025-10-14 PASS 16 seconds
- 2025-10-15 PASS 17 seconds
- 2025-10-16 PASS 18 seconds
- 2025-10-17 PASS 7 seconds
- 2025-10-18

### Error 2025-10-18T00:29:32+00:00
```
2025-10-18T00:29:32.3114728Z === RUN   TestAccProjectAPIKey_recreateWhenDeletedExternally
2025-10-18T00:29:32.3120568Z === CONT  TestAccProjectAPIKey_recreateWhenDeletedExternally
2025-10-18T00:29:32.3143144Z === NAME  TestAccProjectAPIKey_recreateWhenDeletedExternally
2025-10-18T00:29:32.3144307Z     resource_project_api_key_test.go:163: Step 2/2 error: Expected a non-empty plan, but got an empty refresh plan
2025-10-18T00:29:32.3145321Z --- FAIL: TestAccProjectAPIKey_recreateWhenDeletedExternally (13.54s)
```

- 2025-10-19 PASS 16 seconds
- 2025-10-20
  - PASS 10 seconds
  - PASS 5 seconds
- 2025-10-21

### Error 2025-10-21T00:30:48+00:00
GoTestErrorClassification(error_class='unknown',author='human',run_id='2025-10-21T00:30:48.385000+00:00-TestAccProjectAPIKey_recreateWhenDeletedExternally',confidence=1.0,ts_when='16 days ago')

```
2025-10-21T00:30:48.3856613Z === RUN   TestAccProjectAPIKey_recreateWhenDeletedExternally
2025-10-21T00:30:48.3861152Z === CONT  TestAccProjectAPIKey_recreateWhenDeletedExternally
2025-10-21T00:30:48.3871957Z === NAME  TestAccProjectAPIKey_recreateWhenDeletedExternally
2025-10-21T00:30:48.3872807Z     resource_project_api_key_test.go:163: Step 2/2 error: Expected a non-empty plan, but got an empty refresh plan
2025-10-21T00:30:48.3873390Z --- FAIL: TestAccProjectAPIKey_recreateWhenDeletedExternally (7.58s)
```

- 2025-10-22
  - PASS 22 seconds
  - FAIL 22 seconds

### Error 2025-10-22T08:30:23+00:00
```
2025-10-22T08:30:23.5321444Z === RUN   TestAccProjectAPIKey_recreateWhenDeletedExternally
2025-10-22T08:30:23.5324706Z === CONT  TestAccProjectAPIKey_recreateWhenDeletedExternally
2025-10-22T08:30:23.5338267Z === NAME  TestAccProjectAPIKey_recreateWhenDeletedExternally
2025-10-22T08:30:23.5338935Z     resource_project_api_key_test.go:164: Step 2/2 error: Expected a non-empty plan, but got an empty refresh plan
2025-10-22T08:30:23.5339927Z --- FAIL: TestAccProjectAPIKey_recreateWhenDeletedExternally (22.39s)
```

- 2025-10-23 PASS 15 seconds
- 2025-10-24 PASS 15 seconds
- 2025-10-25 PASS 11 seconds
- 2025-10-26 PASS 20 seconds
- 2025-10-27 PASS 17 seconds
- 2025-10-28

### Error 2025-10-28T00:29:58+00:00
```
2025-10-28T00:29:58.8613366Z === RUN   TestAccProjectAPIKey_recreateWhenDeletedExternally
2025-10-28T00:29:58.8617128Z === CONT  TestAccProjectAPIKey_recreateWhenDeletedExternally
2025-10-28T00:29:58.8630663Z === NAME  TestAccProjectAPIKey_recreateWhenDeletedExternally
2025-10-28T00:29:58.8631492Z     resource_project_api_key_test.go:164: Step 2/2 error: Expected a non-empty plan, but got an empty refresh plan
2025-10-28T00:29:58.8632109Z --- FAIL: TestAccProjectAPIKey_recreateWhenDeletedExternally (12.42s)
```

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
- 2025-11-02 PASS 17 seconds
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