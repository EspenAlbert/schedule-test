# 1/provider/TestAccSTSAssumeRole_basic Test Details
# Found 96 TestRuns in dev, qa from 2025-10-08 to 2025-11-06 from master branch: 1 unique tests, PASS(x 68) SKIP(x 27) FAIL
Success rate: 98.55%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-09 00:27](#error-2025-10-09t0027090000) |  | dev | flaky_client | 5.07s

## Timeline
- 2025-10-07: MISSING
- 2025-10-08
  - PASS 11 seconds
  - PASS 8 seconds
  - PASS 11 seconds
- 2025-10-09
  - PASS 10 seconds
  - FAIL 5 seconds

### Error 2025-10-09T00:27:09+00:00
```
2025-10-09T00:27:09.0677752Z === RUN   TestAccSTSAssumeRole_basic
2025-10-09T00:27:09.0679025Z === CONT  TestAccSTSAssumeRole_basic
2025-10-09T00:27:14.6949122Z    test_terraform_path=/home/runner/work/_temp/fddb4af5-a61e-44ca-ae1f-37bdb0ee662e/terraform test_name=TestAccSTSAssumeRole_basic test_working_directory=/tmp/plugintest4211234314 test_step_number=1
2025-10-09T00:27:14.6950909Z     provider_authentication_test.go:20: Step 1/2 error: Error running pre-apply plan: exit status 1
2025-10-09T00:27:14.6951809Z         
2025-10-09T00:27:14.6953661Z         Error: error getting organizations information: Get "https://cloud-dev.mongodb.com/api/atlas/v2/orgs/64808d5f33a0c71e882ef19c": dial tcp: lookup cloud-dev.mongodb.com: i/o timeout
2025-10-09T00:27:14.6954813Z         
2025-10-09T00:27:14.6955643Z           with data.mongodbatlas_organization.test,
2025-10-09T00:27:14.6956401Z           on terraform_plugin_test.tf line 16, in data "mongodbatlas_organization" "test":
2025-10-09T00:27:14.6956985Z           16: 		data "mongodbatlas_organization" "test" {
2025-10-09T00:27:14.6957301Z         
2025-10-09T00:27:14.7189577Z --- FAIL: TestAccSTSAssumeRole_basic (5.65s)
```

  - PASS 11 seconds
- 2025-10-10
  - PASS 14 seconds
  - PASS 14 seconds
  - PASS 16 seconds
- 2025-10-11
  - PASS 11 seconds
  - PASS 11 seconds
  - PASS 9 seconds
- 2025-10-12
  - PASS 7 seconds
  - PASS 14 seconds
  - PASS 14 seconds
- 2025-10-13
  - PASS 11 seconds
  - PASS 15 seconds
  - PASS 11 seconds
- 2025-10-14
  - PASS 11 seconds
  - PASS 11 seconds
  - PASS 16 seconds
- 2025-10-15
  - PASS 11 seconds
  - PASS 13 seconds
  - PASS 17 seconds
- 2025-10-16
  - PASS 9 seconds
  - PASS 13 seconds
  - PASS 16 seconds
- 2025-10-17
  - PASS 9 seconds
  - PASS 16 seconds
  - PASS 17 seconds
- 2025-10-18
  - SKIP unknown
  - SKIP unknown
  - SKIP unknown
- 2025-10-19
  - PASS a minute
  - PASS a minute
  - PASS a minute
- 2025-10-20
  - PASS 9 seconds
  - PASS 14 seconds
  - PASS 11 seconds
  - SKIP unknown
  - SKIP unknown
  - SKIP unknown
- 2025-10-21
  - SKIP unknown
  - SKIP unknown
  - SKIP unknown
- 2025-10-22
  - PASS 11 seconds
  - PASS 10 seconds
  - PASS 14 seconds
  - PASS 8 seconds
  - PASS 8 seconds
  - PASS 13 seconds
- 2025-10-23
  - SKIP unknown
  - SKIP unknown
  - SKIP unknown
- 2025-10-24
  - PASS 10 seconds
  - PASS 15 seconds
  - PASS 15 seconds
- 2025-10-25
  - SKIP unknown
  - SKIP unknown
  - SKIP unknown
- 2025-10-26
  - PASS 9 seconds
  - PASS 12 seconds
  - PASS 13 seconds
- 2025-10-27
  - PASS 9 seconds
  - PASS 10 seconds
  - PASS 13 seconds
- 2025-10-28
  - SKIP unknown
  - SKIP unknown
  - SKIP unknown
- 2025-10-29
  - PASS 10 seconds
  - PASS 19 seconds
  - PASS 9 seconds
- 2025-10-30
  - SKIP unknown
  - SKIP unknown
  - SKIP unknown
- 2025-10-31
  - PASS 19 seconds
  - PASS 20 seconds
  - PASS 13 seconds
- 2025-11-01: MISSING
- 2025-11-02
  - PASS 18 seconds
  - PASS 14 seconds
  - PASS 12 seconds
- 2025-11-03
  - PASS 11 seconds
  - PASS 12 seconds
  - PASS 9 seconds
- 2025-11-04
  - SKIP unknown
  - SKIP unknown
  - SKIP unknown
- 2025-11-05
  - PASS 15 seconds
  - PASS 13 seconds
  - PASS 23 seconds
  - PASS 11 seconds
  - PASS 23 seconds
  - PASS 21 seconds
- 2025-11-06
  - SKIP unknown
  - SKIP unknown
  - SKIP unknown