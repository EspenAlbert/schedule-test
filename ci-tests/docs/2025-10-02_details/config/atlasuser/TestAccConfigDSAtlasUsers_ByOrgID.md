# config/atlasuser/TestAccConfigDSAtlasUsers_ByOrgID Test Details
# Found 43 TestRuns in dev, qa from 2025-09-03 to 2025-10-02 from master branch: 1 unique tests, PASS(x 39) FAIL(x 4)
Success rate: 90.70%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-09-20 00:26](#error-2025-09-20t0026380000) | CheckFailure for atlas_users.test at Step: 1 Checks: 96 | dev | 1.10s
[2025-09-26 00:27](#error-2025-09-26t0027480000) | CheckFailure for atlas_users.test at Step: 1 Checks: 96 | dev | 3.00s
[2025-09-27 00:27](#error-2025-09-27t0027090000) | CheckFailure for atlas_users.test at Step: 1 Checks: 96 | dev | 2.02s
[2025-10-01 07:28](#error-2025-10-01t0728500000) | CheckFailure for atlas_users.test at Step: 1 Checks: 36 | dev | 1.06s

## Timeline
- 2025-09-02: MISSING
- 2025-09-03 PASS a second
- 2025-09-04 PASS 2 seconds
- 2025-09-05 PASS 2 seconds
- 2025-09-06 PASS 2 seconds
- 2025-09-07 PASS a second
- 2025-09-08
  - PASS 3 seconds
  - PASS a second
  - PASS 2 seconds
- 2025-09-09 PASS 3 seconds
- 2025-09-10 PASS 3 seconds
- 2025-09-11 PASS 3 seconds
- 2025-09-12 PASS 2 seconds
- 2025-09-13 PASS 3 seconds
- 2025-09-14 PASS a second
- 2025-09-15
  - PASS 2 seconds
  - PASS a second
- 2025-09-16 PASS 3 seconds
- 2025-09-17 PASS 4 seconds
- 2025-09-18 PASS 3 seconds
- 2025-09-19 PASS 3 seconds
- 2025-09-20

### Error 2025-09-20T00:26:38+00:00
```
2025-09-20T00:26:38.5053198Z === RUN   TestAccConfigDSAtlasUsers_ByOrgID
2025-09-20T00:26:38.5060059Z     data_source_atlas_users_test.go:28: Step 1/1 error: Check failed: Check 96/171 error: data.mongodbatlas_atlas_users.test: Attribute 'results.7.team_ids.#' expected "1", got "0"
2025-09-20T00:26:38.5061392Z --- FAIL: TestAccConfigDSAtlasUsers_ByOrgID (1.96s)
```

- 2025-09-21 PASS a second
- 2025-09-22 PASS 2 seconds
- 2025-09-23 PASS 2 seconds
- 2025-09-24 PASS 2 seconds
- 2025-09-25 PASS 3 seconds
- 2025-09-26

### Error 2025-09-26T00:27:48+00:00
```
2025-09-26T00:27:48.4535659Z === RUN   TestAccConfigDSAtlasUsers_ByOrgID
2025-09-26T00:27:48.4542706Z     data_source_atlas_users_test.go:28: Step 1/1 error: Check failed: Check 96/183 error: data.mongodbatlas_atlas_users.test: Attribute 'results.7.team_ids.#' expected "0", got "1"
2025-09-26T00:27:48.4543991Z --- FAIL: TestAccConfigDSAtlasUsers_ByOrgID (3.01s)
```

- 2025-09-27

### Error 2025-09-27T00:27:09+00:00
```
2025-09-27T00:27:09.2357942Z === RUN   TestAccConfigDSAtlasUsers_ByOrgID
2025-09-27T00:27:09.2364714Z     data_source_atlas_users_test.go:28: Step 1/1 error: Check failed: Check 96/183 error: data.mongodbatlas_atlas_users.test: Attribute 'results.7.team_ids.#' expected "1", got "0"
2025-09-27T00:27:09.2366044Z --- FAIL: TestAccConfigDSAtlasUsers_ByOrgID (2.23s)
```

- 2025-09-28 PASS a second
- 2025-09-29 PASS 2 seconds
- 2025-09-30
  - PASS 2 seconds
  - PASS 2 seconds
  - PASS 3 seconds
- 2025-10-01
  - PASS 3 seconds
  - PASS 2 seconds
  - PASS 3 seconds
  - FAIL a second

### Error 2025-10-01T07:28:50+00:00
```
2025-10-01T07:28:50.0335175Z === RUN   TestAccConfigDSAtlasUsers_ByOrgID
2025-10-01T07:28:50.0342414Z     data_source_atlas_users_test.go:28: Step 1/1 error: Check failed: Check 36/183 error: data.mongodbatlas_atlas_users.test: Attribute 'results.2.team_ids.#' expected "11", got "12"
2025-10-01T07:28:50.0343801Z --- FAIL: TestAccConfigDSAtlasUsers_ByOrgID (1.59s)
```

  - PASS 3 seconds
  - PASS 2 seconds
  - PASS 3 seconds
  - PASS 2 seconds
  - PASS 2 seconds
- 2025-10-02 PASS 2 seconds