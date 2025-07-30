# push_based_log_export/pushbasedlogexport/TestMigPushBasedLogExport_noPrefixPath Test Details
# Found 37 TestRuns in dev, qa from 2025-07-01 to 2025-07-30 from master branch: 1 unique tests, PASS(x 36) FAIL
Success rate: 97.30%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-07-29 00:34](#error-2025-07-29t0034190000) |  | dev | flaky_500 | 7.05s

## Timeline
- 2025-06-30: MISSING
- 2025-07-01
  - PASS a minute
  - PASS a minute
  - PASS a minute
  - PASS a minute
  - PASS a minute
  - PASS a minute
- 2025-07-02 PASS a minute
- 2025-07-03 PASS a minute
- 2025-07-04 PASS a minute
- 2025-07-05 PASS a minute
- 2025-07-06 PASS a minute
- 2025-07-07 PASS a minute
- 2025-07-08 PASS a minute
- 2025-07-09 PASS a minute
- 2025-07-10
  - PASS a minute
  - PASS a minute
- 2025-07-11 PASS a minute
- 2025-07-12 PASS a minute
- 2025-07-13 PASS a minute
- 2025-07-14 PASS a minute
- 2025-07-15 PASS a minute
- 2025-07-16 PASS a minute
- 2025-07-17 PASS a minute
- 2025-07-18 PASS a minute
- 2025-07-19 PASS a minute
- 2025-07-20 PASS a minute
- 2025-07-21 PASS a minute
- 2025-07-22 PASS a minute
- 2025-07-23
  - PASS a minute
  - PASS a minute
- 2025-07-24 PASS a minute
- 2025-07-25 PASS a minute
- 2025-07-26 PASS a minute
- 2025-07-27 PASS a minute
- 2025-07-28 PASS a minute
- 2025-07-29

### Error 2025-07-29T00:34:19+00:00
```
2025-07-29T00:34:19.7682101Z === RUN   TestMigPushBasedLogExport_noPrefixPath
2025-07-29T00:34:27.1779836Z   
2025-07-29T00:34:27.1780312Z     resource_migration_test.go:16: TestStep 1/2 running init: exit status 1
2025-07-29T00:34:27.1780712Z         
2025-07-29T00:34:27.1781010Z         Error: Failed to install provider
2025-07-29T00:34:27.1781292Z         
2025-07-29T00:34:27.1782044Z         Error while installing mongodb/mongodbatlas v1.39.0: could not query provider
2025-07-29T00:34:27.1782729Z         registry for registry.terraform.io/mongodb/mongodbatlas: failed to retrieve
2025-07-29T00:34:27.1783369Z         authentication checksums for provider: the request failed after 2 attempts,
2025-07-29T00:34:27.1783990Z         please try again later: 503 Service Unavailable returned from github.com
2025-07-29T00:34:27.2700609Z --- FAIL: TestMigPushBasedLogExport_noPrefixPath (7.50s)
```

- 2025-07-30 PASS a minute