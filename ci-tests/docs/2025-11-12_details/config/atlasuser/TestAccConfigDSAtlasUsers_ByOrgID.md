# config/atlasuser/TestAccConfigDSAtlasUsers_ByOrgID Test Details
# Found 42 TestRuns in dev, qa from 2025-10-04 to 2025-11-12 from master branch: 1 unique tests, PASS(x 38) FAIL(x 4)
Success rate: 90.48%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-07 00:28](#error-2025-10-07t0028180000) | CheckFailure for atlas_users.test at Step: 1 Checks: 96 | dev |  | 2.03s
[2025-10-11 00:26](#error-2025-10-11t0026250000) | CheckFailure for atlas_users.test at Step: 1 Checks: 36 | dev |  | 1.10s
[2025-10-13 00:30](#error-2025-10-13t0030200000) | CheckFailure for atlas_users.test at Step: 1 Checks: 36 | dev |  | 1.10s
[2025-10-22 00:29](#error-2025-10-22t0029490000) | CheckFailure for atlas_users.test at Step: 1 Checks: 96 | dev | flaky_check | 2.01s

## Timeline
- 2025-10-03: MISSING
- 2025-10-04 PASS 3 seconds
- 2025-10-05 PASS a second
- 2025-10-06 PASS 4 seconds
- 2025-10-07

### Error 2025-10-07T00:28:18+00:00
```
2025-10-07T00:28:18.5137427Z === RUN   TestAccConfigDSAtlasUsers_ByOrgID
2025-10-07T00:28:18.5141006Z     data_source_atlas_users_test.go:28: Step 1/1 error: Check failed: Check 96/183 error: data.mongodbatlas_atlas_users.test: Attribute 'results.7.team_ids.#' expected "1", got "0"
2025-10-07T00:28:18.5141709Z --- FAIL: TestAccConfigDSAtlasUsers_ByOrgID (2.27s)
```

- 2025-10-08 PASS 4 seconds
- 2025-10-09 PASS 3 seconds
- 2025-10-10 PASS 3 seconds
- 2025-10-11

### Error 2025-10-11T00:26:25+00:00
```
2025-10-11T00:26:25.7669518Z === RUN   TestAccConfigDSAtlasUsers_ByOrgID
2025-10-11T00:26:25.7675819Z     data_source_atlas_users_test.go:28: Step 1/1 error: Check failed: Check 36/183 error: data.mongodbatlas_atlas_users.test: Attribute 'results.2.team_ids.#' expected "13", got "14"
2025-10-11T00:26:25.7677032Z --- FAIL: TestAccConfigDSAtlasUsers_ByOrgID (1.97s)
```

- 2025-10-12 PASS a second
- 2025-10-13

### Error 2025-10-13T00:30:20+00:00
```
2025-10-13T00:30:20.3614243Z === RUN   TestAccConfigDSAtlasUsers_ByOrgID
2025-10-13T00:30:20.3619802Z     data_source_atlas_users_test.go:28: Step 1/1 error: Check failed: Check 36/183 error: data.mongodbatlas_atlas_users.test: Attribute 'results.2.team_ids.#' expected "14", got "13"
2025-10-13T00:30:20.3621159Z --- FAIL: TestAccConfigDSAtlasUsers_ByOrgID (1.96s)
```

- 2025-10-14 PASS 3 seconds
- 2025-10-15 PASS 4 seconds
- 2025-10-16 PASS 3 seconds
- 2025-10-17 PASS 3 seconds
- 2025-10-18 PASS 3 seconds
- 2025-10-19 PASS a second
- 2025-10-20
  - PASS 2 seconds
  - PASS 3 seconds
- 2025-10-21 PASS 3 seconds
- 2025-10-22
  - FAIL 2 seconds

### Error 2025-10-22T00:29:49+00:00
GoTestErrorClassification(error_class='flaky_check',author='human',run_id='2025-10-22T00:29:49.208000+00:00-TestAccConfigDSAtlasUsers_ByOrgID',confidence=1.0,ts_when='21 days ago')
CheckFailure for atlas_users.test at Step: 1 Checks: 96
```
2025-10-22T00:29:49.2087982Z === RUN   TestAccConfigDSAtlasUsers_ByOrgID
2025-10-22T00:29:49.2091662Z     data_source_atlas_users_test.go:28: Step 1/1 error: Check failed: Check 96/183 error: data.mongodbatlas_atlas_users.test: Attribute 'results.7.team_ids.#' expected "1", got "0"
2025-10-22T00:29:49.2092428Z --- FAIL: TestAccConfigDSAtlasUsers_ByOrgID (2.10s)
```

  - PASS 2 seconds
- 2025-10-23 PASS 3 seconds
- 2025-10-24 PASS 4 seconds
- 2025-10-25 PASS 3 seconds
- 2025-10-26 PASS 2 seconds
- 2025-10-27 PASS 3 seconds
- 2025-10-28 PASS 2 seconds
- 2025-10-29 PASS 2 seconds
- 2025-10-30 PASS 3 seconds
- 2025-10-31 PASS 3 seconds
- 2025-11-01: MISSING
- 2025-11-02 PASS a second
- 2025-11-03 PASS 3 seconds
- 2025-11-04 PASS 3 seconds
- 2025-11-05
  - PASS 2 seconds
  - PASS 3 seconds
- 2025-11-06 PASS 3 seconds
- 2025-11-07 PASS 2 seconds
- 2025-11-08 PASS 4 seconds
- 2025-11-09 PASS a second
- 2025-11-10 PASS 3 seconds
- 2025-11-11 PASS 2 seconds
- 2025-11-12 PASS 3 seconds