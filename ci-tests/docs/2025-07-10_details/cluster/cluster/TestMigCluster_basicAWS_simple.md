# cluster/cluster/TestMigCluster_basicAWS_simple Test Details
# Found 116 TestRuns in dev, qa from 2025-04-12 to 2025-07-10 from master branch: 1 unique tests, PASS(x 114) FAIL(x 2)
Success rate: 98.28%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-05-11 00:29](#error-2025-05-11t0029400000) |  | qa |  | 0.03s
[2025-06-05 00:28](#error-2025-06-05t0028410000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6840e4b9161ca93c1f051d05/clusters/test-acc-tf-c-6598977791839237609 | dev | flaky_500 | 191.02s

## Timeline
- 2025-04-11: MISSING
- 2025-04-12 PASS 10 minutes
- 2025-04-13 PASS 12 minutes
- 2025-04-14 PASS 10 minutes
- 2025-04-15 PASS 10 minutes
- 2025-04-16
  - PASS 10 minutes
  - PASS 11 minutes
- 2025-04-17 PASS 13 minutes
- 2025-04-18 PASS 11 minutes
- 2025-04-19 PASS 10 minutes
- 2025-04-20 PASS 11 minutes
- 2025-04-21 PASS 12 minutes
- 2025-04-22 PASS 11 minutes
- 2025-04-23 PASS 13 minutes
- 2025-04-24 PASS 11 minutes
- 2025-04-25 PASS 10 minutes
- 2025-04-26 PASS 10 minutes
- 2025-04-27 PASS 11 minutes
- 2025-04-28 PASS 9 minutes
- 2025-04-29 PASS 15 minutes
- 2025-04-30 PASS 11 minutes
- 2025-05-01
  - PASS 12 minutes
  - PASS 11 minutes
  - PASS 9 minutes
  - PASS 10 minutes
  - PASS 12 minutes
  - PASS 10 minutes
  - PASS 11 minutes
- 2025-05-02 PASS 10 minutes
- 2025-05-03 PASS 11 minutes
- 2025-05-04 PASS 11 minutes
- 2025-05-05 PASS 10 minutes
- 2025-05-06 PASS 13 minutes
- 2025-05-07 PASS 10 minutes
- 2025-05-08 PASS 11 minutes
- 2025-05-09 PASS 13 minutes
- 2025-05-10 PASS 10 minutes
- 2025-05-11

### Error 2025-05-11T00:29:40+00:00
```
2025-05-11T00:29:40.0153371Z === RUN   TestMigCluster_basicAWS_simple
2025-05-11T00:29:40.2811107Z     shared_resource.go:84: 
2025-05-11T00:29:40.2812884Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-05-11T00:29:40.2816863Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:84
2025-05-11T00:29:40.2818634Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:164
2025-05-11T00:29:40.2820347Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:83
2025-05-11T00:29:40.2822132Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cluster/resource_cluster_test.go:33
2025-05-11T00:29:40.2824041Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cluster/resource_cluster_migration_test.go:10
2025-05-11T00:29:40.2824828Z         	Error:      	Received unexpected error:
2025-05-11T00:29:40.2825949Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:29:40.2826678Z         	Test:       	TestMigCluster_basicAWS_simple
2025-05-11T00:29:40.2827683Z         	Messages:   	Project creation failed: test-acc-tf-p-4696523636913177299, err: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:29:40.2828368Z --- FAIL: TestMigCluster_basicAWS_simple (0.27s)
```

- 2025-05-12 PASS 11 minutes
- 2025-05-13
  - PASS 11 minutes
  - PASS 10 minutes
- 2025-05-14 PASS 21 minutes
- 2025-05-15 PASS 11 minutes
- 2025-05-16 PASS 11 minutes
- 2025-05-17 PASS 11 minutes
- 2025-05-18 PASS 10 minutes
- 2025-05-19 PASS 11 minutes
- 2025-05-20 PASS 14 minutes
- 2025-05-21 PASS 10 minutes
- 2025-05-22 PASS 15 minutes
- 2025-05-23 PASS 23 minutes
- 2025-05-24 PASS 12 minutes
- 2025-05-25 PASS 11 minutes
- 2025-05-26 PASS 14 minutes
- 2025-05-27 PASS 11 minutes
- 2025-05-28
  - PASS 17 minutes
  - PASS 11 minutes
  - PASS 11 minutes
  - PASS 11 minutes
- 2025-05-29
  - PASS 12 minutes
  - PASS 11 minutes
- 2025-05-30
  - PASS 12 minutes
  - PASS 11 minutes
- 2025-05-31 PASS 11 minutes
- 2025-06-01
  - PASS 11 minutes
  - PASS 12 minutes
  - PASS 11 minutes
  - PASS 11 minutes
  - PASS 10 minutes
  - PASS 10 minutes
- 2025-06-02
  - PASS 13 minutes
  - PASS 13 minutes
  - PASS 10 minutes
- 2025-06-03 PASS 13 minutes
- 2025-06-04 PASS 14 minutes
- 2025-06-05

### Error 2025-06-05T00:28:41+00:00
```
2025-06-05T00:28:41.5973122Z === RUN   TestMigCluster_basicAWS_simple
2025-06-05T00:28:48.8421707Z === CONT  TestMigCluster_basicAWS_simple
2025-06-05T00:28:53.8416238Z === NAME  TestMigCluster_basicAWS_simple
2025-06-05T00:28:53.8418005Z     pre_check.go:40: Time before creating cluster: 2025-06-05T00:28:53.841282899Z, ProjectID: 6840e4b9161ca93c1f051d05, Cluster name: test-acc-tf-c-6598977791839237609
2025-06-05T00:28:54.3295706Z    test_step_number=1 test_working_directory=/tmp/plugintest3386566293
2025-06-05T00:31:57.0358554Z === NAME  TestMigCluster_basicAWS_simple
2025-06-05T00:31:57.0359120Z     resource_cluster_migration_test.go:10: Step 1/2 error: Error running apply: exit status 1
2025-06-05T00:31:57.0359560Z         
2025-06-05T00:31:57.0361257Z         Error: error creating MongoDB Cluster: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6840e4b9161ca93c1f051d05/clusters/test-acc-tf-c-6598977791839237609 GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-06-05T00:31:57.0362427Z         
2025-06-05T00:31:57.0362735Z           with mongodbatlas_cluster.test,
2025-06-05T00:31:57.0363350Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_cluster" "test":
2025-06-05T00:31:57.0363903Z           14: 		resource "mongodbatlas_cluster" "test" {
2025-06-05T00:31:57.0364197Z         
2025-06-05T00:31:57.2196686Z --- FAIL: TestMigCluster_basicAWS_simple (191.22s)
```

- 2025-06-06 PASS 12 minutes
- 2025-06-07 PASS 13 minutes
- 2025-06-08 PASS 11 minutes
- 2025-06-09 PASS 10 minutes
- 2025-06-10 PASS 24 minutes
- 2025-06-11
  - PASS 12 minutes
  - PASS 11 minutes
- 2025-06-12 PASS 13 minutes
- 2025-06-13 PASS 13 minutes
- 2025-06-14 PASS 14 minutes
- 2025-06-15 PASS 12 minutes
- 2025-06-16 PASS 11 minutes
- 2025-06-17 PASS 13 minutes
- 2025-06-18 PASS 20 minutes
- 2025-06-19 PASS 13 minutes
- 2025-06-20 PASS 13 minutes
- 2025-06-21 PASS 14 minutes
- 2025-06-22 PASS 11 minutes
- 2025-06-23 PASS 11 minutes
- 2025-06-24 PASS 11 minutes
- 2025-06-25 PASS 13 minutes
- 2025-06-26 PASS 13 minutes
- 2025-06-27 PASS 13 minutes
- 2025-06-28 PASS 12 minutes
- 2025-06-29 PASS 11 minutes
- 2025-06-30 PASS 13 minutes
- 2025-07-01
  - PASS 12 minutes
  - PASS 13 minutes
  - PASS 12 minutes
  - PASS 11 minutes
  - PASS 11 minutes
  - PASS 13 minutes
- 2025-07-02 PASS 10 minutes
- 2025-07-03 PASS 14 minutes
- 2025-07-04 PASS 23 minutes
- 2025-07-05 PASS 13 minutes
- 2025-07-06 PASS 11 minutes
- 2025-07-07 PASS 13 minutes
- 2025-07-08 PASS 9 minutes
- 2025-07-09 PASS 11 minutes
- 2025-07-10 PASS 10 minutes