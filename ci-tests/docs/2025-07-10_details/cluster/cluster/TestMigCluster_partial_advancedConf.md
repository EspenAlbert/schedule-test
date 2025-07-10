# cluster/cluster/TestMigCluster_partial_advancedConf Test Details
# Found 116 TestRuns in dev, qa from 2025-04-12 to 2025-07-10 from master branch: 1 unique tests, PASS(x 112) FAIL(x 4)
Success rate: 96.55%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-05-11 00:29](#error-2025-05-11t0029400000) |  | qa |  | 0.00s
[2025-06-05 00:28](#error-2025-06-05t0028440000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6840e4b9161ca93c1f051d05/clusters/test-acc-tf-c-2076922952662780413 | dev | flaky_500 | 228.01s
[2025-06-06 00:30](#error-2025-06-06t0030040000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6842368ac64ff333daf68217/clusters/test-acc-tf-c-1079594732784581899/processArgs | dev | flaky_500 | 525.01s
[2025-07-02 00:28](#error-2025-07-02t0028470000) |  | dev | unclassified | 308.06s

## Timeline
- 2025-04-11: MISSING
- 2025-04-12 PASS 14 minutes
- 2025-04-13 PASS 16 minutes
- 2025-04-14 PASS 10 minutes
- 2025-04-15 PASS 12 minutes
- 2025-04-16
  - PASS 12 minutes
  - PASS 17 minutes
- 2025-04-17 PASS 13 minutes
- 2025-04-18 PASS 11 minutes
- 2025-04-19 PASS 13 minutes
- 2025-04-20 PASS 13 minutes
- 2025-04-21 PASS 12 minutes
- 2025-04-22 PASS 10 minutes
- 2025-04-23 PASS 14 minutes
- 2025-04-24 PASS 11 minutes
- 2025-04-25 PASS 11 minutes
- 2025-04-26 PASS 11 minutes
- 2025-04-27 PASS 14 minutes
- 2025-04-28 PASS 11 minutes
- 2025-04-29 PASS 11 minutes
- 2025-04-30 PASS 12 minutes
- 2025-05-01
  - PASS 10 minutes
  - PASS 11 minutes
  - PASS 12 minutes
  - PASS 11 minutes
  - PASS 12 minutes
  - PASS 11 minutes
  - PASS 11 minutes
- 2025-05-02 PASS 15 minutes
- 2025-05-03 PASS 11 minutes
- 2025-05-04 PASS 11 minutes
- 2025-05-05 PASS 11 minutes
- 2025-05-06 PASS 12 minutes
- 2025-05-07 PASS 13 minutes
- 2025-05-08 PASS 15 minutes
- 2025-05-09 PASS 16 minutes
- 2025-05-10 PASS 12 minutes
- 2025-05-11

### Error 2025-05-11T00:29:40+00:00
```
2025-05-11T00:29:40.2828780Z === RUN   TestMigCluster_partial_advancedConf
2025-05-11T00:29:40.2869610Z     shared_resource.go:84: 
2025-05-11T00:29:40.2871094Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-05-11T00:29:40.2872843Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:84
2025-05-11T00:29:40.2874593Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:164
2025-05-11T00:29:40.2876464Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:83
2025-05-11T00:29:40.2878277Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cluster/resource_cluster_test.go:87
2025-05-11T00:29:40.2880440Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cluster/resource_cluster_migration_test.go:15
2025-05-11T00:29:40.2881225Z         	Error:      	Received unexpected error:
2025-05-11T00:29:40.2882096Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:29:40.2882651Z         	Test:       	TestMigCluster_partial_advancedConf
2025-05-11T00:29:40.2883672Z         	Messages:   	Project creation failed: test-acc-tf-p-2674768057958148785, err: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:29:40.2884361Z --- FAIL: TestMigCluster_partial_advancedConf (0.01s)
```

- 2025-05-12 PASS 11 minutes
- 2025-05-13
  - PASS 12 minutes
  - PASS 12 minutes
- 2025-05-14 PASS 19 minutes
- 2025-05-15 PASS 12 minutes
- 2025-05-16 PASS 13 minutes
- 2025-05-17 PASS 11 minutes
- 2025-05-18 PASS 11 minutes
- 2025-05-19 PASS 13 minutes
- 2025-05-20 PASS 14 minutes
- 2025-05-21 PASS 12 minutes
- 2025-05-22 PASS 13 minutes
- 2025-05-23 PASS 21 minutes
- 2025-05-24 PASS 14 minutes
- 2025-05-25 PASS 14 minutes
- 2025-05-26 PASS 12 minutes
- 2025-05-27 PASS 12 minutes
- 2025-05-28
  - PASS 24 minutes
  - PASS 10 minutes
  - PASS 13 minutes
  - PASS 12 minutes
- 2025-05-29
  - PASS 20 minutes
  - PASS 10 minutes
- 2025-05-30
  - PASS 11 minutes
  - PASS 10 minutes
- 2025-05-31 PASS 11 minutes
- 2025-06-01
  - PASS 10 minutes
  - PASS 10 minutes
  - PASS 12 minutes
  - PASS 10 minutes
  - PASS 11 minutes
  - PASS 12 minutes
- 2025-06-02
  - PASS 12 minutes
  - PASS 12 minutes
  - PASS 11 minutes
- 2025-06-03 PASS 13 minutes
- 2025-06-04 PASS 12 minutes
- 2025-06-05

### Error 2025-06-05T00:28:44+00:00
```
2025-06-05T00:28:44.4410967Z === RUN   TestMigCluster_partial_advancedConf
2025-06-05T00:28:48.8434285Z === CONT  TestMigCluster_partial_advancedConf
2025-06-05T00:29:33.8573135Z === NAME  TestMigCluster_partial_advancedConf
2025-06-05T00:29:33.8574580Z     pre_check.go:40: Time before creating cluster: 2025-06-05T00:29:33.857019542Z, ProjectID: 6840e4b9161ca93c1f051d05, Cluster name: test-acc-tf-c-2076922952662780413
2025-06-05T00:32:36.7906416Z === NAME  TestMigCluster_partial_advancedConf
2025-06-05T00:32:36.7907421Z     resource_cluster_migration_test.go:15: Step 1/2 error: Error running apply: exit status 1
2025-06-05T00:32:36.7908176Z         
2025-06-05T00:32:36.7911239Z         Error: error creating MongoDB Cluster: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6840e4b9161ca93c1f051d05/clusters/test-acc-tf-c-2076922952662780413 GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-06-05T00:32:36.7913380Z         
2025-06-05T00:32:36.7913893Z           with mongodbatlas_cluster.test,
2025-06-05T00:32:36.7914966Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_cluster" "test":
2025-06-05T00:32:36.7916262Z           14: 		resource "mongodbatlas_cluster" "test" {
2025-06-05T00:32:36.7916790Z         
2025-06-05T00:32:36.9684614Z --- FAIL: TestMigCluster_partial_advancedConf (228.13s)
```

- 2025-06-06

### Error 2025-06-06T00:30:04+00:00
```
2025-06-06T00:30:04.4374308Z === RUN   TestMigCluster_partial_advancedConf
2025-06-06T00:30:08.0476013Z === CONT  TestMigCluster_partial_advancedConf
2025-06-06T00:31:08.0455963Z === NAME  TestMigCluster_partial_advancedConf
2025-06-06T00:31:08.0459966Z     pre_check.go:40: Time before creating cluster: 2025-06-06T00:31:08.045326189Z, ProjectID: 6842368ac64ff333daf68217, Cluster name: test-acc-tf-c-1079594732784581899
2025-06-06T00:38:52.9705149Z === NAME  TestMigCluster_partial_advancedConf
2025-06-06T00:38:52.9705722Z     resource_cluster_migration_test.go:15: Step 1/2 error: Error running apply: exit status 1
2025-06-06T00:38:52.9706142Z         
2025-06-06T00:38:52.9708200Z         Error: error updating Advanced Configuration Option (v20240530) for MongoDB Cluster (test-acc-tf-c-1079594732784581899): https://cloud-dev.mongodb.com/api/atlas/v2/groups/6842368ac64ff333daf68217/clusters/test-acc-tf-c-1079594732784581899/processArgs PATCH: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: []
2025-06-06T00:38:52.9710193Z         
2025-06-06T00:38:52.9710500Z           with mongodbatlas_cluster.test,
2025-06-06T00:38:52.9711335Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_cluster" "test":
2025-06-06T00:38:52.9711872Z           14: 		resource "mongodbatlas_cluster" "test" {
2025-06-06T00:38:52.9712160Z         
2025-06-06T00:38:53.1833927Z --- FAIL: TestMigCluster_partial_advancedConf (525.14s)
```

- 2025-06-07 PASS 12 minutes
- 2025-06-08 PASS 12 minutes
- 2025-06-09 PASS 10 minutes
- 2025-06-10 PASS 27 minutes
- 2025-06-11
  - PASS 11 minutes
  - PASS 12 minutes
- 2025-06-12 PASS 13 minutes
- 2025-06-13 PASS 13 minutes
- 2025-06-14 PASS 15 minutes
- 2025-06-15 PASS 13 minutes
- 2025-06-16 PASS 11 minutes
- 2025-06-17 PASS 12 minutes
- 2025-06-18 PASS 19 minutes
- 2025-06-19 PASS 12 minutes
- 2025-06-20 PASS 14 minutes
- 2025-06-21 PASS 13 minutes
- 2025-06-22 PASS 13 minutes
- 2025-06-23 PASS 10 minutes
- 2025-06-24 PASS 12 minutes
- 2025-06-25 PASS 11 minutes
- 2025-06-26 PASS 11 minutes
- 2025-06-27 PASS 10 minutes
- 2025-06-28 PASS 10 minutes
- 2025-06-29 PASS 16 minutes
- 2025-06-30 PASS 13 minutes
- 2025-07-01
  - PASS 12 minutes
  - PASS 12 minutes
  - PASS 11 minutes
  - PASS 11 minutes
  - PASS 11 minutes
  - PASS 15 minutes
- 2025-07-02

### Error 2025-07-02T00:28:47+00:00
GoTestErrorClassification(error_class='unclassified',author='human',run_id='2025-07-02T00:28:47.595000+00:00-TestMigCluster_partial_advancedConf',confidence=1.0,ts_when='8 days ago')

```
2025-07-02T00:28:47.5959695Z === RUN   TestMigCluster_partial_advancedConf
2025-07-02T00:28:55.2684009Z === CONT  TestMigCluster_partial_advancedConf
2025-07-02T00:28:57.7924217Z   
2025-07-02T00:29:55.2561827Z === NAME  TestMigCluster_partial_advancedConf
2025-07-02T00:29:55.2563290Z     pre_check.go:40: Time before creating cluster: 2025-07-02T00:29:55.255849645Z, ProjectID: 68647d3d948ea608f1ec2630, Cluster name: test-acc-tf-c-6758096426470617589
2025-07-02T00:34:03.7284323Z === NAME  TestMigCluster_partial_advancedConf
2025-07-02T00:34:03.7284889Z     resource_cluster_migration_test.go:15: Step 1/2 error: Error running apply: exit status 1
2025-07-02T00:34:03.7285303Z         
2025-07-02T00:34:03.7286501Z         Error: error creating MongoDB Cluster: Get "https://cloud-dev.mongodb.com/api/atlas/v2/groups/68647d3d948ea608f1ec2630/clusters/test-acc-tf-c-6758096426470617589": dial tcp: lookup cloud-dev.mongodb.com: i/o timeout
2025-07-02T00:34:03.7287368Z         
2025-07-02T00:34:03.7287642Z           with mongodbatlas_cluster.test,
2025-07-02T00:34:03.7288624Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_cluster" "test":
2025-07-02T00:34:03.7289161Z           14: 		resource "mongodbatlas_cluster" "test" {
2025-07-02T00:34:03.7289441Z         
2025-07-02T00:34:03.9155071Z --- FAIL: TestMigCluster_partial_advancedConf (308.65s)
```

- 2025-07-03 PASS 13 minutes
- 2025-07-04 PASS 22 minutes
- 2025-07-05 PASS 11 minutes
- 2025-07-06 PASS 10 minutes
- 2025-07-07 PASS 13 minutes
- 2025-07-08 PASS 14 minutes
- 2025-07-09 PASS 30 minutes
- 2025-07-10 PASS 16 minutes