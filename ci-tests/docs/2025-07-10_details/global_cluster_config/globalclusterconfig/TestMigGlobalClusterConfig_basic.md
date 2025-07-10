# global_cluster_config/globalclusterconfig/TestMigGlobalClusterConfig_basic Test Details
# Found 112 TestRuns in dev, qa from 2025-04-12 to 2025-07-10 from master branch: 1 unique tests, PASS(x 108) FAIL(x 4)
Success rate: 96.43%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-04-29 00:27](#error-2025-04-29t0027400000) |  | dev |  | 10.04s
[2025-05-11 00:29](#error-2025-05-11t0029460000) |  | qa |  | 0.02s
[2025-06-05 00:28](#error-2025-06-05t0028450000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6840e4bec939f27413250887/clusters/test-acc-tf-c-7817704349326611632 | dev | flaky_500 | 191.09s
[2025-07-08 00:29](#error-2025-07-08t0029090000) |  | dev | flaky_client | 13.06s

## Timeline
- 2025-04-11: MISSING
- 2025-04-12 PASS 11 minutes
- 2025-04-13 PASS 16 minutes
- 2025-04-14 PASS 11 minutes
- 2025-04-15 PASS 11 minutes
- 2025-04-16
  - PASS 12 minutes
  - PASS 20 minutes
- 2025-04-17 PASS 12 minutes
- 2025-04-18 PASS 14 minutes
- 2025-04-19 PASS 13 minutes
- 2025-04-20 PASS 15 minutes
- 2025-04-21 PASS 12 minutes
- 2025-04-22 PASS 13 minutes
- 2025-04-23 PASS 13 minutes
- 2025-04-24 PASS 13 minutes
- 2025-04-25 PASS 14 minutes
- 2025-04-26 PASS 13 minutes
- 2025-04-27 PASS 14 minutes
- 2025-04-28 PASS 13 minutes
- 2025-04-29

### Error 2025-04-29T00:27:40+00:00
```
2025-04-29T00:27:40.4874546Z === RUN   TestMigGlobalClusterConfig_basic
2025-04-29T00:27:40.4876550Z     resource_global_cluster_config_migration_test.go:11: Creating execution project: test-acc-tf-p-7302067681625169277
2025-04-29T00:45:53.9923063Z === CONT  TestMigGlobalClusterConfig_basic
2025-04-29T00:45:58.9923785Z === NAME  TestMigGlobalClusterConfig_basic
2025-04-29T00:45:58.9925579Z     pre_check.go:40: Time before creating cluster: 2025-04-29T00:45:58.992059407Z, ProjectID: 68101cfc494caf27baac2f85, Cluster name: test-acc-tf-c-1676036529431863515
2025-04-29T00:46:00.7689608Z    test_name=TestMigGlobalClusterConfig_basic
2025-04-29T00:46:00.7690250Z     resource_global_cluster_config_migration_test.go:11: TestStep 1/2 running init: exit status 1
2025-04-29T00:46:00.7690723Z         
2025-04-29T00:46:00.7691022Z         Error: Failed to install provider
2025-04-29T00:46:00.7691304Z         
2025-04-29T00:46:00.7691805Z         Error while installing mongodb/mongodbatlas v1.33.0: could not query provider
2025-04-29T00:46:00.7692506Z         registry for registry.terraform.io/mongodb/mongodbatlas: failed to retrieve
2025-04-29T00:46:00.7693197Z         authentication checksums for provider: the request failed after 2 attempts,
2025-04-29T00:46:00.7693721Z         please try again later: 618  returned from
2025-04-29T00:46:00.7694134Z         release-assets.githubusercontent.com
2025-04-29T00:46:00.7924842Z --- FAIL: TestMigGlobalClusterConfig_basic (10.37s)
```

- 2025-04-30 PASS 17 minutes
- 2025-05-01
  - PASS 13 minutes
  - PASS 13 minutes
  - PASS 14 minutes
  - PASS 13 minutes
  - PASS 14 minutes
  - PASS 14 minutes
  - PASS 14 minutes
- 2025-05-02 PASS 16 minutes
- 2025-05-03 PASS 14 minutes
- 2025-05-04 PASS 11 minutes
- 2025-05-05 PASS 13 minutes
- 2025-05-06 PASS 13 minutes
- 2025-05-07 PASS 13 minutes
- 2025-05-08 PASS 16 minutes
- 2025-05-09 PASS 17 minutes
- 2025-05-10 PASS 13 minutes
- 2025-05-11

### Error 2025-05-11T00:29:46+00:00
```
2025-05-11T00:29:46.9039800Z === RUN   TestMigGlobalClusterConfig_basic
2025-05-11T00:29:46.9041628Z     resource_global_cluster_config_migration_test.go:11: Creating execution project: test-acc-tf-p-1006400142904882411
2025-05-11T00:29:47.1037852Z     resource_global_cluster_config_migration_test.go:11: 
2025-05-11T00:29:47.1039055Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-05-11T00:29:47.1040859Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:65
2025-05-11T00:29:47.1043057Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cluster.go:77
2025-05-11T00:29:47.1045695Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/globalclusterconfig/resource_global_cluster_config_test.go:80
2025-05-11T00:29:47.1048019Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/globalclusterconfig/resource_global_cluster_config_migration_test.go:11
2025-05-11T00:29:47.1048915Z         	Error:      	Received unexpected error:
2025-05-11T00:29:47.1050174Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:29:47.1050757Z         	Test:       	TestMigGlobalClusterConfig_basic
2025-05-11T00:29:47.1051770Z         	Messages:   	Project creation failed: test-acc-tf-p-1006400142904882411, err: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:29:47.1052445Z --- FAIL: TestMigGlobalClusterConfig_basic (0.20s)
```

- 2025-05-12 PASS 16 minutes
- 2025-05-13
  - PASS 13 minutes
  - PASS 14 minutes
- 2025-05-14 PASS 19 minutes
- 2025-05-15 PASS 15 minutes
- 2025-05-16 PASS 13 minutes
- 2025-05-17 PASS 13 minutes
- 2025-05-18 PASS 13 minutes
- 2025-05-19 PASS 13 minutes
- 2025-05-20 PASS 12 minutes
- 2025-05-21 PASS 11 minutes
- 2025-05-22 PASS 13 minutes
- 2025-05-23 PASS 14 minutes
- 2025-05-24 PASS 14 minutes
- 2025-05-25 PASS 16 minutes
- 2025-05-26 PASS 14 minutes
- 2025-05-27 PASS 14 minutes
- 2025-05-28
  - PASS 13 minutes
  - PASS 13 minutes
- 2025-05-29 PASS 18 minutes
- 2025-05-30 PASS 11 minutes
- 2025-05-31 PASS 13 minutes
- 2025-06-01
  - PASS 12 minutes
  - PASS 13 minutes
  - PASS 13 minutes
  - PASS 13 minutes
  - PASS 13 minutes
  - PASS 11 minutes
- 2025-06-02
  - PASS 13 minutes
  - PASS 13 minutes
  - PASS 13 minutes
- 2025-06-03 PASS 12 minutes
- 2025-06-04 PASS 13 minutes
- 2025-06-05

### Error 2025-06-05T00:28:45+00:00
```
2025-06-05T00:28:45.7881690Z === RUN   TestMigGlobalClusterConfig_basic
2025-06-05T00:28:45.7883466Z     resource_global_cluster_config_migration_test.go:11: Creating execution project: test-acc-tf-p-1877219500285495240
2025-06-05T00:31:55.3551949Z === CONT  TestMigGlobalClusterConfig_basic
2025-06-05T00:32:00.3596287Z === NAME  TestMigGlobalClusterConfig_basic
2025-06-05T00:32:05.3615464Z     pre_check.go:40: Time before creating cluster: 2025-06-05T00:32:00.35932618Z, ProjectID: 6840e4bec939f27413250887, Cluster name: test-acc-tf-c-7817704349326611632
2025-06-05T00:35:04.1108101Z === NAME  TestMigGlobalClusterConfig_basic
2025-06-05T00:35:04.1109204Z     resource_global_cluster_config_migration_test.go:11: Step 1/2 error: Error running apply: exit status 1
2025-06-05T00:35:04.1110008Z         
2025-06-05T00:35:04.1113219Z         Error: error creating advanced cluster: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6840e4bec939f27413250887/clusters/test-acc-tf-c-7817704349326611632 GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-06-05T00:35:04.1115340Z         
2025-06-05T00:35:04.1116039Z           with mongodbatlas_advanced_cluster.cluster_info,
2025-06-05T00:35:04.1117322Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2025-06-05T00:35:04.1118514Z           14: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2025-06-05T00:35:04.1119097Z         
2025-06-05T00:35:04.2999310Z --- FAIL: TestMigGlobalClusterConfig_basic (191.92s)
```

- 2025-06-06 PASS 12 minutes
- 2025-06-07 PASS 13 minutes
- 2025-06-08 PASS 13 minutes
- 2025-06-09 PASS 12 minutes
- 2025-06-10 PASS 18 minutes
- 2025-06-11
  - PASS 12 minutes
  - PASS 14 minutes
- 2025-06-12 PASS 15 minutes
- 2025-06-13 PASS 12 minutes
- 2025-06-14 PASS an hour
- 2025-06-15 PASS 15 minutes
- 2025-06-16 PASS 18 minutes
- 2025-06-17 PASS 13 minutes
- 2025-06-18 PASS 14 minutes
- 2025-06-19 PASS 40 minutes
- 2025-06-20 PASS 13 minutes
- 2025-06-21 PASS 13 minutes
- 2025-06-22 PASS 15 minutes
- 2025-06-23 PASS 13 minutes
- 2025-06-24 PASS 13 minutes
- 2025-06-25 PASS 12 minutes
- 2025-06-26 PASS 16 minutes
- 2025-06-27 PASS 13 minutes
- 2025-06-28 PASS 14 minutes
- 2025-06-29 PASS 14 minutes
- 2025-06-30 PASS 14 minutes
- 2025-07-01
  - PASS 14 minutes
  - PASS 14 minutes
  - PASS 13 minutes
  - PASS 13 minutes
  - PASS 13 minutes
  - PASS 14 minutes
- 2025-07-02 PASS 12 minutes
- 2025-07-03 PASS 12 minutes
- 2025-07-04 PASS 14 minutes
- 2025-07-05 PASS 13 minutes
- 2025-07-06 PASS 13 minutes
- 2025-07-07 PASS 14 minutes
- 2025-07-08

### Error 2025-07-08T00:29:09+00:00
```
2025-07-08T00:29:09.2694103Z === RUN   TestMigGlobalClusterConfig_basic
2025-07-08T00:29:09.2696946Z     resource_global_cluster_config_migration_test.go:11: Creating execution project: test-acc-tf-p-2400989897618886506
2025-07-08T00:49:09.6442633Z === CONT  TestMigGlobalClusterConfig_basic
2025-07-08T00:49:14.6483033Z === NAME  TestMigGlobalClusterConfig_basic
2025-07-08T00:49:14.6486417Z     pre_check.go:40: Time before creating cluster: 2025-07-08T00:49:14.648021204Z, ProjectID: 686c6655a5ec7701ec2c6dd5, Cluster name: test-acc-tf-c-2139322327585312130
2025-07-08T00:49:21.1969385Z === NAME  TestMigGlobalClusterConfig_basic
2025-07-08T00:49:21.1970014Z     resource_global_cluster_config_migration_test.go:11: Step 1/2 error: Error running apply: exit status 1
2025-07-08T00:49:21.1970489Z         
2025-07-08T00:49:21.1971531Z         Error: error creating advanced cluster: Post "https://cloud-dev.mongodb.com/api/atlas/v2/groups/686c6655a5ec7701ec2c6dd5/clusters": dial tcp: lookup cloud-dev.mongodb.com: i/o timeout
2025-07-08T00:49:21.1972497Z         
2025-07-08T00:49:21.1972847Z           with mongodbatlas_advanced_cluster.cluster_info,
2025-07-08T00:49:21.1973528Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2025-07-08T00:49:21.1974173Z           14: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2025-07-08T00:49:21.1974495Z         
2025-07-08T00:49:21.3857845Z --- FAIL: TestMigGlobalClusterConfig_basic (13.56s)
```

- 2025-07-09 PASS 14 minutes
- 2025-07-10 PASS 13 minutes