# mongodb_employee_access_grant/mongodbemployeeaccessgrant/TestMigMongoDBEmployeeAccessGrant_basic Test Details
# Found 113 TestRuns in dev, qa from 2025-04-12 to 2025-07-10 from master branch: 1 unique tests, PASS(x 110) FAIL(x 3)
Success rate: 97.35%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-04-30 09:04](#error-2025-04-30t0904090000) |  | qa |  | 675.05s
[2025-05-11 00:29](#error-2025-05-11t0029480000) |  | qa |  | 0.03s
[2025-06-05 00:28](#error-2025-06-05t0028390000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6840e4b7c939f2741325036d/clusters/test-acc-tf-c-7860941076679049197 | dev | flaky_500 | 183.03s

## Timeline
- 2025-04-11: MISSING
- 2025-04-12 PASS 8 minutes
- 2025-04-13 PASS 14 minutes
- 2025-04-14 PASS 8 minutes
- 2025-04-15 PASS 10 minutes
- 2025-04-16
  - PASS 8 minutes
  - PASS 15 minutes
- 2025-04-17 PASS 8 minutes
- 2025-04-18 PASS 11 minutes
- 2025-04-19 PASS 8 minutes
- 2025-04-20 PASS 11 minutes
- 2025-04-21 PASS 7 minutes
- 2025-04-22 PASS 9 minutes
- 2025-04-23 PASS 10 minutes
- 2025-04-24 PASS 8 minutes
- 2025-04-25 PASS 10 minutes
- 2025-04-26 PASS 10 minutes
- 2025-04-27 PASS 11 minutes
- 2025-04-28 PASS 7 minutes
- 2025-04-29 PASS 10 minutes
- 2025-04-30
  - PASS 8 minutes
  - FAIL 11 minutes

### Error 2025-04-30T09:04:09+00:00
```
2025-04-30T09:04:09.4123848Z === RUN   TestMigMongoDBEmployeeAccessGrant_basic
2025-04-30T09:04:09.4125272Z     resource_migration_test.go:11: Creating execution project: test-acc-tf-p-1610712679045367157
2025-04-30T09:04:11.2465342Z     resource_migration_test.go:11: Creating execution cluster: test-acc-tf-c-4835700682429598009
2025-04-30T09:04:11.9557490Z 2025/04/30 09:04:11 [DEBUG] Waiting for state to become: [IDLE]
2025-04-30T09:07:12.2067549Z 2025/04/30 09:07:12 [TRACE] Waiting 1m0s before next try
2025-04-30T09:08:12.3500576Z 2025/04/30 09:08:12 [TRACE] Waiting 10s before next try
2025-04-30T09:08:22.4759665Z 2025/04/30 09:08:22 [TRACE] Waiting 1m0s before next try
2025-04-30T09:09:22.6078964Z 2025/04/30 09:09:22 [TRACE] Waiting 10s before next try
2025-04-30T09:09:32.7466601Z 2025/04/30 09:09:32 [TRACE] Waiting 1m0s before next try
2025-04-30T09:10:32.8863269Z 2025/04/30 09:10:32 [TRACE] Waiting 10s before next try
2025-04-30T09:10:43.0335091Z 2025/04/30 09:10:43 [TRACE] Waiting 1m0s before next try
2025-04-30T09:11:43.1879660Z 2025/04/30 09:11:43 [TRACE] Waiting 10s before next try
2025-04-30T09:11:53.3215697Z 2025/04/30 09:11:53 [TRACE] Waiting 1m0s before next try
2025-04-30T09:12:53.4538567Z 2025/04/30 09:12:53 [TRACE] Waiting 10s before next try
2025-04-30T09:13:03.5880736Z 2025/04/30 09:13:03 [TRACE] Waiting 1m0s before next try
2025-04-30T09:14:03.7257061Z 2025/04/30 09:14:03 [TRACE] Waiting 10s before next try
2025-04-30T09:14:13.8567468Z 2025/04/30 09:14:13 [TRACE] Waiting 1m0s before next try
2025-04-30T09:15:13.9930640Z 2025/04/30 09:15:13 [TRACE] Waiting 10s before next try
2025-04-30T09:15:24.9369944Z   
2025-04-30T09:15:24.9372389Z     resource_migration_test.go:11: TestStep 1/2 running init: exit status 1
2025-04-30T09:15:24.9372801Z         
2025-04-30T09:15:24.9373101Z         Error: Failed to install provider
2025-04-30T09:15:24.9373645Z         
2025-04-30T09:15:24.9374385Z         Error while installing mongodb/mongodbatlas v1.33.0: github.com: bad response
2025-04-30T09:15:24.9374815Z         code: 400
2025-04-30T09:15:24.9604182Z --- FAIL: TestMigMongoDBEmployeeAccessGrant_basic (675.55s)
```

- 2025-05-01
  - PASS 7 minutes
  - PASS 8 minutes
  - PASS 8 minutes
  - PASS 8 minutes
  - PASS 8 minutes
  - PASS 8 minutes
  - PASS 7 minutes
- 2025-05-02 PASS 10 minutes
- 2025-05-03 PASS 8 minutes
- 2025-05-04 PASS 10 minutes
- 2025-05-05 PASS 8 minutes
- 2025-05-06 PASS 8 minutes
- 2025-05-07 PASS 11 minutes
- 2025-05-08 PASS 10 minutes
- 2025-05-09 PASS 10 minutes
- 2025-05-10 PASS 8 minutes
- 2025-05-11

### Error 2025-05-11T00:29:48+00:00
```
2025-05-11T00:29:48.7459491Z === RUN   TestMigMongoDBEmployeeAccessGrant_basic
2025-05-11T00:29:48.7463908Z     resource_migration_test.go:11: Creating execution project: test-acc-tf-p-8871394739615085391
2025-05-11T00:29:49.0263229Z     resource_migration_test.go:11: 
2025-05-11T00:29:49.0265331Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-05-11T00:29:49.0268881Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:65
2025-05-11T00:29:49.0272428Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:102
2025-05-11T00:29:49.0275571Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/mongodbemployeeaccessgrant/resource_test.go:31
2025-05-11T00:29:49.0279497Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/mongodbemployeeaccessgrant/resource_migration_test.go:11
2025-05-11T00:29:49.0280626Z         	Error:      	Received unexpected error:
2025-05-11T00:29:49.0281757Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:29:49.0282360Z         	Test:       	TestMigMongoDBEmployeeAccessGrant_basic
2025-05-11T00:29:49.0283366Z         	Messages:   	Project creation failed: test-acc-tf-p-8871394739615085391, err: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:29:49.0284066Z --- FAIL: TestMigMongoDBEmployeeAccessGrant_basic (0.28s)
```

- 2025-05-12 PASS 10 minutes
- 2025-05-13
  - PASS 11 minutes
  - PASS 8 minutes
- 2025-05-14 PASS 10 minutes
- 2025-05-15 PASS 8 minutes
- 2025-05-16 PASS 9 minutes
- 2025-05-17 PASS 8 minutes
- 2025-05-18 PASS 10 minutes
- 2025-05-19 PASS 8 minutes
- 2025-05-20 PASS 8 minutes
- 2025-05-21 PASS 7 minutes
- 2025-05-22 PASS 10 minutes
- 2025-05-23 PASS 8 minutes
- 2025-05-24 PASS 8 minutes
- 2025-05-25 PASS 11 minutes
- 2025-05-26 PASS 10 minutes
- 2025-05-27 PASS 10 minutes
- 2025-05-28
  - PASS 10 minutes
  - PASS 10 minutes
- 2025-05-29 PASS 9 minutes
- 2025-05-30 PASS 7 minutes
- 2025-05-31 PASS 8 minutes
- 2025-06-01
  - PASS 7 minutes
  - PASS 7 minutes
  - PASS 8 minutes
  - PASS 10 minutes
  - PASS 8 minutes
  - PASS 8 minutes
- 2025-06-02
  - PASS 9 minutes
  - PASS 9 minutes
  - PASS 8 minutes
- 2025-06-03 PASS 8 minutes
- 2025-06-04 PASS 8 minutes
- 2025-06-05

### Error 2025-06-05T00:28:39+00:00
```
2025-06-05T00:28:39.0714914Z === RUN   TestMigMongoDBEmployeeAccessGrant_basic
2025-06-05T00:28:39.0716351Z     resource_migration_test.go:11: Creating execution project: test-acc-tf-p-1661266421726016751
2025-06-05T00:28:41.2410100Z     resource_migration_test.go:11: Creating execution cluster: test-acc-tf-c-7860941076679049197
2025-06-05T00:28:42.1627413Z 2025/06/05 00:28:42 [DEBUG] Waiting for state to become: [IDLE]
2025-06-05T00:31:42.3226252Z     resource_migration_test.go:11: 
2025-06-05T00:31:42.3228324Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:48
2025-06-05T00:31:42.3233552Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:112
2025-06-05T00:31:42.3237236Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/mongodbemployeeaccessgrant/resource_test.go:31
2025-06-05T00:31:42.3240380Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/mongodbemployeeaccessgrant/resource_migration_test.go:11
2025-06-05T00:31:42.3241733Z         	Error:      	Received unexpected error:
2025-06-05T00:31:42.3244144Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups/6840e4b7c939f2741325036d/clusters/test-acc-tf-c-7860941076679049197 GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-06-05T00:31:42.3245690Z         	Test:       	TestMigMongoDBEmployeeAccessGrant_basic
2025-06-05T00:31:42.3247748Z         	Messages:   	Cluster creation failed: test-acc-tf-c-7860941076679049197, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6840e4b7c939f2741325036d/clusters/test-acc-tf-c-7860941076679049197 GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-06-05T00:31:42.3249636Z --- FAIL: TestMigMongoDBEmployeeAccessGrant_basic (183.25s)
```

- 2025-06-06 PASS 9 minutes
- 2025-06-07 PASS 10 minutes
- 2025-06-08 PASS 10 minutes
- 2025-06-09 PASS 8 minutes
- 2025-06-10 PASS 12 minutes
- 2025-06-11
  - PASS 8 minutes
  - PASS 10 minutes
- 2025-06-12 PASS 10 minutes
- 2025-06-13 PASS 10 minutes
- 2025-06-14 PASS 9 minutes
- 2025-06-15 PASS 11 minutes
- 2025-06-16 PASS 8 minutes
- 2025-06-17 PASS 9 minutes
- 2025-06-18 PASS 8 minutes
- 2025-06-19 PASS 14 minutes
- 2025-06-20 PASS 10 minutes
- 2025-06-21 PASS 8 minutes
- 2025-06-22 PASS 10 minutes
- 2025-06-23 PASS 7 minutes
- 2025-06-24 PASS 8 minutes
- 2025-06-25 PASS 8 minutes
- 2025-06-26 PASS 7 minutes
- 2025-06-27 PASS 8 minutes
- 2025-06-28 PASS 7 minutes
- 2025-06-29 PASS 11 minutes
- 2025-06-30 PASS 7 minutes
- 2025-07-01
  - PASS 8 minutes
  - PASS 8 minutes
  - PASS 8 minutes
  - PASS 8 minutes
  - PASS 8 minutes
  - PASS 9 minutes
- 2025-07-02 PASS 11 minutes
- 2025-07-03 PASS 8 minutes
- 2025-07-04 PASS 10 minutes
- 2025-07-05 PASS 9 minutes
- 2025-07-06 PASS 10 minutes
- 2025-07-07 PASS 8 minutes
- 2025-07-08 PASS 8 minutes
- 2025-07-09 PASS 8 minutes
- 2025-07-10 PASS 8 minutes