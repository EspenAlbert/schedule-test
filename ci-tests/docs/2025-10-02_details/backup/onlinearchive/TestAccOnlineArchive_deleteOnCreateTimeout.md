# backup/onlinearchive/TestAccOnlineArchive_deleteOnCreateTimeout Test Details
# Found 36 TestRuns in dev, qa from 2025-09-05 to 2025-10-02 from master branch: 1 unique tests, PASS(x 34) FAIL(x 2)
Success rate: 94.44%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-09-14 01:22](#error-2025-09-14t0122590000) |  | qa | 924.09s
[2025-09-15 09:21](#error-2025-09-15t0921250000) |  | qa | 949.08s

## Timeline
- 2025-09-02: MISSING
- 2025-09-03: MISSING
- 2025-09-04: MISSING
- 2025-09-05 PASS 16 minutes
- 2025-09-06: MISSING
- 2025-09-07: MISSING
- 2025-09-08: MISSING
- 2025-09-09: MISSING
- 2025-09-10 PASS 19 minutes
- 2025-09-11 PASS 18 minutes
- 2025-09-12 PASS 18 minutes
- 2025-09-13 PASS 18 minutes
- 2025-09-14

### Error 2025-09-14T01:22:59+00:00
```
2025-09-14T01:22:59.4443396Z === RUN   TestAccOnlineArchive_deleteOnCreateTimeout
2025-09-14T01:22:59.4448011Z === CONT  TestAccOnlineArchive_deleteOnCreateTimeout
2025-09-14T01:22:59.4457610Z === NAME  TestAccOnlineArchive_deleteOnCreateTimeout
2025-09-14T01:22:59.4459126Z     pre_check.go:32: Time before creating cluster: 2025-09-14T00:49:14.220149499Z, ProjectID: 68c610f51411d835e95b7801, Cluster name: test-acc-tf-c-4845262706824800793
2025-09-14T01:22:59.4488976Z === NAME  TestAccOnlineArchive_deleteOnCreateTimeout
2025-09-14T01:22:59.4490433Z     resource_test.go:532: Step 2/2, expected an error with pattern, no match on: Error running apply: exit status 1
2025-09-14T01:22:59.4491256Z         
2025-09-14T01:22:59.4492543Z         Error: error creating MongoDB Atlas Online Archive:: (504 Gateway Timeout) failed to decode response body: undefined response type
2025-09-14T01:22:59.4493477Z         
2025-09-14T01:22:59.4494112Z           with mongodbatlas_online_archive.users_archive,
2025-09-14T01:22:59.4495336Z           on terraform_plugin_test.tf line 42, in resource "mongodbatlas_online_archive" "users_archive":
2025-09-14T01:22:59.4496494Z           42: 	resource "mongodbatlas_online_archive" "users_archive" {
2025-09-14T01:22:59.4497238Z         
2025-09-14T01:22:59.4571026Z --- FAIL: TestAccOnlineArchive_deleteOnCreateTimeout (924.92s)
```

- 2025-09-15
  - PASS 14 minutes
  - PASS 12 minutes
  - FAIL 15 minutes

### Error 2025-09-15T09:21:25+00:00
```
2025-09-15T09:21:25.3021598Z === RUN   TestAccOnlineArchive_deleteOnCreateTimeout
2025-09-15T09:21:25.3025544Z === CONT  TestAccOnlineArchive_deleteOnCreateTimeout
2025-09-15T09:21:25.3032522Z === NAME  TestAccOnlineArchive_deleteOnCreateTimeout
2025-09-15T09:21:25.3034200Z     pre_check.go:32: Time before creating cluster: 2025-09-15T06:41:10.853960553Z, ProjectID: 68c7b4f5fe60767b7f9b57de, Cluster name: test-acc-tf-c-2705050373061961920
2025-09-15T09:21:25.3113794Z === NAME  TestAccOnlineArchive_deleteOnCreateTimeout
2025-09-15T09:21:25.3114942Z     resource_test.go:532: Step 2/2, expected an error with pattern, no match on: Error running apply: exit status 1
2025-09-15T09:21:25.3115755Z         
2025-09-15T09:21:25.3117244Z         Error: error creating MongoDB Atlas Online Archive:: (504 Gateway Timeout) failed to decode response body: undefined response type
2025-09-15T09:21:25.3118214Z         
2025-09-15T09:21:25.3118846Z           with mongodbatlas_online_archive.users_archive,
2025-09-15T09:21:25.3120269Z           on terraform_plugin_test.tf line 42, in resource "mongodbatlas_online_archive" "users_archive":
2025-09-15T09:21:25.3121425Z           42: 	resource "mongodbatlas_online_archive" "users_archive" {
2025-09-15T09:21:25.3122176Z         
2025-09-15T09:21:25.3163865Z --- FAIL: TestAccOnlineArchive_deleteOnCreateTimeout (949.81s)
```

- 2025-09-16 PASS 26 minutes
- 2025-09-17 PASS 17 minutes
- 2025-09-18 PASS 21 minutes
- 2025-09-19 PASS 14 minutes
- 2025-09-20 PASS 15 minutes
- 2025-09-21 PASS 15 minutes
- 2025-09-22 PASS 15 minutes
- 2025-09-23 PASS 16 minutes
- 2025-09-24 PASS 16 minutes
- 2025-09-25 PASS 24 minutes
- 2025-09-26 PASS 19 minutes
- 2025-09-27 PASS 16 minutes
- 2025-09-28 PASS 16 minutes
- 2025-09-29
  - PASS 49 minutes
  - PASS 12 minutes
- 2025-09-30
  - PASS 11 minutes
  - PASS 17 minutes
  - PASS 15 minutes
- 2025-10-01
  - PASS 21 minutes
  - PASS 19 minutes
  - PASS 14 minutes
  - PASS 14 minutes
  - PASS 15 minutes
  - PASS 19 minutes
  - PASS 23 minutes
  - PASS 19 minutes
- 2025-10-02 PASS 24 minutes