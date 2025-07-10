# serverless/serverlessinstance/TestMigServerlessInstance_basic Test Details
# Found 113 TestRuns in dev, qa from 2025-04-12 to 2025-07-10 from master branch: 1 unique tests, PASS(x 111) FAIL(x 2)
Success rate: 98.23%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-05-11 00:29](#error-2025-05-11t0029450000) |  | qa |  | 0.02s
[2025-06-05 00:32](#error-2025-06-05t0032200000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6840e4be161ca93c1f0520d0/serverless/test-acc-tf-c-4377229699966608019 | dev | flaky_500 | 184.06s

## Timeline
- 2025-04-11: MISSING
- 2025-04-12 PASS 4 minutes
- 2025-04-13 PASS 4 minutes
- 2025-04-14 PASS 4 minutes
- 2025-04-15 PASS 4 minutes
- 2025-04-16
  - PASS 4 minutes
  - PASS 4 minutes
- 2025-04-17 PASS 4 minutes
- 2025-04-18 PASS 4 minutes
- 2025-04-19 PASS 4 minutes
- 2025-04-20 PASS 4 minutes
- 2025-04-21 PASS 4 minutes
- 2025-04-22 PASS 4 minutes
- 2025-04-23 PASS 4 minutes
- 2025-04-24 PASS 4 minutes
- 2025-04-25 PASS 4 minutes
- 2025-04-26 PASS 4 minutes
- 2025-04-27 PASS 4 minutes
- 2025-04-28 PASS 4 minutes
- 2025-04-29 PASS 4 minutes
- 2025-04-30
  - PASS 4 minutes
  - PASS 4 minutes
- 2025-05-01
  - PASS 4 minutes
  - PASS 4 minutes
  - PASS 4 minutes
  - PASS 4 minutes
  - PASS 4 minutes
  - PASS 4 minutes
  - PASS 4 minutes
- 2025-05-02 PASS 4 minutes
- 2025-05-03 PASS 4 minutes
- 2025-05-04 PASS 4 minutes
- 2025-05-05 PASS 4 minutes
- 2025-05-06 PASS 4 minutes
- 2025-05-07 PASS 4 minutes
- 2025-05-08 PASS 4 minutes
- 2025-05-09 PASS 4 minutes
- 2025-05-10 PASS 4 minutes
- 2025-05-11

### Error 2025-05-11T00:29:45+00:00
```
2025-05-11T00:29:45.1639499Z === RUN   TestMigServerlessInstance_basic
2025-05-11T00:29:45.1640808Z     resource_serverless_instance_migration_test.go:10: Creating execution project: test-acc-tf-p-1641473457397621722
2025-05-11T00:29:45.1642166Z     resource_serverless_instance_migration_test.go:10: 
2025-05-11T00:29:45.1644298Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-05-11T00:29:45.1646853Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:65
2025-05-11T00:29:45.1649715Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/serverlessinstance/resource_serverless_instance_test.go:130
2025-05-11T00:29:45.1652980Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/serverlessinstance/resource_serverless_instance_migration_test.go:10
2025-05-11T00:29:45.1654190Z         	Error:      	Received unexpected error:
2025-05-11T00:29:45.1655357Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:29:45.1655968Z         	Test:       	TestMigServerlessInstance_basic
2025-05-11T00:29:45.1657138Z         	Messages:   	Project creation failed: test-acc-tf-p-1641473457397621722, err: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:29:45.1657923Z --- FAIL: TestMigServerlessInstance_basic (0.16s)
```

- 2025-05-12 PASS 4 minutes
- 2025-05-13
  - PASS 4 minutes
  - PASS 4 minutes
- 2025-05-14 PASS 4 minutes
- 2025-05-15 PASS 4 minutes
- 2025-05-16 PASS 4 minutes
- 2025-05-17 PASS 4 minutes
- 2025-05-18 PASS 4 minutes
- 2025-05-19 PASS 4 minutes
- 2025-05-20 PASS 4 minutes
- 2025-05-21 PASS 4 minutes
- 2025-05-22 PASS 4 minutes
- 2025-05-23 PASS 4 minutes
- 2025-05-24 PASS 4 minutes
- 2025-05-25 PASS 4 minutes
- 2025-05-26 PASS 4 minutes
- 2025-05-27 PASS 4 minutes
- 2025-05-28
  - PASS 4 minutes
  - PASS 4 minutes
- 2025-05-29 PASS 4 minutes
- 2025-05-30 PASS 4 minutes
- 2025-05-31 PASS 4 minutes
- 2025-06-01
  - PASS 4 minutes
  - PASS 4 minutes
  - PASS 4 minutes
  - PASS 4 minutes
  - PASS 4 minutes
  - PASS 4 minutes
- 2025-06-02
  - PASS 4 minutes
  - PASS 4 minutes
  - PASS 4 minutes
- 2025-06-03 PASS 4 minutes
- 2025-06-04 PASS 4 minutes
- 2025-06-05

### Error 2025-06-05T00:32:20+00:00
```
2025-06-05T00:32:20.7670466Z === RUN   TestMigServerlessInstance_basic
2025-06-05T00:32:20.7671841Z     resource_serverless_instance_migration_test.go:10: Creating execution project: test-acc-tf-p-7761428512030186286
2025-06-05T00:32:20.7677279Z === CONT  TestMigServerlessInstance_basic
2025-06-05T00:32:20.7744110Z === NAME  TestMigServerlessInstance_basic
2025-06-05T00:32:20.7744711Z     resource_serverless_instance_migration_test.go:10: Step 1/2 error: Error running apply: exit status 1
2025-06-05T00:32:20.7745193Z         
2025-06-05T00:32:20.7767272Z         Error: error creating MongoDB Serverless Instance: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6840e4be161ca93c1f0520d0/serverless/test-acc-tf-c-4377229699966608019 GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-06-05T00:32:20.7768552Z         
2025-06-05T00:32:20.7768917Z           with mongodbatlas_serverless_instance.test,
2025-06-05T00:32:20.7769592Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_serverless_instance" "test":
2025-06-05T00:32:20.7770413Z           14: 	resource "mongodbatlas_serverless_instance" "test" {
2025-06-05T00:32:20.7770736Z         
2025-06-05T00:32:20.7770996Z --- FAIL: TestMigServerlessInstance_basic (184.58s)
```

- 2025-06-06 PASS 4 minutes
- 2025-06-07 PASS 4 minutes
- 2025-06-08 PASS 4 minutes
- 2025-06-09 PASS 4 minutes
- 2025-06-10 PASS 4 minutes
- 2025-06-11
  - PASS 4 minutes
  - PASS 4 minutes
- 2025-06-12 PASS 4 minutes
- 2025-06-13 PASS 4 minutes
- 2025-06-14 PASS 4 minutes
- 2025-06-15 PASS 4 minutes
- 2025-06-16 PASS 4 minutes
- 2025-06-17 PASS 4 minutes
- 2025-06-18 PASS 4 minutes
- 2025-06-19 PASS 4 minutes
- 2025-06-20 PASS 4 minutes
- 2025-06-21 PASS 4 minutes
- 2025-06-22 PASS 4 minutes
- 2025-06-23 PASS 4 minutes
- 2025-06-24 PASS 4 minutes
- 2025-06-25 PASS 4 minutes
- 2025-06-26 PASS 4 minutes
- 2025-06-27 PASS 4 minutes
- 2025-06-28 PASS 4 minutes
- 2025-06-29 PASS 4 minutes
- 2025-06-30 PASS 4 minutes
- 2025-07-01
  - PASS 4 minutes
  - PASS 4 minutes
  - PASS 4 minutes
  - PASS 4 minutes
  - PASS 4 minutes
  - PASS 4 minutes
- 2025-07-02 PASS 4 minutes
- 2025-07-03 PASS 4 minutes
- 2025-07-04 PASS 4 minutes
- 2025-07-05 PASS 4 minutes
- 2025-07-06 PASS 4 minutes
- 2025-07-07 PASS 4 minutes
- 2025-07-08 PASS 4 minutes
- 2025-07-09 PASS 4 minutes
- 2025-07-10 PASS 4 minutes