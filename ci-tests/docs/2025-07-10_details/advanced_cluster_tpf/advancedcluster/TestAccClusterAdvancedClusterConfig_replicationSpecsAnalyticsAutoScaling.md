# advanced_cluster_tpf/advancedcluster/TestAccClusterAdvancedClusterConfig_replicationSpecsAnalyticsAutoScaling Test Details
# Found 116 TestRuns in dev, qa from 2025-04-12 to 2025-07-10 from master branch: 1 unique tests, PASS(x 114) FAIL(x 2)
Success rate: 98.28%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-05-11 00:30](#error-2025-05-11t0030010000) |  | qa |  | 0.00s
[2025-06-05 00:35](#error-2025-06-05t0035380000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6840e4d7c939f274132515df/clusters | dev | flaky_500 | 30.08s

## Timeline
- 2025-04-11: MISSING
- 2025-04-12 PASS 35 minutes
- 2025-04-13 PASS 49 minutes
- 2025-04-14 PASS 33 minutes
- 2025-04-15 PASS 47 minutes
- 2025-04-16
  - PASS 36 minutes
  - PASS 49 minutes
- 2025-04-17 PASS 36 minutes
- 2025-04-18 PASS 38 minutes
- 2025-04-19 PASS 37 minutes
- 2025-04-20 PASS 40 minutes
- 2025-04-21 PASS 40 minutes
- 2025-04-22 PASS 36 minutes
- 2025-04-23 PASS 40 minutes
- 2025-04-24 PASS 35 minutes
- 2025-04-25 PASS 36 minutes
- 2025-04-26 PASS 35 minutes
- 2025-04-27 PASS 47 minutes
- 2025-04-28 PASS 33 minutes
- 2025-04-29 PASS 37 minutes
- 2025-04-30 PASS 41 minutes
- 2025-05-01
  - PASS 38 minutes
  - PASS 37 minutes
  - PASS 36 minutes
  - PASS 37 minutes
  - PASS 35 minutes
  - PASS 36 minutes
  - PASS 34 minutes
- 2025-05-02 PASS 45 minutes
- 2025-05-03 PASS 37 minutes
- 2025-05-04 PASS 36 minutes
- 2025-05-05 PASS 35 minutes
- 2025-05-06 PASS 36 minutes
- 2025-05-07 PASS 41 minutes
- 2025-05-08 PASS 40 minutes
- 2025-05-09 PASS 40 minutes
- 2025-05-10 PASS 39 minutes
- 2025-05-11

### Error 2025-05-11T00:30:01+00:00
```
2025-05-11T00:30:01.7898745Z === RUN   TestAccClusterAdvancedClusterConfig_replicationSpecsAnalyticsAutoScaling
2025-05-11T00:30:01.7899306Z     shared_resource.go:84: 
2025-05-11T00:30:01.7900368Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-05-11T00:30:01.7902565Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:84
2025-05-11T00:30:01.7904655Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:164
2025-05-11T00:30:01.7906614Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:83
2025-05-11T00:30:01.7908909Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_advanced_cluster_test.go:582
2025-05-11T00:30:01.7910162Z         	Error:      	Received unexpected error:
2025-05-11T00:30:01.7911200Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:30:01.7912260Z         	Test:       	TestAccClusterAdvancedClusterConfig_replicationSpecsAnalyticsAutoScaling
2025-05-11T00:30:01.7913613Z         	Messages:   	Project creation failed: test-acc-tf-p-1873528485126967812, err: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:30:01.7914601Z --- FAIL: TestAccClusterAdvancedClusterConfig_replicationSpecsAnalyticsAutoScaling (0.02s)
```

- 2025-05-12 PASS 36 minutes
- 2025-05-13
  - PASS 38 minutes
  - PASS 38 minutes
- 2025-05-14 PASS 39 minutes
- 2025-05-15 PASS 36 minutes
- 2025-05-16 PASS 37 minutes
- 2025-05-17 PASS 39 minutes
- 2025-05-18 PASS 42 minutes
- 2025-05-19 PASS 39 minutes
- 2025-05-20 PASS 38 minutes
- 2025-05-21
  - PASS 36 minutes
  - PASS 30 minutes
- 2025-05-22 PASS 36 minutes
- 2025-05-23 PASS 36 minutes
- 2025-05-24 PASS 35 minutes
- 2025-05-25 PASS 51 minutes
- 2025-05-26 PASS 36 minutes
- 2025-05-27 PASS 33 minutes
- 2025-05-28
  - PASS 33 minutes
  - PASS 37 minutes
  - PASS 39 minutes
- 2025-05-29 PASS 44 minutes
- 2025-05-30
  - PASS an hour
  - PASS 35 minutes
- 2025-05-31 PASS 36 minutes
- 2025-06-01
  - PASS 47 minutes
  - PASS 35 minutes
  - PASS 33 minutes
  - PASS 31 minutes
  - PASS 36 minutes
- 2025-06-02
  - PASS 33 minutes
  - PASS 36 minutes
  - PASS 33 minutes
  - PASS 34 minutes
- 2025-06-03 PASS 37 minutes
- 2025-06-04 PASS 36 minutes
- 2025-06-05

### Error 2025-06-05T00:35:38+00:00
```
2025-06-05T00:35:38.5881173Z === RUN   TestAccClusterAdvancedClusterConfig_replicationSpecsAnalyticsAutoScaling
2025-06-05T00:35:38.5945859Z === CONT  TestAccClusterAdvancedClusterConfig_replicationSpecsAnalyticsAutoScaling
2025-06-05T00:35:38.6696831Z === NAME  TestAccClusterAdvancedClusterConfig_replicationSpecsAnalyticsAutoScaling
2025-06-05T00:35:38.6697467Z     pre_check.go:40: Time before creating cluster: 2025-06-05T00:29:56.013068891Z, ProjectID: 6840e4d7c939f274132515df, Cluster name: test-acc-tf-c-4143072106958896426
2025-06-05T00:35:38.6703596Z   
2025-06-05T00:35:38.6703941Z     resource_advanced_cluster_test.go:597: Step 1/5 error: Error running apply: exit status 1
2025-06-05T00:35:38.6704040Z         
2025-06-05T00:35:38.6704191Z         Error: Error in create
2025-06-05T00:35:38.6704276Z         
2025-06-05T00:35:38.6704506Z           with mongodbatlas_advanced_cluster.test,
2025-06-05T00:35:38.6704958Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-06-05T00:35:38.6705229Z           12: resource "mongodbatlas_advanced_cluster" "test" {
2025-06-05T00:35:38.6705323Z         
2025-06-05T00:35:38.6705640Z         cluster name: test-acc-tf-c-4143072106958896426, API error details:
2025-06-05T00:35:38.6706044Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6840e4d7c939f274132515df/clusters
2025-06-05T00:35:38.6706405Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-06-05T00:35:38.6706696Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-06-05T00:35:38.6706831Z         BadRequestDetail: 
2025-06-05T00:35:38.6707137Z --- FAIL: TestAccClusterAdvancedClusterConfig_replicationSpecsAnalyticsAutoScaling (30.82s)
```

- 2025-06-06 PASS 47 minutes
- 2025-06-07 PASS 39 minutes
- 2025-06-08 PASS 34 minutes
- 2025-06-09 PASS 3 hours
- 2025-06-10 PASS 58 minutes
- 2025-06-11
  - PASS 37 minutes
  - PASS 45 minutes
- 2025-06-12 PASS 36 minutes
- 2025-06-13 PASS 39 minutes
- 2025-06-14 PASS an hour
- 2025-06-15 PASS 37 minutes
- 2025-06-16 PASS 40 minutes
- 2025-06-17 PASS 48 minutes
- 2025-06-18
  - PASS 41 minutes
  - PASS 35 minutes
- 2025-06-19 PASS an hour
- 2025-06-20 PASS 35 minutes
- 2025-06-21 PASS 35 minutes
- 2025-06-22 PASS 49 minutes
- 2025-06-23 PASS 34 minutes
- 2025-06-24 PASS 37 minutes
- 2025-06-25 PASS 34 minutes
- 2025-06-26
  - PASS 41 minutes
  - PASS 30 minutes
- 2025-06-27 PASS 36 minutes
- 2025-06-28 PASS 38 minutes
- 2025-06-29 PASS 39 minutes
- 2025-06-30 PASS 38 minutes
- 2025-07-01
  - PASS 37 minutes
  - PASS 36 minutes
  - PASS 34 minutes
  - PASS 36 minutes
  - PASS an hour
- 2025-07-02 PASS 40 minutes
- 2025-07-03 PASS 35 minutes
- 2025-07-04 PASS 37 minutes
- 2025-07-05 PASS 35 minutes
- 2025-07-06 PASS 36 minutes
- 2025-07-07 PASS 36 minutes
- 2025-07-08 PASS 42 minutes
- 2025-07-09 PASS 35 minutes
- 2025-07-10 PASS 38 minutes