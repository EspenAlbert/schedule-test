# search_deployment/searchdeployment/TestMigSearchDeployment_basic Test Details
# Found 38 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 34) FAIL(x 4)
Success rate: 89.47%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-08-15 00:30](#error-2025-08-15t0030130000) |  | dev | 4.03s
[2025-08-22 00:27](#error-2025-08-22t0027450000) |  | dev | 4.05s
[2025-08-29 00:27](#error-2025-08-29t0027320000) |  | dev | 3.04s
[2025-09-01 00:30](#error-2025-09-01t0030200000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 0.03s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 38 minutes
- 2025-08-07 PASS 50 minutes
- 2025-08-08 PASS 42 minutes
- 2025-08-09 PASS 39 minutes
- 2025-08-10 PASS 42 minutes
- 2025-08-11 PASS an hour
- 2025-08-12 PASS 35 minutes
- 2025-08-13 PASS 44 minutes
- 2025-08-14 PASS 35 minutes
- 2025-08-15

### Error 2025-08-15T00:30:13+00:00
```
2025-08-15T00:30:13.2074101Z === RUN   TestMigSearchDeployment_basic
2025-08-15T00:30:19.8509198Z === CONT  TestMigSearchDeployment_basic
2025-08-15T00:30:20.9679522Z === NAME  TestMigSearchDeployment_basic
2025-08-15T00:30:20.9680615Z     resource_migration_test.go:20: Step 1/2 error: Error running pre-apply plan: exit status 1
2025-08-15T00:30:20.9681343Z         
2025-08-15T00:30:20.9681914Z         Error: Insufficient replication_specs blocks
2025-08-15T00:30:20.9682430Z         
2025-08-15T00:30:20.9683427Z           on terraform_plugin_test.tf line 15, in resource "mongodbatlas_advanced_cluster" "test":
2025-08-15T00:30:20.9684542Z           15: 	resource "mongodbatlas_advanced_cluster" "test" {
2025-08-15T00:30:20.9685088Z         
2025-08-15T00:30:20.9685808Z         At least 1 "replication_specs" blocks are required.
2025-08-15T00:30:20.9686295Z         
2025-08-15T00:30:20.9686703Z         Error: Unsupported argument
2025-08-15T00:30:20.9687110Z         
2025-08-15T00:30:20.9687993Z           on terraform_plugin_test.tf line 20, in resource "mongodbatlas_advanced_cluster" "test":
2025-08-15T00:30:20.9688801Z           20: 		replication_specs = [{
2025-08-15T00:30:20.9689214Z         
2025-08-15T00:30:20.9689951Z         An argument named "replication_specs" is not expected here. Did you mean to
2025-08-15T00:30:20.9690754Z         define a block of type "replication_specs"?
2025-08-15T00:30:21.0609022Z --- FAIL: TestMigSearchDeployment_basic (4.32s)
```

- 2025-08-16 PASS an hour
- 2025-08-17 PASS 49 minutes
- 2025-08-18 PASS 36 minutes
- 2025-08-19 PASS 35 minutes
- 2025-08-20
  - PASS 39 minutes
  - PASS 33 minutes
- 2025-08-21 PASS 32 minutes
- 2025-08-22

### Error 2025-08-22T00:27:45+00:00
```
2025-08-22T00:27:45.2346558Z === RUN   TestMigSearchDeployment_basic
2025-08-22T00:27:52.5939064Z === CONT  TestMigSearchDeployment_basic
2025-08-22T00:27:54.0540450Z === NAME  TestMigSearchDeployment_basic
2025-08-22T00:27:54.0541044Z     resource_migration_test.go:20: Step 1/2 error: Error running pre-apply plan: exit status 1
2025-08-22T00:27:54.0541490Z         
2025-08-22T00:27:54.0541806Z         Error: Insufficient replication_specs blocks
2025-08-22T00:27:54.0542088Z         
2025-08-22T00:27:54.0542615Z           on terraform_plugin_test.tf line 15, in resource "mongodbatlas_advanced_cluster" "test":
2025-08-22T00:27:54.0543196Z           15: 	resource "mongodbatlas_advanced_cluster" "test" {
2025-08-22T00:27:54.0543493Z         
2025-08-22T00:27:54.0543827Z         At least 1 "replication_specs" blocks are required.
2025-08-22T00:27:54.0544116Z         
2025-08-22T00:27:54.0544376Z         Error: Unsupported argument
2025-08-22T00:27:54.0544624Z         
2025-08-22T00:27:54.0545140Z           on terraform_plugin_test.tf line 20, in resource "mongodbatlas_advanced_cluster" "test":
2025-08-22T00:27:54.0545614Z           20: 		replication_specs = [{
2025-08-22T00:27:54.0545864Z         
2025-08-22T00:27:54.0546296Z         An argument named "replication_specs" is not expected here. Did you mean to
2025-08-22T00:27:54.0546783Z         define a block of type "replication_specs"?
2025-08-22T00:27:54.1441800Z --- FAIL: TestMigSearchDeployment_basic (4.52s)
```

- 2025-08-23 PASS 43 minutes
- 2025-08-24 PASS 25 minutes
- 2025-08-25 PASS 37 minutes
- 2025-08-26 PASS 42 minutes
- 2025-08-27 PASS 38 minutes
- 2025-08-28 PASS 38 minutes
- 2025-08-29

### Error 2025-08-29T00:27:32+00:00
```
2025-08-29T00:27:32.0168784Z === RUN   TestMigSearchDeployment_basic
2025-08-29T00:27:36.2804105Z === CONT  TestMigSearchDeployment_basic
2025-08-29T00:27:37.5302760Z === NAME  TestMigSearchDeployment_basic
2025-08-29T00:27:37.5303801Z     resource_migration_test.go:20: Step 1/2 error: Error running pre-apply plan: exit status 1
2025-08-29T00:27:37.5304537Z         
2025-08-29T00:27:37.5305137Z         Error: Insufficient replication_specs blocks
2025-08-29T00:27:37.5305904Z         
2025-08-29T00:27:37.5306935Z           on terraform_plugin_test.tf line 15, in resource "mongodbatlas_advanced_cluster" "test":
2025-08-29T00:27:37.5308071Z           15: 	resource "mongodbatlas_advanced_cluster" "test" {
2025-08-29T00:27:37.5308643Z         
2025-08-29T00:27:37.5309250Z         At least 1 "replication_specs" blocks are required.
2025-08-29T00:27:37.5309801Z         
2025-08-29T00:27:37.5310277Z         Error: Unsupported argument
2025-08-29T00:27:37.5310729Z         
2025-08-29T00:27:37.5311719Z           on terraform_plugin_test.tf line 20, in resource "mongodbatlas_advanced_cluster" "test":
2025-08-29T00:27:37.5312595Z           20: 		replication_specs = [{
2025-08-29T00:27:37.5313042Z         
2025-08-29T00:27:37.5313862Z         An argument named "replication_specs" is not expected here. Did you mean to
2025-08-29T00:27:37.5314762Z         define a block of type "replication_specs"?
2025-08-29T00:27:37.6163923Z --- FAIL: TestMigSearchDeployment_basic (3.36s)
```

- 2025-08-30 PASS 37 minutes
- 2025-08-31 PASS 30 minutes
- 2025-09-01
  - FAIL a moment

### Error 2025-09-01T00:30:20+00:00
```
2025-09-01T00:30:20.6488480Z === RUN   TestMigSearchDeployment_basic
2025-09-01T00:30:20.9835707Z     shared_resource.go:93: 
2025-09-01T00:30:20.9837376Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-09-01T00:30:20.9839752Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:93
2025-09-01T00:30:20.9842052Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:212
2025-09-01T00:30:20.9844092Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:92
2025-09-01T00:30:20.9846321Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:103
2025-09-01T00:30:20.9848956Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchdeployment/resource_migration_test.go:14
2025-09-01T00:30:20.9849910Z         	Error:      	Received unexpected error:
2025-09-01T00:30:20.9852666Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:20.9853926Z         	Test:       	TestMigSearchDeployment_basic
2025-09-01T00:30:20.9856131Z         	Messages:   	Project creation failed: test-acc-tf-p-34901809648831557, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:20.9857498Z --- FAIL: TestMigSearchDeployment_basic (0.33s)
```

  - PASS an hour
  - PASS an hour
  - PASS 32 minutes
  - PASS 29 minutes
  - PASS 32 minutes
  - PASS 34 minutes
  - PASS 33 minutes
- 2025-09-02 PASS 38 minutes
- 2025-09-03 PASS 49 minutes
- 2025-09-04 PASS 41 minutes