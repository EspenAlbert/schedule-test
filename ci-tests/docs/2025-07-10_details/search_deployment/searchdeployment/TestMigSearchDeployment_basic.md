# search_deployment/searchdeployment/TestMigSearchDeployment_basic Test Details
# Found 114 TestRuns in dev, qa from 2025-04-12 to 2025-07-10 from master branch: 1 unique tests, PASS(x 102) FAIL(x 12)
Success rate: 89.47%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-04-12 00:26](#error-2025-04-12t0026180000) |  | dev |  | 1.09s
[2025-04-13 00:50](#error-2025-04-13t0050510000) |  | qa |  | 2.08s
[2025-04-14 00:27](#error-2025-04-14t0027310000) |  | dev |  | 1.07s
[2025-04-15 00:25](#error-2025-04-15t0025420000) |  | dev |  | 2.04s
[2025-04-16 00:27](#error-2025-04-16t0027080000) |  | dev |  | 1.09s
[2025-04-16 12:30](#error-2025-04-16t1230080000) |  | qa |  | 1.09s
[2025-04-16 14:15](#error-2025-04-16t1415590000) |  | dev |  | 1.08s
[2025-04-16 15:41](#error-2025-04-16t1541440000) |  | dev |  | 2.01s
[2025-04-17 00:26](#error-2025-04-17t0026530000) |  | dev |  | 3.04s
[2025-05-11 00:29](#error-2025-05-11t0029510000) |  | qa |  | 1.00s
[2025-06-04 00:29](#error-2025-06-04t0029140000) |  | dev | timeout | 11693.03s
[2025-06-05 00:28](#error-2025-06-05t0028490000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6840e4c2161ca93c1f05230b/clusters/test-acc-tf-c-7944035434391269967 | dev | flaky_500 | 184.03s

## Timeline
- 2025-04-11: MISSING
- 2025-04-12

### Error 2025-04-12T00:26:18+00:00
```
2025-04-12T00:26:18.1187174Z === RUN   TestMigSearchDeployment_basic
2025-04-12T00:26:22.1241032Z === CONT  TestMigSearchDeployment_basic
2025-04-12T00:26:23.8062108Z === NAME  TestMigSearchDeployment_basic
2025-04-12T00:26:23.8062713Z     resource_migration_test.go:22: Step 1/2 error: Error running apply: exit status 1
2025-04-12T00:26:23.8063127Z         
2025-04-12T00:26:23.8063793Z         Error: error creating advanced cluster: (400 Bad Request) failed to decode response body: undefined response type
2025-04-12T00:26:23.8064290Z         
2025-04-12T00:26:23.8064622Z           with mongodbatlas_advanced_cluster.test,
2025-04-12T00:26:23.8065299Z           on terraform_plugin_test.tf line 15, in resource "mongodbatlas_advanced_cluster" "test":
2025-04-12T00:26:23.8065899Z           15: 	resource "mongodbatlas_advanced_cluster" "test" {
2025-04-12T00:26:23.8066213Z         
2025-04-12T00:26:23.9894393Z --- FAIL: TestMigSearchDeployment_basic (1.87s)
```

- 2025-04-13

### Error 2025-04-13T00:50:51+00:00
```
2025-04-13T00:50:51.7935802Z === RUN   TestMigSearchDeployment_basic
2025-04-13T00:50:57.6960547Z === CONT  TestMigSearchDeployment_basic
2025-04-13T00:51:00.3462114Z === NAME  TestMigSearchDeployment_basic
2025-04-13T00:51:00.3462705Z     resource_migration_test.go:22: Step 1/2 error: Error running apply: exit status 1
2025-04-13T00:51:00.3463121Z         
2025-04-13T00:51:00.3463771Z         Error: error creating advanced cluster: (400 Bad Request) failed to decode response body: undefined response type
2025-04-13T00:51:00.3464479Z         
2025-04-13T00:51:00.3464808Z           with mongodbatlas_advanced_cluster.test,
2025-04-13T00:51:00.3465468Z           on terraform_plugin_test.tf line 15, in resource "mongodbatlas_advanced_cluster" "test":
2025-04-13T00:51:00.3466067Z           15: 	resource "mongodbatlas_advanced_cluster" "test" {
2025-04-13T00:51:00.3466567Z         
2025-04-13T00:51:00.5288302Z --- FAIL: TestMigSearchDeployment_basic (2.83s)
```

- 2025-04-14

### Error 2025-04-14T00:27:31+00:00
```
2025-04-14T00:27:31.0258660Z === RUN   TestMigSearchDeployment_basic
2025-04-14T00:27:34.5595320Z === CONT  TestMigSearchDeployment_basic
2025-04-14T00:27:36.0605651Z === NAME  TestMigSearchDeployment_basic
2025-04-14T00:27:36.0606624Z     resource_migration_test.go:22: Step 1/2 error: Error running apply: exit status 1
2025-04-14T00:27:36.0607303Z         
2025-04-14T00:27:36.0608425Z         Error: error creating advanced cluster: (400 Bad Request) failed to decode response body: undefined response type
2025-04-14T00:27:36.0609267Z         
2025-04-14T00:27:36.0609852Z           with mongodbatlas_advanced_cluster.test,
2025-04-14T00:27:36.0610955Z           on terraform_plugin_test.tf line 15, in resource "mongodbatlas_advanced_cluster" "test":
2025-04-14T00:27:36.0612216Z           15: 	resource "mongodbatlas_advanced_cluster" "test" {
2025-04-14T00:27:36.0613137Z         
2025-04-14T00:27:36.2401999Z --- FAIL: TestMigSearchDeployment_basic (1.68s)
```

- 2025-04-15

### Error 2025-04-15T00:25:42+00:00
```
2025-04-15T00:25:42.2860611Z === RUN   TestMigSearchDeployment_basic
2025-04-15T00:25:46.2207999Z === CONT  TestMigSearchDeployment_basic
2025-04-15T00:25:48.4730404Z === NAME  TestMigSearchDeployment_basic
2025-04-15T00:25:48.4731383Z     resource_migration_test.go:22: Step 1/2 error: Error running apply: exit status 1
2025-04-15T00:25:48.4732106Z         
2025-04-15T00:25:48.4733292Z         Error: error creating advanced cluster: (400 Bad Request) failed to decode response body: undefined response type
2025-04-15T00:25:48.4734186Z         
2025-04-15T00:25:48.4734754Z           with mongodbatlas_advanced_cluster.test,
2025-04-15T00:25:48.4735934Z           on terraform_plugin_test.tf line 15, in resource "mongodbatlas_advanced_cluster" "test":
2025-04-15T00:25:48.4737077Z           15: 	resource "mongodbatlas_advanced_cluster" "test" {
2025-04-15T00:25:48.4738575Z         
2025-04-15T00:25:48.6518787Z --- FAIL: TestMigSearchDeployment_basic (2.43s)
```

- 2025-04-16
  - FAIL a second

### Error 2025-04-16T00:27:08+00:00
```
2025-04-16T00:27:08.8029949Z === RUN   TestMigSearchDeployment_basic
2025-04-16T00:27:13.6646506Z === CONT  TestMigSearchDeployment_basic
2025-04-16T00:27:15.3474171Z === NAME  TestMigSearchDeployment_basic
2025-04-16T00:27:15.3474769Z     resource_migration_test.go:22: Step 1/2 error: Error running apply: exit status 1
2025-04-16T00:27:15.3475186Z         
2025-04-16T00:27:15.3475854Z         Error: error creating advanced cluster: (400 Bad Request) failed to decode response body: undefined response type
2025-04-16T00:27:15.3476563Z         
2025-04-16T00:27:15.3476913Z           with mongodbatlas_advanced_cluster.test,
2025-04-16T00:27:15.3477603Z           on terraform_plugin_test.tf line 15, in resource "mongodbatlas_advanced_cluster" "test":
2025-04-16T00:27:15.3478236Z           15: 	resource "mongodbatlas_advanced_cluster" "test" {
2025-04-16T00:27:15.3478757Z         
2025-04-16T00:27:15.5313699Z --- FAIL: TestMigSearchDeployment_basic (1.87s)
```

  - FAIL a second

### Error 2025-04-16T12:30:08+00:00
```
2025-04-16T12:30:08.5841157Z === RUN   TestMigSearchDeployment_basic
2025-04-16T12:30:13.4039874Z === CONT  TestMigSearchDeployment_basic
2025-04-16T12:30:15.1193844Z === NAME  TestMigSearchDeployment_basic
2025-04-16T12:30:15.1194779Z     resource_migration_test.go:22: Step 1/2 error: Error running apply: exit status 1
2025-04-16T12:30:15.1195431Z         
2025-04-16T12:30:15.1196560Z         Error: error creating advanced cluster: (400 Bad Request) failed to decode response body: undefined response type
2025-04-16T12:30:15.1197465Z         
2025-04-16T12:30:15.1198066Z           with mongodbatlas_advanced_cluster.test,
2025-04-16T12:30:15.1199266Z           on terraform_plugin_test.tf line 15, in resource "mongodbatlas_advanced_cluster" "test":
2025-04-16T12:30:15.1200666Z           15: 	resource "mongodbatlas_advanced_cluster" "test" {
2025-04-16T12:30:15.1201280Z         
2025-04-16T12:30:15.2989891Z --- FAIL: TestMigSearchDeployment_basic (1.90s)
```

  - FAIL a second

### Error 2025-04-16T14:15:59+00:00
```
2025-04-16T14:15:59.6262586Z === RUN   TestMigSearchDeployment_basic
2025-04-16T14:15:59.6264175Z === CONT  TestMigSearchDeployment_basic
2025-04-16T14:16:01.2008027Z   
2025-04-16T14:16:01.2009224Z     resource_migration_test.go:22: Step 1/2 error: Error running apply: exit status 1
2025-04-16T14:16:01.2009767Z         
2025-04-16T14:16:01.2010560Z         Error: error creating advanced cluster: (400 Bad Request) failed to decode response body: undefined response type
2025-04-16T14:16:01.2011185Z         
2025-04-16T14:16:01.2011529Z           with mongodbatlas_advanced_cluster.test,
2025-04-16T14:16:01.2012291Z           on terraform_plugin_test.tf line 15, in resource "mongodbatlas_advanced_cluster" "test":
2025-04-16T14:16:01.2012990Z           15: 	resource "mongodbatlas_advanced_cluster" "test" {
2025-04-16T14:16:01.2013372Z         
2025-04-16T14:16:01.3813029Z --- FAIL: TestMigSearchDeployment_basic (1.76s)
```

  - FAIL 2 seconds

### Error 2025-04-16T15:41:44+00:00
```
2025-04-16T15:41:44.5996963Z === RUN   TestMigSearchDeployment_basic
2025-04-16T15:41:44.5998681Z === CONT  TestMigSearchDeployment_basic
2025-04-16T15:41:46.4940104Z   
2025-04-16T15:41:46.4941340Z     resource_migration_test.go:22: Step 1/2 error: Error running apply: exit status 1
2025-04-16T15:41:46.4942083Z         
2025-04-16T15:41:46.4943268Z         Error: error creating advanced cluster: (400 Bad Request) failed to decode response body: undefined response type
2025-04-16T15:41:46.4944182Z         
2025-04-16T15:41:46.4944794Z           with mongodbatlas_advanced_cluster.test,
2025-04-16T15:41:46.4946002Z           on terraform_plugin_test.tf line 15, in resource "mongodbatlas_advanced_cluster" "test":
2025-04-16T15:41:46.4947104Z           15: 	resource "mongodbatlas_advanced_cluster" "test" {
2025-04-16T15:41:46.4947665Z         
2025-04-16T15:41:46.6806705Z --- FAIL: TestMigSearchDeployment_basic (2.08s)
```

- 2025-04-17

### Error 2025-04-17T00:26:53+00:00
```
2025-04-17T00:26:53.7421470Z === RUN   TestMigSearchDeployment_basic
2025-04-17T00:26:57.2808139Z === CONT  TestMigSearchDeployment_basic
2025-04-17T00:27:00.4462205Z === NAME  TestMigSearchDeployment_basic
2025-04-17T00:27:00.4463194Z     resource_migration_test.go:22: Step 1/2 error: Error running apply: exit status 1
2025-04-17T00:27:00.4463844Z         
2025-04-17T00:27:00.4465191Z         Error: error creating advanced cluster: (400 Bad Request) failed to decode response body: undefined response type
2025-04-17T00:27:00.4466085Z         
2025-04-17T00:27:00.4466701Z           with mongodbatlas_advanced_cluster.test,
2025-04-17T00:27:00.4467970Z           on terraform_plugin_test.tf line 15, in resource "mongodbatlas_advanced_cluster" "test":
2025-04-17T00:27:00.4469511Z           15: 	resource "mongodbatlas_advanced_cluster" "test" {
2025-04-17T00:27:00.4470095Z         
2025-04-17T00:27:00.6298538Z --- FAIL: TestMigSearchDeployment_basic (3.35s)
```

- 2025-04-18 PASS 22 minutes
- 2025-04-19 PASS 23 minutes
- 2025-04-20 PASS 25 minutes
- 2025-04-21 PASS 23 minutes
- 2025-04-22 PASS 24 minutes
- 2025-04-23 PASS 23 minutes
- 2025-04-24 PASS 22 minutes
- 2025-04-25 PASS 22 minutes
- 2025-04-26 PASS 26 minutes
- 2025-04-27 PASS 25 minutes
- 2025-04-28 PASS 20 minutes
- 2025-04-29 PASS 20 minutes
- 2025-04-30 PASS 25 minutes
- 2025-05-01
  - PASS 22 minutes
  - PASS 21 minutes
  - PASS 23 minutes
  - PASS 21 minutes
  - PASS 23 minutes
  - PASS 22 minutes
  - PASS 20 minutes
- 2025-05-02 PASS 24 minutes
- 2025-05-03 PASS 25 minutes
- 2025-05-04 PASS 22 minutes
- 2025-05-05 PASS 20 minutes
- 2025-05-06 PASS 20 minutes
- 2025-05-07 PASS 27 minutes
- 2025-05-08 PASS 23 minutes
- 2025-05-09 PASS 24 minutes
- 2025-05-10 PASS 22 minutes
- 2025-05-11

### Error 2025-05-11T00:29:51+00:00
```
2025-05-11T00:29:51.7715075Z === RUN   TestMigSearchDeployment_basic
2025-05-11T00:29:52.8057423Z     shared_resource.go:84: 
2025-05-11T00:29:52.8059055Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-05-11T00:29:52.8061767Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:84
2025-05-11T00:29:52.8063568Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:164
2025-05-11T00:29:52.8065345Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:83
2025-05-11T00:29:52.8067291Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchdeployment/resource_migration_test.go:14
2025-05-11T00:29:52.8068099Z         	Error:      	Received unexpected error:
2025-05-11T00:29:52.8068970Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:29:52.8069763Z         	Test:       	TestMigSearchDeployment_basic
2025-05-11T00:29:52.8070794Z         	Messages:   	Project creation failed: test-acc-tf-p-2502021909230445989, err: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:29:52.8071703Z --- FAIL: TestMigSearchDeployment_basic (1.03s)
```

- 2025-05-12 PASS 23 minutes
- 2025-05-13
  - PASS 24 minutes
  - PASS 23 minutes
- 2025-05-14 PASS 26 minutes
- 2025-05-15 PASS 22 minutes
- 2025-05-16 PASS 21 minutes
- 2025-05-17 PASS 22 minutes
- 2025-05-18 PASS 21 minutes
- 2025-05-19 PASS 21 minutes
- 2025-05-20 PASS 21 minutes
- 2025-05-21 PASS 22 minutes
- 2025-05-22 PASS 22 minutes
- 2025-05-23 PASS 20 minutes
- 2025-05-24 PASS 24 minutes
- 2025-05-25 PASS 25 minutes
- 2025-05-26 PASS 21 minutes
- 2025-05-27 PASS 21 minutes
- 2025-05-28
  - PASS 29 minutes
  - PASS 22 minutes
- 2025-05-29 PASS 23 minutes
- 2025-05-30 PASS an hour
- 2025-05-31 PASS 21 minutes
- 2025-06-01
  - PASS 19 minutes
  - PASS 20 minutes
  - PASS 21 minutes
  - PASS 21 minutes
  - PASS 20 minutes
  - PASS 19 minutes
- 2025-06-02
  - PASS 23 minutes
  - PASS 22 minutes
  - PASS 23 minutes
- 2025-06-03 PASS 22 minutes
- 2025-06-04

### Error 2025-06-04T00:29:14+00:00
```
2025-06-04T00:29:14.2767908Z === RUN   TestMigSearchDeployment_basic
2025-06-04T00:29:19.7152200Z === CONT  TestMigSearchDeployment_basic
2025-06-04T03:39:16.7773680Z === NAME  TestMigSearchDeployment_basic
2025-06-04T03:39:16.7774224Z     resource_migration_test.go:20: Step 1/2 error: Error running apply: exit status 1
2025-06-04T03:39:16.7774619Z         
2025-06-04T03:39:16.7774954Z         Error: error during search deployment creation
2025-06-04T03:39:16.7775252Z         
2025-06-04T03:39:16.7775585Z           with mongodbatlas_search_deployment.test,
2025-06-04T03:39:16.7776240Z           on terraform_plugin_test.tf line 47, in resource "mongodbatlas_search_deployment" "test":
2025-06-04T03:39:16.7776854Z           47: 		resource "mongodbatlas_search_deployment" "test" {
2025-06-04T03:39:16.7777167Z         
2025-06-04T03:39:16.7777606Z         timeout while waiting for state to become 'IDLE' (last state: 'UPDATING',
2025-06-04T03:39:16.7778012Z         timeout: 3h0m0s)
2025-06-04T03:44:10.7675062Z --- FAIL: TestMigSearchDeployment_basic (11693.27s)
```

- 2025-06-05

### Error 2025-06-05T00:28:49+00:00
```
2025-06-05T00:28:49.9552000Z === RUN   TestMigSearchDeployment_basic
2025-06-05T00:28:56.2183050Z === CONT  TestMigSearchDeployment_basic
2025-06-05T00:31:58.6958505Z === NAME  TestMigSearchDeployment_basic
2025-06-05T00:31:58.6959422Z     resource_migration_test.go:20: Step 1/2 error: Error running apply: exit status 1
2025-06-05T00:31:58.6960108Z         
2025-06-05T00:31:58.6963355Z         Error: error creating advanced cluster: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6840e4c2161ca93c1f05230b/clusters/test-acc-tf-c-7944035434391269967 GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-06-05T00:31:58.6965404Z         
2025-06-05T00:31:58.6966002Z           with mongodbatlas_advanced_cluster.test,
2025-06-05T00:31:58.6967175Z           on terraform_plugin_test.tf line 15, in resource "mongodbatlas_advanced_cluster" "test":
2025-06-05T00:31:58.6968203Z           15: 	resource "mongodbatlas_advanced_cluster" "test" {
2025-06-05T00:31:58.6968756Z         
2025-06-05T00:31:58.8776653Z --- FAIL: TestMigSearchDeployment_basic (184.31s)
```

- 2025-06-06 PASS 23 minutes
- 2025-06-07 PASS 22 minutes
- 2025-06-08 PASS 23 minutes
- 2025-06-09 PASS 21 minutes
- 2025-06-10 PASS 29 minutes
- 2025-06-11
  - PASS 21 minutes
  - PASS 24 minutes
- 2025-06-12 PASS 25 minutes
- 2025-06-13 PASS 24 minutes
- 2025-06-14 PASS 25 minutes
- 2025-06-15 PASS 23 minutes
- 2025-06-16 PASS 26 minutes
- 2025-06-17 PASS 24 minutes
- 2025-06-18 PASS 32 minutes
- 2025-06-19 PASS 27 minutes
- 2025-06-20 PASS 22 minutes
- 2025-06-21 PASS 24 minutes
- 2025-06-22 PASS 23 minutes
- 2025-06-23 PASS 23 minutes
- 2025-06-24 PASS 23 minutes
- 2025-06-25 PASS 23 minutes
- 2025-06-26 PASS 23 minutes
- 2025-06-27 PASS 22 minutes
- 2025-06-28 PASS 21 minutes
- 2025-06-29 PASS 24 minutes
- 2025-06-30 PASS 25 minutes
- 2025-07-01
  - PASS 20 minutes
  - PASS 23 minutes
  - PASS 19 minutes
  - PASS 21 minutes
  - PASS 22 minutes
  - PASS 21 minutes
- 2025-07-02 PASS 23 minutes
- 2025-07-03 PASS 22 minutes
- 2025-07-04 PASS 23 minutes
- 2025-07-05 PASS 21 minutes
- 2025-07-06 PASS 21 minutes
- 2025-07-07 PASS 23 minutes
- 2025-07-08 PASS 23 minutes
- 2025-07-09 PASS 26 minutes
- 2025-07-10 PASS 22 minutes