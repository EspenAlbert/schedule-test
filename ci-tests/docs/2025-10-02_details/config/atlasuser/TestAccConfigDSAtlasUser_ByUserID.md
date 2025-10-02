# config/atlasuser/TestAccConfigDSAtlasUser_ByUserID Test Details
# Found 43 TestRuns in dev, qa from 2025-09-03 to 2025-10-02 from master branch: 1 unique tests, PASS(x 42) FAIL
Success rate: 97.67%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-09-22 00:30](#error-2025-09-22t0030210000) | CheckFailure for atlas_user.test at Step: 1 Checks: 9 | dev | 0.09s

## Timeline
- 2025-09-02: MISSING
- 2025-09-03 PASS a second
- 2025-09-04 PASS a second
- 2025-09-05 PASS a second
- 2025-09-06 PASS a second
- 2025-09-07 PASS a second
- 2025-09-08
  - PASS 2 seconds
  - PASS a second
  - PASS a second
- 2025-09-09 PASS 2 seconds
- 2025-09-10 PASS a second
- 2025-09-11 PASS a second
- 2025-09-12 PASS a second
- 2025-09-13 PASS 2 seconds
- 2025-09-14 PASS a second
- 2025-09-15
  - PASS a second
  - PASS a second
- 2025-09-16 PASS a second
- 2025-09-17 PASS 4 seconds
- 2025-09-18 PASS a second
- 2025-09-19 PASS a second
- 2025-09-20 PASS 2 seconds
- 2025-09-21 PASS a second
- 2025-09-22

### Error 2025-09-22T00:30:21+00:00
```
2025-09-22T00:30:21.3126109Z === RUN   TestAccConfigDSAtlasUser_ByUserID
2025-09-22T00:30:21.3129961Z     data_source_atlas_user_test.go:23: Step 1/1 error: Check failed: Check 9/12 error: data.mongodbatlas_atlas_user.test: Attribute 'team_ids.#' expected "11", got "12"
2025-09-22T00:30:21.3130634Z --- FAIL: TestAccConfigDSAtlasUser_ByUserID (0.85s)
```

- 2025-09-23 PASS a second
- 2025-09-24 PASS a second
- 2025-09-25 PASS a second
- 2025-09-26 PASS 2 seconds
- 2025-09-27 PASS 2 seconds
- 2025-09-28 PASS a second
- 2025-09-29 PASS a second
- 2025-09-30
  - PASS a second
  - PASS a second
  - PASS a second
- 2025-10-01
  - PASS a second
  - PASS a second
  - PASS 2 seconds
  - PASS a second
  - PASS a second
  - PASS a second
  - PASS a second
  - PASS a second
  - PASS 2 seconds
- 2025-10-02 PASS a second