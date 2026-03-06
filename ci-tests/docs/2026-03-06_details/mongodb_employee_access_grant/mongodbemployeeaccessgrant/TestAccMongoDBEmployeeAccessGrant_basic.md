# mongodb_employee_access_grant/mongodbemployeeaccessgrant/TestAccMongoDBEmployeeAccessGrant_basic Test Details
# Found 33 TestRuns in dev, qa from 2026-02-04 to 2026-03-06 from master branch: 1 unique tests, PASS(x 32) FAIL
Success rate: 96.97%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-02-24 00:36](#error-2026-02-24t0036510000) |  | dev | flaky_500 | 888.08s

### Timeline
- 2026-02-04: MISSING
- 2026-02-05 PASS 13 minutes
- 2026-02-06 PASS 7 seconds
- 2026-02-07 PASS 13 minutes
- 2026-02-08: MISSING
- 2026-02-09 PASS 7 seconds
- 2026-02-10 PASS 13 minutes
- 2026-02-11 PASS 10 seconds
- 2026-02-12 PASS 15 minutes
- 2026-02-13 PASS 7 seconds
- 2026-02-14 PASS 13 minutes
- 2026-02-15: MISSING
- 2026-02-16 PASS 7 seconds
- 2026-02-17 PASS 30 minutes
- 2026-02-18 PASS 8 seconds
- 2026-02-19 PASS 18 minutes
- 2026-02-20 PASS 8 seconds
- 2026-02-21 PASS 12 minutes
- 2026-02-22: MISSING
- 2026-02-23 PASS 10 seconds
- 2026-02-24

### Error 2026-02-24T00:36:51+00:00
```
2026-02-24T00:36:51.9697863Z === RUN   TestAccMongoDBEmployeeAccessGrant_basic
2026-02-24T00:36:51.9699440Z     resource_test.go:26: Creating execution project (1): test-acc-tf-p-8327616362772473673
2026-02-24T00:36:54.5451017Z     resource_test.go:26: Creating execution cluster: test-acc-tf-c-6939881853609603848
2026-02-24T00:36:55.9742862Z 2026/02/24 00:36:55 [DEBUG] Waiting for state to become: [IDLE]
2026-02-24T00:39:56.3930247Z 2026/02/24 00:39:56 [TRACE] Waiting 1m0s before next try
2026-02-24T00:40:56.8225960Z 2026/02/24 00:40:56 [TRACE] Waiting 10s before next try
2026-02-24T00:41:07.0863735Z 2026/02/24 00:41:07 [TRACE] Waiting 1m0s before next try
2026-02-24T00:42:07.5371833Z 2026/02/24 00:42:07 [TRACE] Waiting 10s before next try
2026-02-24T00:42:17.7989654Z 2026/02/24 00:42:17 [TRACE] Waiting 1m0s before next try
2026-02-24T00:43:18.2242272Z 2026/02/24 00:43:18 [TRACE] Waiting 10s before next try
2026-02-24T00:43:28.5012342Z 2026/02/24 00:43:28 [TRACE] Waiting 1m0s before next try
2026-02-24T00:44:28.9330049Z 2026/02/24 00:44:28 [TRACE] Waiting 10s before next try
2026-02-24T00:44:39.1802218Z 2026/02/24 00:44:39 [TRACE] Waiting 1m0s before next try
2026-02-24T00:45:39.6132035Z 2026/02/24 00:45:39 [TRACE] Waiting 10s before next try
2026-02-24T00:45:49.9296473Z 2026/02/24 00:45:49 [TRACE] Waiting 1m0s before next try
2026-02-24T00:46:50.3441171Z 2026/02/24 00:46:50 [TRACE] Waiting 10s before next try
2026-02-24T00:47:00.6233598Z 2026/02/24 00:47:00 [TRACE] Waiting 1m0s before next try
2026-02-24T00:48:01.0504915Z 2026/02/24 00:48:01 [TRACE] Waiting 10s before next try
2026-02-24T00:48:11.3207357Z 2026/02/24 00:48:11 [TRACE] Waiting 1m0s before next try
2026-02-24T00:49:11.7937965Z 2026/02/24 00:49:11 [TRACE] Waiting 10s before next try
2026-02-24T00:49:23.4322178Z 2026/02/24 00:49:23 [TRACE] Waiting 1m0s before next try
2026-02-24T00:50:23.8420448Z 2026/02/24 00:50:23 [TRACE] Waiting 10s before next try
2026-02-24T00:50:35.8285430Z 2026/02/24 00:50:35 [TRACE] Waiting 1m0s before next try
2026-02-24T00:51:40.6690949Z    test_step_number=1
2026-02-24T00:51:40.6691739Z     resource_test.go:26: Step 1/5 error: Error running apply: exit status 1
2026-02-24T00:51:40.6692164Z         
2026-02-24T00:51:40.6692645Z         Error: Error setting resource mongodbatlas_mongodb_employee_access_grant
2026-02-24T00:51:40.6693076Z         
2026-02-24T00:51:40.6693728Z           with mongodbatlas_mongodb_employee_access_grant.test,
2026-02-24T00:51:40.6694572Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_mongodb_employee_access_grant" "test":
2026-02-24T00:51:40.6695409Z           12: 		resource "mongodbatlas_mongodb_employee_access_grant" "test" {
2026-02-24T00:51:40.6695817Z         
2026-02-24T00:51:40.6696294Z         (503 Service Unavailable) failed to decode response body: undefined response
2026-02-24T00:51:40.6696744Z         type
2026-02-24T00:51:40.7191343Z --- FAIL: TestAccMongoDBEmployeeAccessGrant_basic (888.75s)
```

- 2026-02-25 PASS 9 seconds
- 2026-02-26 PASS 15 minutes
- 2026-02-27 PASS 7 seconds
- 2026-02-28 PASS 13 minutes
- 2026-03-01: MISSING
- 2026-03-02 PASS 9 seconds
- 2026-03-03 PASS 13 minutes
- 2026-03-04 PASS 14 seconds
- 2026-03-05 PASS 17 minutes
- 2026-03-06 PASS 11 seconds

## QA Environment
### Timeline
- 2026-02-04 PASS 9 seconds
- 2026-02-05: MISSING
- 2026-02-06: MISSING
- 2026-02-07: MISSING
- 2026-02-08 PASS 5 seconds
- 2026-02-09: MISSING
- 2026-02-10: MISSING
- 2026-02-11: MISSING
- 2026-02-12: MISSING
- 2026-02-13: MISSING
- 2026-02-14: MISSING
- 2026-02-15 PASS 5 seconds
- 2026-02-16: MISSING
- 2026-02-17 PASS 6 seconds
- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20: MISSING
- 2026-02-21: MISSING
- 2026-02-22 PASS 6 seconds
- 2026-02-23: MISSING
- 2026-02-24: MISSING
- 2026-02-25: MISSING
- 2026-02-26: MISSING
- 2026-02-27: MISSING
- 2026-02-28: MISSING
- 2026-03-01 PASS 5 seconds
- 2026-03-02: MISSING
- 2026-03-03 PASS 5 seconds
- 2026-03-04: MISSING
- 2026-03-05: MISSING
- 2026-03-06: MISSING
