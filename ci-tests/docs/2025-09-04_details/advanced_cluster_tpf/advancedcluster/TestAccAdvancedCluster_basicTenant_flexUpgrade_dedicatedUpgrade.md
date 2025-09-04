# advanced_cluster_tpf/advancedcluster/TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade Test Details
# Found 36 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, FAIL(x 20) PASS(x 15) TIMEOUT
Success rate: 42.86%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-08-06 02:05](#error-2025-08-06t0205370000) |  | dev | unknown | 964.04s
[2025-08-07 02:02](#error-2025-08-07t0202550000) |  | dev | flaky_500 | 81.09s
[2025-08-08 01:48](#error-2025-08-08t0148330000) |  | dev | real_test_failure | 80.05s
[2025-08-10 01:54](#error-2025-08-10t0154320000) |  | qa |  | 30.04s
[2025-08-11 03:50](#error-2025-08-11t0350250000) |  | dev |  | 1252.09s
[2025-08-12 01:44](#error-2025-08-12t0144120000) |  | dev |  | 80.04s
[2025-08-13 01:51](#error-2025-08-13t0151590000) |  | dev |  | 80.06s
[2025-08-14 01:44](#error-2025-08-14t0144290000) |  | dev |  | 80.05s
[2025-08-16 01:58](#error-2025-08-16t0158550000) |  | dev |  | 30.06s
[2025-08-17 01:54](#error-2025-08-17t0154470000) | ATLAS_GENERAL_ERROR /api/atlas/v2/groups/68a122e0aafa9a76ca8bc966/flexClusters/test-acc-tf-c-4752284568328509775 | qa | flaky_500 | 1060.07s
[2025-08-18 01:34](#error-2025-08-18t0134210000) |  | dev | flaky_500 | 35.04s
[2025-08-19 01:34](#error-2025-08-19t0134300000) |  | dev |  | 75.04s
[2025-08-20 15:21](#error-2025-08-20t1521230000) |  | qa |  | 40.06s
[2025-08-21 05:27](#error-2025-08-21t0527020000) |  | dev | timeout | 17890.00s
[2025-08-23 01:37](#error-2025-08-23t0137510000) |  | dev |  | 61.02s
[2025-08-24 03:34](#error-2025-08-24t0334470000) |  | qa | timeout | 10933.03s
[2025-08-28 03:36](#error-2025-08-28t0336120000) |  | dev | timeout | 11195.01s
[2025-09-01 00:30](#error-2025-09-01t0030490000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | flaky_500 | 0.01s
[2025-09-01 14:54](#error-2025-09-01t1454380000) |  | dev |  | 1206.04s
[2025-09-01 16:04](#error-2025-09-01t1604550000) | ATLAS_GENERAL_ERROR /api/atlas/v2/groups/68b5b54c60c05d1e5a771765/flexClusters/test-acc-tf-c-6950844409756437604 | dev |  | 1718.03s
[2025-09-03 03:28](#error-2025-09-03t0328550000) |  | dev |  | 1170.05s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06

### Error 2025-08-06T02:05:37+00:00
GoTestErrorClassification(error_class='unknown',author='human',run_id='2025-08-06T02:05:37.429000+00:00-TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade',confidence=1.0,ts_when='28 days ago')

```
2025-08-06T02:05:37.4295805Z === RUN   TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade
2025-08-06T02:05:37.4371558Z === CONT  TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade
2025-08-06T02:05:37.4426325Z === NAME  TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade
2025-08-06T02:05:37.4427365Z     pre_check.go:40: Time before creating cluster: 2025-08-06T00:33:27.223126744Z, ProjectID: 6892a24beb5d0951971651f5, Cluster name: test-acc-tf-c-4567813620323913581
2025-08-06T02:05:37.4531958Z === NAME  TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade
2025-08-06T02:05:37.4532611Z     resource_advanced_cluster_test.go:157: Step 3/3 error: Error running apply: exit status 1
2025-08-06T02:05:37.4533034Z         
2025-08-06T02:05:37.4533296Z         Error: Error in flex upgrade
2025-08-06T02:05:37.4533553Z         
2025-08-06T02:05:37.4534072Z           with mongodbatlas_advanced_cluster.test,
2025-08-06T02:05:37.4534729Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-08-06T02:05:37.4535330Z           12: resource "mongodbatlas_advanced_cluster" "test" {
2025-08-06T02:05:37.4535636Z         
2025-08-06T02:05:37.4536082Z         cluster=test-acc-tf-c-4567813620323913581 didn't reach desired state: IDLE,
2025-08-06T02:05:37.4536579Z         error: couldn't find resource (21 retries)
2025-08-06T02:05:37.4543928Z    test_name=TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade test_terraform_path=/home/runner/work/_temp/874ad39d-b37e-41ff-8b98-56f9e5f50963/terraform test_step_number=3 test_working_directory=/tmp/plugintest2424387329
2025-08-06T02:05:37.4545276Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-08-06T02:05:37.4545709Z         
2025-08-06T02:05:37.4545964Z         Error: Error in flex delete
2025-08-06T02:05:37.4546222Z         
2025-08-06T02:05:37.4546631Z         cluster name: test-acc-tf-c-4567813620323913581, API error details:
2025-08-06T02:05:37.4547251Z         unexpected state 'UPDATING', wanted target 'DELETED'. last error: %!s(<nil>)
2025-08-06T02:05:37.4547802Z --- FAIL: TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade (964.38s)
```

- 2025-08-07

### Error 2025-08-07T02:02:55+00:00
```
2025-08-07T02:02:55.5251713Z === RUN   TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade
2025-08-07T02:02:55.5383964Z === CONT  TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade
2025-08-07T02:02:55.5480840Z === NAME  TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade
2025-08-07T02:02:55.5481764Z     pre_check.go:40: Time before creating cluster: 2025-08-07T00:37:46.844556049Z, ProjectID: 6893f3f19c9cc040e192fa18, Cluster name: test-acc-tf-c-8138615985145726379
2025-08-07T02:02:55.5495836Z    test_name=TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade test_terraform_path=/home/runner/work/_temp/02425291-933a-49e0-888e-4ace5c5c31e9/terraform test_working_directory=/tmp/plugintest3841976488 test_step_number=1
2025-08-07T02:02:55.5497004Z     resource_advanced_cluster_test.go:157: Step 1/3 error: Error running apply: exit status 1
2025-08-07T02:02:55.5497418Z         
2025-08-07T02:02:55.5497662Z         Error: Error in create
2025-08-07T02:02:55.5497898Z         
2025-08-07T02:02:55.5498213Z           with mongodbatlas_advanced_cluster.test,
2025-08-07T02:02:55.5498842Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-08-07T02:02:55.5499416Z           12: resource "mongodbatlas_advanced_cluster" "test" {
2025-08-07T02:02:55.5499712Z         
2025-08-07T02:02:55.5500107Z         cluster name: test-acc-tf-c-8138615985145726379, API error details:
2025-08-07T02:02:55.5500765Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6893f3f19c9cc040e192fa18/clusters
2025-08-07T02:02:55.5501278Z         POST: HTTP 400 Bad Request (Error code:
2025-08-07T02:02:55.5501803Z         "CANNOT_CREATE_FREE_CLUSTER_VIA_PUBLIC_API") Detail: Cannot create a cluster
2025-08-07T02:02:55.5502418Z         with instance size M0 via the public api: This project has reached the limit
2025-08-07T02:02:55.5503026Z         for the number of free clusters. Reason: Bad Request. Params: [This project
2025-08-07T02:02:55.5503625Z         has reached the limit for the number of free clusters], BadRequestDetail: 
2025-08-07T02:02:55.5504146Z --- FAIL: TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade (81.90s)
```

- 2025-08-08

### Error 2025-08-08T01:48:33+00:00
GoTestErrorClassification(error_class='real_test_failure',author='human',run_id='2025-08-08T01:48:33.182000+00:00-TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade',confidence=1.0,ts_when='27 days ago')

```
2025-08-08T01:48:33.1820862Z === RUN   TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade
2025-08-08T01:48:33.1882300Z === CONT  TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade
2025-08-08T01:48:33.2008941Z === NAME  TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade
2025-08-08T01:48:33.2009830Z     pre_check.go:40: Time before creating cluster: 2025-08-08T00:34:16.360375508Z, ProjectID: 689545457ffcc5766e4550db, Cluster name: test-acc-tf-c-6144585342119385019
2025-08-08T01:48:33.2039109Z    test_working_directory=/tmp/plugintest2862121763 test_name=TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade test_terraform_path=/home/runner/work/_temp/1c73f022-9a5d-42d4-baee-fc434485559a/terraform test_step_number=1
2025-08-08T01:48:33.2040275Z     resource_advanced_cluster_test.go:155: Step 1/3 error: Error running apply: exit status 1
2025-08-08T01:48:33.2040791Z         
2025-08-08T01:48:33.2041083Z         Error: Error in create
2025-08-08T01:48:33.2041326Z         
2025-08-08T01:48:33.2041641Z           with mongodbatlas_advanced_cluster.test,
2025-08-08T01:48:33.2042274Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-08-08T01:48:33.2042856Z           12: resource "mongodbatlas_advanced_cluster" "test" {
2025-08-08T01:48:33.2043164Z         
2025-08-08T01:48:33.2043730Z         cluster name: test-acc-tf-c-6144585342119385019, API error details:
2025-08-08T01:48:33.2044403Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/689545457ffcc5766e4550db/clusters
2025-08-08T01:48:33.2044915Z         POST: HTTP 400 Bad Request (Error code:
2025-08-08T01:48:33.2045441Z         "CANNOT_CREATE_FREE_CLUSTER_VIA_PUBLIC_API") Detail: Cannot create a cluster
2025-08-08T01:48:33.2046049Z         with instance size M0 via the public api: This project has reached the limit
2025-08-08T01:48:33.2046649Z         for the number of free clusters. Reason: Bad Request. Params: [This project
2025-08-08T01:48:33.2047377Z         has reached the limit for the number of free clusters], BadRequestDetail: 
2025-08-08T01:48:33.2047882Z --- FAIL: TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade (80.48s)
```

- 2025-08-09 PASS 41 minutes
- 2025-08-10

### Error 2025-08-10T01:54:32+00:00
```
2025-08-10T01:54:32.2079264Z === RUN   TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade
2025-08-10T01:54:32.2142259Z === CONT  TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade
2025-08-10T01:54:32.2196041Z === NAME  TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade
2025-08-10T01:54:32.2197047Z     pre_check.go:40: Time before creating cluster: 2025-08-10T00:35:35.434642922Z, ProjectID: 6897e8d7dacc1950586dc5cf, Cluster name: test-acc-tf-c-709925733819363342
2025-08-10T01:54:32.2210953Z    test_name=TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade test_terraform_path=/home/runner/work/_temp/5a49c8b5-022b-4137-88f1-fce87f808782/terraform test_working_directory=/tmp/plugintest2478382384
2025-08-10T01:54:32.2212066Z     resource_advanced_cluster_test.go:157: Step 1/3 error: Error running apply: exit status 1
2025-08-10T01:54:32.2212478Z         
2025-08-10T01:54:32.2212728Z         Error: Error in create
2025-08-10T01:54:32.2212970Z         
2025-08-10T01:54:32.2213291Z           with mongodbatlas_advanced_cluster.test,
2025-08-10T01:54:32.2213931Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-08-10T01:54:32.2214515Z           12: resource "mongodbatlas_advanced_cluster" "test" {
2025-08-10T01:54:32.2214828Z         
2025-08-10T01:54:32.2215231Z         cluster name: test-acc-tf-c-709925733819363342, API error details:
2025-08-10T01:54:32.2215884Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6897e8d7dacc1950586dc5cf/clusters
2025-08-10T01:54:32.2216401Z         POST: HTTP 400 Bad Request (Error code:
2025-08-10T01:54:32.2217039Z         "CANNOT_CREATE_FREE_CLUSTER_VIA_PUBLIC_API") Detail: Cannot create a cluster
2025-08-10T01:54:32.2217673Z         with instance size M0 via the public api: This project has reached the limit
2025-08-10T01:54:32.2218295Z         for the number of free clusters. Reason: Bad Request. Params: [This project
2025-08-10T01:54:32.2218912Z         has reached the limit for the number of free clusters], BadRequestDetail: 
2025-08-10T01:54:32.2219439Z --- FAIL: TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade (30.44s)
```

- 2025-08-11

### Error 2025-08-11T03:50:25+00:00
```
2025-08-11T03:50:25.9871116Z === RUN   TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade
2025-08-11T03:50:25.9972541Z === CONT  TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade
2025-08-11T03:50:26.0054223Z === NAME  TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade
2025-08-11T03:50:26.0055893Z     pre_check.go:40: Time before creating cluster: 2025-08-11T00:34:21.090045017Z, ProjectID: 68993a13f3d97116eb64445d, Cluster name: test-acc-tf-c-2887149000718442672
2025-08-11T03:50:26.0133951Z === NAME  TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade
2025-08-11T03:50:26.0135090Z     resource_advanced_cluster_test.go:157: Step 3/3 error: Error running apply: exit status 1
2025-08-11T03:50:26.0135794Z         
2025-08-11T03:50:26.0136243Z         Error: Error in flex upgrade
2025-08-11T03:50:26.0136677Z         
2025-08-11T03:50:26.0137238Z           with mongodbatlas_advanced_cluster.test,
2025-08-11T03:50:26.0138391Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-08-11T03:50:26.0139451Z           12: resource "mongodbatlas_advanced_cluster" "test" {
2025-08-11T03:50:26.0140182Z         
2025-08-11T03:50:26.0140754Z         cluster=test-acc-tf-c-2887149000718442672 didn't reach desired state: IDLE,
2025-08-11T03:50:26.0141241Z         error: couldn't find resource (21 retries)
2025-08-11T03:50:26.0148675Z    test_name=TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade
2025-08-11T03:50:26.0149334Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-08-11T03:50:26.0149751Z         
2025-08-11T03:50:26.0150151Z         Error: Error in flex delete
2025-08-11T03:50:26.0150399Z         
2025-08-11T03:50:26.0150956Z         cluster name: test-acc-tf-c-2887149000718442672, API error details:
2025-08-11T03:50:26.0151569Z         unexpected state 'UPDATING', wanted target 'DELETED'. last error: %!s(<nil>)
2025-08-11T03:50:26.0152100Z --- FAIL: TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade (1252.92s)
```

- 2025-08-12
  - FAIL a minute

### Error 2025-08-12T01:44:12+00:00
```
2025-08-12T01:44:12.6195838Z === RUN   TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade
2025-08-12T01:44:12.6265881Z === CONT  TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade
2025-08-12T01:44:12.6327323Z === NAME  TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade
2025-08-12T01:44:12.6328204Z     pre_check.go:40: Time before creating cluster: 2025-08-12T00:31:43.749480076Z, ProjectID: 689a8ab0b7927105c20ceba6, Cluster name: test-acc-tf-c-7369645413809617982
2025-08-12T01:44:12.6342466Z    test_working_directory=/tmp/plugintest3065677966
2025-08-12T01:44:12.6343013Z     resource_advanced_cluster_test.go:157: Step 1/3 error: Error running apply: exit status 1
2025-08-12T01:44:12.6343426Z         
2025-08-12T01:44:12.6343674Z         Error: Error in create
2025-08-12T01:44:12.6343914Z         
2025-08-12T01:44:12.6344226Z           with mongodbatlas_advanced_cluster.test,
2025-08-12T01:44:12.6344852Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-08-12T01:44:12.6345427Z           12: resource "mongodbatlas_advanced_cluster" "test" {
2025-08-12T01:44:12.6345727Z         
2025-08-12T01:44:12.6346129Z         cluster name: test-acc-tf-c-7369645413809617982, API error details:
2025-08-12T01:44:12.6346784Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/689a8ab0b7927105c20ceba6/clusters
2025-08-12T01:44:12.6347298Z         POST: HTTP 400 Bad Request (Error code:
2025-08-12T01:44:12.6347823Z         "CANNOT_CREATE_FREE_CLUSTER_VIA_PUBLIC_API") Detail: Cannot create a cluster
2025-08-12T01:44:12.6348437Z         with instance size M0 via the public api: This project has reached the limit
2025-08-12T01:44:12.6349054Z         for the number of free clusters. Reason: Bad Request. Params: [This project
2025-08-12T01:44:12.6349870Z         has reached the limit for the number of free clusters], BadRequestDetail: 
2025-08-12T01:44:12.6350392Z --- FAIL: TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade (80.43s)
```

  - PASS 26 minutes
- 2025-08-13

### Error 2025-08-13T01:51:59+00:00
```
2025-08-13T01:51:59.2334904Z === RUN   TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade
2025-08-13T01:51:59.2412526Z === CONT  TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade
2025-08-13T01:51:59.2473997Z === NAME  TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade
2025-08-13T01:51:59.2474878Z     pre_check.go:40: Time before creating cluster: 2025-08-13T00:32:29.292605991Z, ProjectID: 689bdc63230cf52517c8be7a, Cluster name: test-acc-tf-c-526676876126359040
2025-08-13T01:51:59.2489344Z   
2025-08-13T01:51:59.2489793Z     resource_advanced_cluster_test.go:157: Step 1/3 error: Error running apply: exit status 1
2025-08-13T01:51:59.2490212Z         
2025-08-13T01:51:59.2490456Z         Error: Error in create
2025-08-13T01:51:59.2490692Z         
2025-08-13T01:51:59.2491006Z           with mongodbatlas_advanced_cluster.test,
2025-08-13T01:51:59.2491649Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-08-13T01:51:59.2492226Z           12: resource "mongodbatlas_advanced_cluster" "test" {
2025-08-13T01:51:59.2492522Z         
2025-08-13T01:51:59.2492915Z         cluster name: test-acc-tf-c-526676876126359040, API error details:
2025-08-13T01:51:59.2493740Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/689bdc63230cf52517c8be7a/clusters
2025-08-13T01:51:59.2494262Z         POST: HTTP 400 Bad Request (Error code:
2025-08-13T01:51:59.2494788Z         "CANNOT_CREATE_FREE_CLUSTER_VIA_PUBLIC_API") Detail: Cannot create a cluster
2025-08-13T01:51:59.2495405Z         with instance size M0 via the public api: This project has reached the limit
2025-08-13T01:51:59.2496016Z         for the number of free clusters. Reason: Bad Request. Params: [This project
2025-08-13T01:51:59.2496620Z         has reached the limit for the number of free clusters], BadRequestDetail: 
2025-08-13T01:51:59.2497131Z --- FAIL: TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade (80.57s)
```

- 2025-08-14

### Error 2025-08-14T01:44:29+00:00
```
2025-08-14T01:44:29.6120593Z === RUN   TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade
2025-08-14T01:44:29.6195369Z === CONT  TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade
2025-08-14T01:44:29.6254327Z === NAME  TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade
2025-08-14T01:44:29.6255234Z     pre_check.go:40: Time before creating cluster: 2025-08-14T00:32:09.201056154Z, ProjectID: 689d2dcc92412a7721ae7f6b, Cluster name: test-acc-tf-c-3706593264505408665
2025-08-14T01:44:29.6269941Z   
2025-08-14T01:44:29.6270375Z     resource_advanced_cluster_test.go:157: Step 1/3 error: Error running apply: exit status 1
2025-08-14T01:44:29.6270784Z         
2025-08-14T01:44:29.6271030Z         Error: Error in create
2025-08-14T01:44:29.6271264Z         
2025-08-14T01:44:29.6271704Z           with mongodbatlas_advanced_cluster.test,
2025-08-14T01:44:29.6272413Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-08-14T01:44:29.6272994Z           12: resource "mongodbatlas_advanced_cluster" "test" {
2025-08-14T01:44:29.6273292Z         
2025-08-14T01:44:29.6273691Z         cluster name: test-acc-tf-c-3706593264505408665, API error details:
2025-08-14T01:44:29.6274357Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/689d2dcc92412a7721ae7f6b/clusters
2025-08-14T01:44:29.6274878Z         POST: HTTP 400 Bad Request (Error code:
2025-08-14T01:44:29.6275408Z         "CANNOT_CREATE_FREE_CLUSTER_VIA_PUBLIC_API") Detail: Cannot create a cluster
2025-08-14T01:44:29.6276029Z         with instance size M0 via the public api: This project has reached the limit
2025-08-14T01:44:29.6276643Z         for the number of free clusters. Reason: Bad Request. Params: [This project
2025-08-14T01:44:29.6277250Z         has reached the limit for the number of free clusters], BadRequestDetail: 
2025-08-14T01:44:29.6277773Z --- FAIL: TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade (80.54s)
```

- 2025-08-15: MISSING
- 2025-08-16

### Error 2025-08-16T01:58:55+00:00
```
2025-08-16T01:58:55.6980367Z === RUN   TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade
2025-08-16T01:58:55.7043307Z === CONT  TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade
2025-08-16T01:58:55.7114261Z === NAME  TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade
2025-08-16T01:58:55.7115978Z     pre_check.go:40: Time before creating cluster: 2025-08-16T00:30:30.836085269Z, ProjectID: 689fd08cabb59e7daa2ca783, Cluster name: test-acc-tf-c-6101184552135232972
2025-08-16T01:58:55.7141802Z    test_name=TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade test_terraform_path=/home/runner/work/_temp/f6967d50-3880-4957-82b0-83ea778adc6e/terraform test_working_directory=/tmp/plugintest2088585361
2025-08-16T01:58:55.7143888Z     resource_advanced_cluster_test.go:157: Step 1/3 error: Error running apply: exit status 1
2025-08-16T01:58:55.7144627Z         
2025-08-16T01:58:55.7145057Z         Error: Error in create
2025-08-16T01:58:55.7145473Z         
2025-08-16T01:58:55.7160080Z           with mongodbatlas_advanced_cluster.test,
2025-08-16T01:58:55.7161256Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-08-16T01:58:55.7162320Z           12: resource "mongodbatlas_advanced_cluster" "test" {
2025-08-16T01:58:55.7162862Z         
2025-08-16T01:58:55.7163597Z         cluster name: test-acc-tf-c-6101184552135232972, API error details:
2025-08-16T01:58:55.7164799Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/689fd08cabb59e7daa2ca783/clusters
2025-08-16T01:58:55.7165717Z         POST: HTTP 400 Bad Request (Error code:
2025-08-16T01:58:55.7166678Z         "CANNOT_CREATE_FREE_CLUSTER_VIA_PUBLIC_API") Detail: Cannot create a cluster
2025-08-16T01:58:55.7167996Z         with instance size M0 via the public api: This project has reached the limit
2025-08-16T01:58:55.7169105Z         for the number of free clusters. Reason: Bad Request. Params: [This project
2025-08-16T01:58:55.7170204Z         has reached the limit for the number of free clusters], BadRequestDetail: 
2025-08-16T01:58:55.7171141Z --- FAIL: TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade (30.57s)
```

- 2025-08-17

### Error 2025-08-17T01:54:47+00:00
```
2025-08-17T01:54:47.5266423Z === RUN   TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade
2025-08-17T01:54:47.5349938Z === CONT  TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade
2025-08-17T01:54:47.5406277Z === NAME  TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade
2025-08-17T01:54:47.5407166Z     pre_check.go:40: Time before creating cluster: 2025-08-17T00:33:48.182142373Z, ProjectID: 68a122e0aafa9a76ca8bc966, Cluster name: test-acc-tf-c-4752284568328509775
2025-08-17T01:54:47.5478923Z === NAME  TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade
2025-08-17T01:54:47.5479538Z     resource_advanced_cluster_test.go:157: Step 3/3 error: Error running apply: exit status 1
2025-08-17T01:54:47.5479939Z         
2025-08-17T01:54:47.5480189Z         Error: Error in flex upgrade
2025-08-17T01:54:47.5480439Z         
2025-08-17T01:54:47.5480901Z           with mongodbatlas_advanced_cluster.test,
2025-08-17T01:54:47.5481529Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-08-17T01:54:47.5482103Z           12: resource "mongodbatlas_advanced_cluster" "test" {
2025-08-17T01:54:47.5482396Z         
2025-08-17T01:54:47.5482833Z         cluster=test-acc-tf-c-4752284568328509775 didn't reach desired state: IDLE,
2025-08-17T01:54:47.5483319Z         error: couldn't find resource (21 retries)
2025-08-17T01:54:47.5494390Z    test_step_number=3 test_name=TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade
2025-08-17T01:54:47.5495092Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-08-17T01:54:47.5495511Z         
2025-08-17T01:54:47.5495762Z         Error: Error in flex delete
2025-08-17T01:54:47.5496019Z         
2025-08-17T01:54:47.5496416Z         cluster name: test-acc-tf-c-4752284568328509775, API error details:
2025-08-17T01:54:47.5497285Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68a122e0aafa9a76ca8bc966/flexClusters/test-acc-tf-c-4752284568328509775
2025-08-17T01:54:47.5498203Z         DELETE: HTTP 400 Bad Request (Error code: "ATLAS_GENERAL_ERROR") Detail:
2025-08-17T01:54:47.5498936Z         Reason: Cluster already requested to be deleted. Reason: Bad Request. Params:
2025-08-17T01:54:47.5499514Z         [Cluster already requested to be deleted], BadRequestDetail: 
2025-08-17T01:54:47.5500005Z --- FAIL: TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade (1060.70s)
```

- 2025-08-18

### Error 2025-08-18T01:34:21+00:00
```
2025-08-18T01:34:21.9623135Z === RUN   TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade
2025-08-18T01:34:21.9698084Z === CONT  TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade
2025-08-18T01:34:21.9742202Z === NAME  TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade
2025-08-18T01:34:21.9743080Z     pre_check.go:40: Time before creating cluster: 2025-08-18T00:33:27.038733022Z, ProjectID: 68a2745e17008424da1d643a, Cluster name: test-acc-tf-c-7512335301290105119
2025-08-18T01:34:21.9757067Z   
2025-08-18T01:34:21.9757500Z     resource_advanced_cluster_test.go:157: Step 1/3 error: Error running apply: exit status 1
2025-08-18T01:34:21.9757909Z         
2025-08-18T01:34:21.9758138Z         Error: Error in create
2025-08-18T01:34:21.9758362Z         
2025-08-18T01:34:21.9758663Z           with mongodbatlas_advanced_cluster.test,
2025-08-18T01:34:21.9759278Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-08-18T01:34:21.9759839Z           12: resource "mongodbatlas_advanced_cluster" "test" {
2025-08-18T01:34:21.9760234Z         
2025-08-18T01:34:21.9760622Z         cluster name: test-acc-tf-c-7512335301290105119, API error details:
2025-08-18T01:34:21.9761270Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68a2745e17008424da1d643a/clusters
2025-08-18T01:34:21.9761893Z         POST: HTTP 400 Bad Request (Error code:
2025-08-18T01:34:21.9762406Z         "CANNOT_CREATE_FREE_CLUSTER_VIA_PUBLIC_API") Detail: Cannot create a cluster
2025-08-18T01:34:21.9763007Z         with instance size M0 via the public api: This project has reached the limit
2025-08-18T01:34:21.9763600Z         for the number of free clusters. Reason: Bad Request. Params: [This project
2025-08-18T01:34:21.9764192Z         has reached the limit for the number of free clusters], BadRequestDetail: 
2025-08-18T01:34:21.9764701Z --- FAIL: TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade (35.43s)
```

- 2025-08-19

### Error 2025-08-19T01:34:30+00:00
```
2025-08-19T01:34:30.3108658Z === RUN   TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade
2025-08-19T01:34:30.3197456Z === CONT  TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade
2025-08-19T01:34:30.3259095Z === NAME  TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade
2025-08-19T01:34:30.3259983Z     pre_check.go:40: Time before creating cluster: 2025-08-19T00:31:49.334659822Z, ProjectID: 68a3c54007498377103b945e, Cluster name: test-acc-tf-c-4178800335120490066
2025-08-19T01:34:30.3274208Z   
2025-08-19T01:34:30.3274643Z     resource_advanced_cluster_test.go:157: Step 1/3 error: Error running apply: exit status 1
2025-08-19T01:34:30.3275041Z         
2025-08-19T01:34:30.3275281Z         Error: Error in create
2025-08-19T01:34:30.3275666Z         
2025-08-19T01:34:30.3275984Z           with mongodbatlas_advanced_cluster.test,
2025-08-19T01:34:30.3276625Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-08-19T01:34:30.3277199Z           12: resource "mongodbatlas_advanced_cluster" "test" {
2025-08-19T01:34:30.3277506Z         
2025-08-19T01:34:30.3277897Z         cluster name: test-acc-tf-c-4178800335120490066, API error details:
2025-08-19T01:34:30.3278536Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68a3c54007498377103b945e/clusters
2025-08-19T01:34:30.3279037Z         POST: HTTP 400 Bad Request (Error code:
2025-08-19T01:34:30.3279556Z         "CANNOT_CREATE_FREE_CLUSTER_VIA_PUBLIC_API") Detail: Cannot create a cluster
2025-08-19T01:34:30.3280162Z         with instance size M0 via the public api: This project has reached the limit
2025-08-19T01:34:30.3280758Z         for the number of free clusters. Reason: Bad Request. Params: [This project
2025-08-19T01:34:30.3281350Z         has reached the limit for the number of free clusters], BadRequestDetail: 
2025-08-19T01:34:30.3281859Z --- FAIL: TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade (75.42s)
```

- 2025-08-20
  - PASS 34 minutes
  - FAIL 40 seconds

### Error 2025-08-20T15:21:23+00:00
```
2025-08-20T15:21:23.7915977Z === RUN   TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade
2025-08-20T15:21:23.8037351Z === CONT  TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade
2025-08-20T15:21:23.8164569Z === NAME  TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade
2025-08-20T15:21:23.8166236Z     pre_check.go:40: Time before creating cluster: 2025-08-20T14:01:24.69422133Z, ProjectID: 68a5d49d5734606989a33cd5, Cluster name: test-acc-tf-c-2395712492012859920
2025-08-20T15:21:23.8191721Z    test_terraform_path=/home/runner/work/_temp/94637246-a6e5-4826-be7e-dfee7894c67a/terraform test_working_directory=/tmp/plugintest3087490064
2025-08-20T15:21:23.8193267Z     resource_advanced_cluster_test.go:157: Step 1/3 error: Error running apply: exit status 1
2025-08-20T15:21:23.8193999Z         
2025-08-20T15:21:23.8194430Z         Error: Error in create
2025-08-20T15:21:23.8194835Z         
2025-08-20T15:21:23.8195401Z           with mongodbatlas_advanced_cluster.test,
2025-08-20T15:21:23.8196557Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-08-20T15:21:23.8197619Z           12: resource "mongodbatlas_advanced_cluster" "test" {
2025-08-20T15:21:23.8211050Z         
2025-08-20T15:21:23.8211690Z         cluster name: test-acc-tf-c-2395712492012859920, API error details:
2025-08-20T15:21:23.8212392Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68a5d49d5734606989a33cd5/clusters
2025-08-20T15:21:23.8212940Z         POST: HTTP 400 Bad Request (Error code:
2025-08-20T15:21:23.8213525Z         "CANNOT_CREATE_FREE_CLUSTER_VIA_PUBLIC_API") Detail: Cannot create a cluster
2025-08-20T15:21:23.8214174Z         with instance size M0 via the public api: This project has reached the limit
2025-08-20T15:21:23.8214815Z         for the number of free clusters. Reason: Bad Request. Params: [This project
2025-08-20T15:21:23.8215448Z         has reached the limit for the number of free clusters], BadRequestDetail: 
2025-08-20T15:21:23.8216010Z --- FAIL: TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade (40.56s)
```

- 2025-08-21

### Error 2025-08-21T05:27:02+00:00
```
2025-08-21T05:27:02.5592410Z === RUN   TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade
2025-08-21T05:27:02.5659467Z === CONT  TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade
2025-08-21T05:27:02.5712022Z === NAME  TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade
2025-08-21T05:27:02.5712918Z     pre_check.go:40: Time before creating cluster: 2025-08-21T00:29:17.686816267Z, ProjectID: 68a667d92e1df52cf3cd975a, Cluster name: test-acc-tf-c-2496732992078069006
2025-08-21T05:27:02.5879309Z === NAME  TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade
2025-08-21T05:27:02.5880457Z     resource_advanced_cluster_test.go:157: Step 2/3 error: Error running apply: exit status 1
2025-08-21T05:27:02.5881185Z         
2025-08-21T05:27:02.5881990Z         Error: error upgrading to a flex cluster: test-acc-tf-c-2496732992078069006
2025-08-21T05:27:02.5882644Z         
2025-08-21T05:27:02.5883215Z           with mongodbatlas_advanced_cluster.test,
2025-08-21T05:27:02.5884352Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-08-21T05:27:02.5885420Z           12: resource "mongodbatlas_advanced_cluster" "test" {
2025-08-21T05:27:02.5885944Z         
2025-08-21T05:27:02.5886772Z         timeout while waiting for state to become 'IDLE' (last state: 'UPDATING',
2025-08-21T05:27:02.5887674Z         timeout: 3h0m0s)
2025-08-21T05:27:02.5888094Z panic: test timed out after 5h0m0s
2025-08-21T05:27:02.5888548Z 	running tests:
2025-08-21T05:27:02.5888094Z panic: test timed out after 5h0m0s
2025-08-21T05:27:02.5888548Z 	running tests:
2025-08-21T05:27:02.5889229Z 		TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade (4h58m10s)
```

- 2025-08-22: MISSING
- 2025-08-23

### Error 2025-08-23T01:37:51+00:00
```
2025-08-23T01:37:51.2220162Z === RUN   TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade
2025-08-23T01:37:51.2346095Z === CONT  TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade
2025-08-23T01:37:51.2420047Z === NAME  TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade
2025-08-23T01:37:51.2421048Z     pre_check.go:40: Time before creating cluster: 2025-08-23T00:29:46.514431219Z, ProjectID: 68a90ad3ad47257586c238b2, Cluster name: test-acc-tf-c-8808290760217024830
2025-08-23T01:37:51.2433806Z    test_step_number=1 test_terraform_path=/home/runner/work/_temp/7a2ec560-9bd0-4238-9f85-db59916a28fd/terraform
2025-08-23T01:37:51.2434512Z     resource_advanced_cluster_test.go:157: Step 1/3 error: Error running apply: exit status 1
2025-08-23T01:37:51.2434918Z         
2025-08-23T01:37:51.2435163Z         Error: Error in create
2025-08-23T01:37:51.2435397Z         
2025-08-23T01:37:51.2435704Z           with mongodbatlas_advanced_cluster.test,
2025-08-23T01:37:51.2436320Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-08-23T01:37:51.2437008Z           12: resource "mongodbatlas_advanced_cluster" "test" {
2025-08-23T01:37:51.2437315Z         
2025-08-23T01:37:51.2437702Z         cluster name: test-acc-tf-c-8808290760217024830, API error details:
2025-08-23T01:37:51.2438342Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68a90ad3ad47257586c238b2/clusters
2025-08-23T01:37:51.2438844Z         POST: HTTP 403 Forbidden (Error code:
2025-08-23T01:37:51.2439506Z         "ATLAS_RESOURCE_POLICIES_VIOLATION_NOT_AUTHORIZED") Detail: Invalid
2025-08-23T01:37:51.2440072Z         Configuration. Contains selections that are unavailable due to your
2025-08-23T01:37:51.2440631Z         organization's resource policies. Reason: Forbidden. Params: [],
2025-08-23T01:37:51.2441022Z         BadRequestDetail: 
2025-08-23T01:37:51.2441404Z --- FAIL: TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade (61.20s)
```

- 2025-08-24

### Error 2025-08-24T03:34:47+00:00
```
2025-08-24T03:34:47.1349029Z === RUN   TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade
2025-08-24T03:34:47.1482843Z === CONT  TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade
2025-08-24T03:34:47.1793202Z === NAME  TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade
2025-08-24T03:34:47.1794212Z     pre_check.go:40: Time before creating cluster: 2025-08-24T00:33:28.078721169Z, ProjectID: 68aa5d414192cd1cc589d8c5, Cluster name: test-acc-tf-c-5314973046227473669
2025-08-24T03:34:47.1912318Z === NAME  TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade
2025-08-24T03:34:47.1913054Z     resource_advanced_cluster_test.go:157: Step 2/3 error: Error running apply: exit status 1
2025-08-24T03:34:47.1913461Z         
2025-08-24T03:34:47.1913909Z         Error: error upgrading to a flex cluster: test-acc-tf-c-5314973046227473669
2025-08-24T03:34:47.1914276Z         
2025-08-24T03:34:47.1914588Z           with mongodbatlas_advanced_cluster.test,
2025-08-24T03:34:47.1915208Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-08-24T03:34:47.1915776Z           12: resource "mongodbatlas_advanced_cluster" "test" {
2025-08-24T03:34:47.1916073Z         
2025-08-24T03:34:47.1916525Z         timeout while waiting for state to become 'IDLE' (last state: 'UPDATING',
2025-08-24T03:34:47.1917090Z         timeout: 3h0m0s)
2025-08-24T03:34:47.1917484Z --- FAIL: TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade (10933.27s)
```

- 2025-08-25 PASS 34 minutes
- 2025-08-26 PASS 37 minutes
- 2025-08-27 PASS 55 minutes
- 2025-08-28

### Error 2025-08-28T03:36:12+00:00
```
2025-08-28T03:36:12.1361428Z === RUN   TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade
2025-08-28T03:36:12.1432848Z === CONT  TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade
2025-08-28T03:36:12.1539345Z === NAME  TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade
2025-08-28T03:36:12.1540238Z     pre_check.go:40: Time before creating cluster: 2025-08-28T00:30:50.628254399Z, ProjectID: 68afa28072e5d24729532ef7, Cluster name: test-acc-tf-c-1124662684689389216
2025-08-28T03:36:12.1659633Z === NAME  TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade
2025-08-28T03:36:12.1660255Z     resource_advanced_cluster_test.go:157: Step 2/3 error: Error running apply: exit status 1
2025-08-28T03:36:12.1660655Z         
2025-08-28T03:36:12.1661095Z         Error: error upgrading to a flex cluster: test-acc-tf-c-1124662684689389216
2025-08-28T03:36:12.1661457Z         
2025-08-28T03:36:12.1661775Z           with mongodbatlas_advanced_cluster.test,
2025-08-28T03:36:12.1662411Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-08-28T03:36:12.1662993Z           12: resource "mongodbatlas_advanced_cluster" "test" {
2025-08-28T03:36:12.1663291Z         
2025-08-28T03:36:12.1663727Z         timeout while waiting for state to become 'IDLE' (last state: 'UPDATING',
2025-08-28T03:36:12.1664130Z         timeout: 3h0m0s)
2025-08-28T03:36:12.1664527Z --- FAIL: TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade (11195.07s)
```

- 2025-08-29: MISSING
- 2025-08-30 PASS 36 minutes
- 2025-08-31 PASS 24 minutes
- 2025-09-01
  - FAIL a moment

### Error 2025-09-01T00:30:49+00:00
```
2025-09-01T00:30:49.6764620Z === RUN   TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade
2025-09-01T00:30:49.6765025Z     shared_resource.go:93: 
2025-09-01T00:30:49.6765891Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-09-01T00:30:49.6767589Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:93
2025-09-01T00:30:49.6769302Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:212
2025-09-01T00:30:49.6770992Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:92
2025-09-01T00:30:49.6773302Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_advanced_cluster_test.go:156
2025-09-01T00:30:49.6774533Z         	            				/opt/hostedtoolcache/go/1.24.6/x64/src/runtime/asm_amd64.s:1700
2025-09-01T00:30:49.6774994Z         	Error:      	Received unexpected error:
2025-09-01T00:30:49.6777622Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:49.6779006Z         	Test:       	TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade
2025-09-01T00:30:49.6781574Z         	Messages:   	Project creation failed: test-acc-tf-p-696772212695870500, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:49.6783061Z --- FAIL: TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade (0.15s)
```

  - PASS an hour
  - PASS an hour
  - PASS 34 minutes
  - PASS 35 minutes
  - FAIL 20 minutes

### Error 2025-09-01T14:54:38+00:00
```
2025-09-01T14:54:38.2890956Z === RUN   TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade
2025-09-01T14:54:38.3011218Z === CONT  TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade
2025-09-01T14:54:38.3070999Z === NAME  TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade
2025-09-01T14:54:38.3071907Z     pre_check.go:40: Time before creating cluster: 2025-09-01T13:45:22.257850819Z, ProjectID: 68b5a2a5172c1266118715fd, Cluster name: test-acc-tf-c-5289706998802706747
2025-09-01T14:54:38.3086358Z    test_working_directory=/tmp/plugintest689666085 test_step_number=2
2025-09-01T14:54:38.3140810Z === NAME  TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade
2025-09-01T14:54:38.3141430Z     resource_advanced_cluster_test.go:157: Step 3/3 error: Error running apply: exit status 1
2025-09-01T14:54:38.3141835Z         
2025-09-01T14:54:38.3142200Z         Error: Error in flex upgrade
2025-09-01T14:54:38.3142450Z         
2025-09-01T14:54:38.3142766Z           with mongodbatlas_advanced_cluster.test,
2025-09-01T14:54:38.3143401Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-09-01T14:54:38.3143972Z           12: resource "mongodbatlas_advanced_cluster" "test" {
2025-09-01T14:54:38.3144267Z         
2025-09-01T14:54:38.3144703Z         cluster=test-acc-tf-c-5289706998802706747 didn't reach desired state: IDLE,
2025-09-01T14:54:38.3145187Z         error: couldn't find resource (21 retries)
2025-09-01T14:54:38.3153397Z   
2025-09-01T14:54:38.3153844Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-09-01T14:54:38.3154263Z         
2025-09-01T14:54:38.3154508Z         Error: Error in flex delete
2025-09-01T14:54:38.3154754Z         
2025-09-01T14:54:38.3155146Z         cluster name: test-acc-tf-c-5289706998802706747, API error details:
2025-09-01T14:54:38.3155755Z         unexpected state 'UPDATING', wanted target 'DELETED'. last error: %!s(<nil>)
2025-09-01T14:54:38.3156289Z --- FAIL: TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade (1206.39s)
```

  - FAIL 28 minutes

### Error 2025-09-01T16:04:55+00:00
```
2025-09-01T16:04:55.7544098Z === RUN   TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade
2025-09-01T16:04:55.7673215Z === CONT  TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade
2025-09-01T16:04:55.7737543Z === NAME  TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade
2025-09-01T16:04:55.7738440Z     pre_check.go:40: Time before creating cluster: 2025-09-01T15:04:50.201901902Z, ProjectID: 68b5b54c60c05d1e5a771765, Cluster name: test-acc-tf-c-6950844409756437604
2025-09-01T16:04:55.7799139Z === NAME  TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade
2025-09-01T16:04:55.7799771Z     resource_advanced_cluster_test.go:157: Step 3/3 error: Error running apply: exit status 1
2025-09-01T16:04:55.7800182Z         
2025-09-01T16:04:55.7800444Z         Error: Error in flex upgrade
2025-09-01T16:04:55.7800696Z         
2025-09-01T16:04:55.7801014Z           with mongodbatlas_advanced_cluster.test,
2025-09-01T16:04:55.7801667Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-09-01T16:04:55.7802252Z           12: resource "mongodbatlas_advanced_cluster" "test" {
2025-09-01T16:04:55.7802561Z         
2025-09-01T16:04:55.7803003Z         cluster=test-acc-tf-c-6950844409756437604 didn't reach desired state: IDLE,
2025-09-01T16:04:55.7803492Z         error: couldn't find resource (21 retries)
2025-09-01T16:04:55.7815011Z    test_terraform_path=/home/runner/work/_temp/1ef1e2eb-5587-48ec-b2c2-cc026cba8bdd/terraform
2025-09-01T16:04:55.7815720Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-09-01T16:04:55.7816240Z         
2025-09-01T16:04:55.7816494Z         Error: Error in flex delete
2025-09-01T16:04:55.7816738Z         
2025-09-01T16:04:55.7817141Z         cluster name: test-acc-tf-c-6950844409756437604, API error details:
2025-09-01T16:04:55.7818019Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68b5b54c60c05d1e5a771765/flexClusters/test-acc-tf-c-6950844409756437604
2025-09-01T16:04:55.7818815Z         DELETE: HTTP 400 Bad Request (Error code: "ATLAS_GENERAL_ERROR") Detail:
2025-09-01T16:04:55.7819563Z         Reason: Cluster already requested to be deleted. Reason: Bad Request. Params:
2025-09-01T16:04:55.7820145Z         [Cluster already requested to be deleted], BadRequestDetail: 
2025-09-01T16:04:55.7820643Z --- FAIL: TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade (1718.34s)
```

  - PASS 35 minutes
- 2025-09-02 PASS 50 minutes
- 2025-09-03

### Error 2025-09-03T03:28:55+00:00
```
2025-09-03T03:28:55.8674469Z === RUN   TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade
2025-09-03T03:28:55.8748752Z === CONT  TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade
2025-09-03T03:28:55.8801731Z === NAME  TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade
2025-09-03T03:28:55.8802603Z     pre_check.go:40: Time before creating cluster: 2025-09-03T00:29:22.193126461Z, ProjectID: 68b78b2873bec4026cf7b1e9, Cluster name: test-acc-tf-c-6309151886089925977
2025-09-03T03:28:55.8842656Z === NAME  TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade
2025-09-03T03:28:55.8843284Z     resource_advanced_cluster_test.go:157: Step 3/3 error: Error running apply: exit status 1
2025-09-03T03:28:55.8843690Z         
2025-09-03T03:28:55.8843942Z         Error: Error in flex upgrade
2025-09-03T03:28:55.8844310Z         
2025-09-03T03:28:55.8844633Z           with mongodbatlas_advanced_cluster.test,
2025-09-03T03:28:55.8845265Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-09-03T03:28:55.8845848Z           12: resource "mongodbatlas_advanced_cluster" "test" {
2025-09-03T03:28:55.8846149Z         
2025-09-03T03:28:55.8846585Z         cluster=test-acc-tf-c-6309151886089925977 didn't reach desired state: IDLE,
2025-09-03T03:28:55.8847204Z         error: couldn't find resource (21 retries)
2025-09-03T03:28:55.8854488Z    test_step_number=3 test_working_directory=/tmp/plugintest3104782115 test_name=TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade
2025-09-03T03:28:55.8855357Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-09-03T03:28:55.8855781Z         
2025-09-03T03:28:55.8856030Z         Error: Error in flex delete
2025-09-03T03:28:55.8856277Z         
2025-09-03T03:28:55.8856671Z         cluster name: test-acc-tf-c-6309151886089925977, API error details:
2025-09-03T03:28:55.8857381Z         unexpected state 'UPDATING', wanted target 'DELETED'. last error: %!s(<nil>)
2025-09-03T03:28:55.8857923Z --- FAIL: TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade (1170.48s)
```

- 2025-09-04 PASS 39 minutes