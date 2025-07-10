# global_cluster_config/globalclusterconfig/TestAccGlobalClusterConfig_database Test Details
# Found 112 TestRuns in dev, qa from 2025-04-12 to 2025-07-10 from master branch: 1 unique tests, PASS(x 110) FAIL(x 2)
Success rate: 98.21%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-05-11 00:29](#error-2025-05-11t0029470000) |  | qa |  | 0.00s
[2025-06-05 00:28](#error-2025-06-05t0028480000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6840e4bec939f27413250887/clusters/test-acc-tf-c-2867241002452157099 | dev | flaky_500 | 186.06s

## Timeline
- 2025-04-11: MISSING
- 2025-04-12 PASS 18 minutes
- 2025-04-13 PASS an hour
- 2025-04-14 PASS 17 minutes
- 2025-04-15 PASS 23 minutes
- 2025-04-16
  - PASS 19 minutes
  - PASS 21 minutes
- 2025-04-17 PASS 19 minutes
- 2025-04-18 PASS 19 minutes
- 2025-04-19 PASS an hour
- 2025-04-20 PASS 19 minutes
- 2025-04-21 PASS 17 minutes
- 2025-04-22 PASS 18 minutes
- 2025-04-23 PASS 19 minutes
- 2025-04-24 PASS 20 minutes
- 2025-04-25 PASS 16 minutes
- 2025-04-26 PASS 20 minutes
- 2025-04-27 PASS 18 minutes
- 2025-04-28 PASS 17 minutes
- 2025-04-29 PASS 18 minutes
- 2025-04-30 PASS 23 minutes
- 2025-05-01
  - PASS 17 minutes
  - PASS 17 minutes
  - PASS 17 minutes
  - PASS 17 minutes
  - PASS 17 minutes
  - PASS 16 minutes
  - PASS 16 minutes
- 2025-05-02 PASS 21 minutes
- 2025-05-03 PASS 17 minutes
- 2025-05-04 PASS 17 minutes
- 2025-05-05 PASS 16 minutes
- 2025-05-06 PASS 23 minutes
- 2025-05-07 PASS 18 minutes
- 2025-05-08 PASS 20 minutes
- 2025-05-09 PASS 21 minutes
- 2025-05-10 PASS 18 minutes
- 2025-05-11

### Error 2025-05-11T00:29:47+00:00
```
2025-05-11T00:29:47.1252430Z === RUN   TestAccGlobalClusterConfig_database
2025-05-11T00:29:47.1253260Z     resource_global_cluster_config_test.go:161: Creating execution project: test-acc-tf-p-3710598947484870434
2025-05-11T00:29:47.1291545Z     resource_global_cluster_config_test.go:161: 
2025-05-11T00:29:47.1293888Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-05-11T00:29:47.1297686Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:65
2025-05-11T00:29:47.1301228Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cluster.go:77
2025-05-11T00:29:47.1305343Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/globalclusterconfig/resource_global_cluster_config_test.go:161
2025-05-11T00:29:47.1307099Z         	Error:      	Received unexpected error:
2025-05-11T00:29:47.1308764Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:29:47.1309841Z         	Test:       	TestAccGlobalClusterConfig_database
2025-05-11T00:29:47.1311743Z         	Messages:   	Project creation failed: test-acc-tf-p-3710598947484870434, err: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:29:47.1313002Z --- FAIL: TestAccGlobalClusterConfig_database (0.01s)
```

- 2025-05-12 PASS 17 minutes
- 2025-05-13
  - PASS 17 minutes
  - PASS 16 minutes
- 2025-05-14 PASS 25 minutes
- 2025-05-15 PASS 20 minutes
- 2025-05-16 PASS 18 minutes
- 2025-05-17 PASS 18 minutes
- 2025-05-18 PASS 18 minutes
- 2025-05-19 PASS 18 minutes
- 2025-05-20 PASS 18 minutes
- 2025-05-21 PASS 19 minutes
- 2025-05-22 PASS 19 minutes
- 2025-05-23 PASS 19 minutes
- 2025-05-24 PASS 19 minutes
- 2025-05-25 PASS 19 minutes
- 2025-05-26 PASS 19 minutes
- 2025-05-27 PASS 18 minutes
- 2025-05-28
  - PASS 33 minutes
  - PASS 19 minutes
- 2025-05-29 PASS 25 minutes
- 2025-05-30 PASS 2 hours
- 2025-05-31 PASS 17 minutes
- 2025-06-01
  - PASS 17 minutes
  - PASS 17 minutes
  - PASS 18 minutes
  - PASS 17 minutes
  - PASS 17 minutes
  - PASS 18 minutes
- 2025-06-02
  - PASS 19 minutes
  - PASS 18 minutes
  - PASS 18 minutes
- 2025-06-03 PASS 18 minutes
- 2025-06-04 PASS 19 minutes
- 2025-06-05

### Error 2025-06-05T00:28:48+00:00
```
2025-06-05T00:28:48.7686576Z === RUN   TestAccGlobalClusterConfig_database
2025-06-05T00:28:53.7698244Z     pre_check.go:40: Time before creating cluster: 2025-06-05T00:28:53.769326016Z, ProjectID: 6840e4bec939f27413250887, Cluster name: test-acc-tf-c-2867241002452157099
2025-06-05T00:31:55.3103659Z   
2025-06-05T00:31:55.3106197Z     resource_global_cluster_config_test.go:164: Step 1/5 error: Error running apply: exit status 1
2025-06-05T00:31:55.3106917Z         
2025-06-05T00:31:55.3109800Z         Error: error creating advanced cluster: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6840e4bec939f27413250887/clusters/test-acc-tf-c-2867241002452157099 GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-06-05T00:31:55.3111619Z         
2025-06-05T00:31:55.3111993Z           with mongodbatlas_advanced_cluster.cluster_info,
2025-06-05T00:31:55.3112700Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2025-06-05T00:31:55.3113652Z           12: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2025-06-05T00:31:55.3113992Z         
2025-06-05T00:31:55.3551380Z --- FAIL: TestAccGlobalClusterConfig_database (186.59s)
```

- 2025-06-06 PASS 17 minutes
- 2025-06-07 PASS 19 minutes
- 2025-06-08 PASS 18 minutes
- 2025-06-09 PASS 17 minutes
- 2025-06-10 PASS 34 minutes
- 2025-06-11
  - PASS 18 minutes
  - PASS 17 minutes
- 2025-06-12 PASS 21 minutes
- 2025-06-13 PASS 20 minutes
- 2025-06-14 PASS 19 minutes
- 2025-06-15 PASS 19 minutes
- 2025-06-16 PASS 31 minutes
- 2025-06-17 PASS 21 minutes
- 2025-06-18 PASS 25 minutes
- 2025-06-19 PASS 46 minutes
- 2025-06-20 PASS 18 minutes
- 2025-06-21 PASS 20 minutes
- 2025-06-22 PASS 17 minutes
- 2025-06-23 PASS 19 minutes
- 2025-06-24 PASS 19 minutes
- 2025-06-25 PASS 20 minutes
- 2025-06-26 PASS 31 minutes
- 2025-06-27 PASS 17 minutes
- 2025-06-28 PASS 17 minutes
- 2025-06-29 PASS 21 minutes
- 2025-06-30 PASS 19 minutes
- 2025-07-01
  - PASS 18 minutes
  - PASS 18 minutes
  - PASS 18 minutes
  - PASS 17 minutes
  - PASS 17 minutes
  - PASS 18 minutes
- 2025-07-02 PASS 18 minutes
- 2025-07-03 PASS 20 minutes
- 2025-07-04 PASS 30 minutes
- 2025-07-05 PASS 18 minutes
- 2025-07-06 PASS 16 minutes
- 2025-07-07 PASS 18 minutes
- 2025-07-08 PASS 19 minutes
- 2025-07-09 PASS 34 minutes
- 2025-07-10 PASS 19 minutes