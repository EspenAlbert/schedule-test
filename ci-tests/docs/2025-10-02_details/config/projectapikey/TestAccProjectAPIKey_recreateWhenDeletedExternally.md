# config/projectapikey/TestAccProjectAPIKey_recreateWhenDeletedExternally Test Details
# Found 43 TestRuns in dev, qa from 2025-09-03 to 2025-10-02 from master branch: 1 unique tests, PASS(x 40) FAIL(x 3)
Success rate: 93.02%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-09-14 00:31](#error-2025-09-14t0031200000) |  | qa | 8.01s
[2025-10-01 09:12](#error-2025-10-01t0912200000) |  | dev | 7.02s
[2025-10-01 14:17](#error-2025-10-01t1417320000) |  | dev | 11.09s

## Timeline
- 2025-09-02: MISSING
- 2025-09-03 PASS 8 seconds
- 2025-09-04 PASS 11 seconds
- 2025-09-05 PASS 8 seconds
- 2025-09-06 PASS 10 seconds
- 2025-09-07 PASS 6 seconds
- 2025-09-08
  - PASS 16 seconds
  - PASS 16 seconds
  - PASS 13 seconds
- 2025-09-09 PASS 16 seconds
- 2025-09-10 PASS 6 seconds
- 2025-09-11 PASS 10 seconds
- 2025-09-12 PASS 8 seconds
- 2025-09-13 PASS 17 seconds
- 2025-09-14

### Error 2025-09-14T00:31:20+00:00
```
2025-09-14T00:31:20.4736940Z === RUN   TestAccProjectAPIKey_recreateWhenDeletedExternally
2025-09-14T00:31:20.4741106Z === CONT  TestAccProjectAPIKey_recreateWhenDeletedExternally
2025-09-14T00:31:20.4756142Z === NAME  TestAccProjectAPIKey_recreateWhenDeletedExternally
2025-09-14T00:31:20.4756961Z     resource_project_api_key_test.go:163: Step 2/2 error: Expected a non-empty plan, but got an empty refresh plan
2025-09-14T00:31:20.4757788Z --- FAIL: TestAccProjectAPIKey_recreateWhenDeletedExternally (8.13s)
```

- 2025-09-15
  - PASS 6 seconds
  - PASS 8 seconds
- 2025-09-16 PASS 8 seconds
- 2025-09-17 PASS 19 seconds
- 2025-09-18 PASS 14 seconds
- 2025-09-19 PASS 11 seconds
- 2025-09-20 PASS 16 seconds
- 2025-09-21 PASS 12 seconds
- 2025-09-22 PASS 6 seconds
- 2025-09-23 PASS 7 seconds
- 2025-09-24 PASS 10 seconds
- 2025-09-25 PASS 15 seconds
- 2025-09-26 PASS 13 seconds
- 2025-09-27 PASS 15 seconds
- 2025-09-28 PASS 7 seconds
- 2025-09-29 PASS 8 seconds
- 2025-09-30
  - PASS 9 seconds
  - PASS 14 seconds
  - PASS 7 seconds
- 2025-10-01
  - PASS 7 seconds
  - PASS 7 seconds
  - PASS 11 seconds
  - PASS 6 seconds
  - FAIL 7 seconds

### Error 2025-10-01T09:12:20+00:00
```
2025-10-01T09:12:20.7755642Z === RUN   TestAccProjectAPIKey_recreateWhenDeletedExternally
2025-10-01T09:12:20.7760143Z === CONT  TestAccProjectAPIKey_recreateWhenDeletedExternally
2025-10-01T09:12:20.7771620Z === NAME  TestAccProjectAPIKey_recreateWhenDeletedExternally
2025-10-01T09:12:20.7772293Z     resource_project_api_key_test.go:163: Step 2/2 error: Expected a non-empty plan, but got an empty refresh plan
2025-10-01T09:12:20.7772876Z --- FAIL: TestAccProjectAPIKey_recreateWhenDeletedExternally (7.17s)
```

  - PASS 8 seconds
  - PASS 9 seconds
  - FAIL 11 seconds

### Error 2025-10-01T14:17:32+00:00
```
2025-10-01T14:17:32.6918966Z === RUN   TestAccProjectAPIKey_recreateWhenDeletedExternally
2025-10-01T14:17:32.6922623Z === CONT  TestAccProjectAPIKey_recreateWhenDeletedExternally
2025-10-01T14:17:32.6935811Z === NAME  TestAccProjectAPIKey_recreateWhenDeletedExternally
2025-10-01T14:17:32.6936508Z     resource_project_api_key_test.go:163: Step 2/2 error: Expected a non-empty plan, but got an empty refresh plan
2025-10-01T14:17:32.6937210Z --- FAIL: TestAccProjectAPIKey_recreateWhenDeletedExternally (11.85s)
```

  - PASS 7 seconds
- 2025-10-02 PASS 16 seconds