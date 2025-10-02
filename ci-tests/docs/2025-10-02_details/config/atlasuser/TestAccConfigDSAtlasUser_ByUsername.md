# config/atlasuser/TestAccConfigDSAtlasUser_ByUsername Test Details
# Found 43 TestRuns in dev, qa from 2025-09-03 to 2025-10-02 from master branch: 1 unique tests, PASS(x 40) FAIL(x 3)
Success rate: 93.02%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-09-10 00:27](#error-2025-09-10t0027400000) | CheckFailure for atlas_user.test at Step: 1 Checks: 9 | dev | 0.07s
[2025-09-17 00:28](#error-2025-09-17t0028020000) | CheckFailure for atlas_user.test at Step: 1 Checks: 9 | dev | 2.01s
[2025-10-02 00:26](#error-2025-10-02t0026570000) | CheckFailure for atlas_user.test at Step: 1 Checks: 9 | dev | 0.10s

## Timeline
- 2025-09-02: MISSING
- 2025-09-03 PASS a second
- 2025-09-04 PASS a second
- 2025-09-05 PASS a second
- 2025-09-06 PASS a second
- 2025-09-07 PASS a second
- 2025-09-08
  - PASS a second
  - PASS a second
  - PASS a second
- 2025-09-09 PASS a second
- 2025-09-10

### Error 2025-09-10T00:27:40+00:00
```
2025-09-10T00:27:40.9852237Z === RUN   TestAccConfigDSAtlasUser_ByUsername
2025-09-10T00:27:40.9855929Z     data_source_atlas_user_test.go:44: Step 1/1 error: Check failed: Check 9/12 error: data.mongodbatlas_atlas_user.test: Attribute 'team_ids.#' expected "11", got "12"
2025-09-10T00:27:40.9856587Z --- FAIL: TestAccConfigDSAtlasUser_ByUsername (0.69s)
```

- 2025-09-11 PASS a second
- 2025-09-12 PASS a second
- 2025-09-13 PASS a second
- 2025-09-14 PASS a second
- 2025-09-15
  - PASS a second
  - PASS a second
- 2025-09-16 PASS a second
- 2025-09-17

### Error 2025-09-17T00:28:02+00:00
```
2025-09-17T00:28:02.1596588Z === RUN   TestAccConfigDSAtlasUser_ByUsername
2025-09-17T00:28:02.1600824Z     data_source_atlas_user_test.go:44: Step 1/1 error: Check failed: Check 9/12 error: data.mongodbatlas_atlas_user.test: Attribute 'team_ids.#' expected "12", got "11"
2025-09-17T00:28:02.1601530Z --- FAIL: TestAccConfigDSAtlasUser_ByUsername (2.09s)
```

- 2025-09-18 PASS a second
- 2025-09-19 PASS a second
- 2025-09-20 PASS a second
- 2025-09-21 PASS a second
- 2025-09-22 PASS a second
- 2025-09-23 PASS a second
- 2025-09-24 PASS a second
- 2025-09-25 PASS a second
- 2025-09-26 PASS a second
- 2025-09-27 PASS a second
- 2025-09-28 PASS a second
- 2025-09-29 PASS a second
- 2025-09-30
  - PASS a second
  - PASS a second
  - PASS a second
- 2025-10-01
  - PASS a second
  - PASS a second
  - PASS a second
  - PASS a second
  - PASS a second
  - PASS a second
  - PASS a second
  - PASS a second
  - PASS a second
- 2025-10-02

### Error 2025-10-02T00:26:57+00:00
```
2025-10-02T00:26:57.1828214Z === RUN   TestAccConfigDSAtlasUser_ByUsername
2025-10-02T00:26:57.1831912Z     data_source_atlas_user_test.go:44: Step 1/1 error: Check failed: Check 9/12 error: data.mongodbatlas_atlas_user.test: Attribute 'team_ids.#' expected "12", got "11"
2025-10-02T00:26:57.1832584Z --- FAIL: TestAccConfigDSAtlasUser_ByUsername (0.99s)
```
