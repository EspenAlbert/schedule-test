# advanced_cluster/advancedcluster/TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade Test Details
# Found 36 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, FAIL(x 21) PASS(x 15)
Success rate: 41.67%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-08-07 00:31](#error-2025-08-07t0031490000) | API Error ATLAS_RESOURCE_POLICIES_VIOLATION_NOT_AUTHORIZED /api/atlas/v2/groups/{groupId}/clusters | dev | real_test_failure | 53.09s
[2025-08-08 00:31](#error-2025-08-08t0031050000) | API Error CANNOT_CREATE_FREE_CLUSTER_VIA_PUBLIC_API /api/atlas/v2/groups/{groupId}/clusters | dev | real_test_failure | 35.04s
[2025-08-09 00:28](#error-2025-08-09t0028490000) | CANNOT_CREATE_FREE_CLUSTER_VIA_PUBLIC_API /api/atlas/v2/groups/6896963eda77bc53077053e4/clusters | dev |  | 70.04s
[2025-08-10 00:33](#error-2025-08-10t0033230000) | CANNOT_CREATE_FREE_CLUSTER_VIA_PUBLIC_API /api/atlas/v2/groups/6897e8d2dacc1950586dbf43/clusters | qa |  | 65.04s
[2025-08-11 00:32](#error-2025-08-11t0032270000) | ATLAS_RESOURCE_POLICIES_VIOLATION_NOT_AUTHORIZED /api/atlas/v2/groups/68993a1609b64000724cc4bc/clusters | dev |  | 11.00s
[2025-08-12 00:28](#error-2025-08-12t0028430000) | CANNOT_CREATE_FREE_CLUSTER_VIA_PUBLIC_API /api/atlas/v2/groups/689a8ab833922b33437be816/clusters | dev |  | 75.05s
[2025-08-14 00:29](#error-2025-08-14t0029080000) | CANNOT_CREATE_FREE_CLUSTER_VIA_PUBLIC_API /api/atlas/v2/groups/689d2dd2ef833d45fb6d14f8/clusters | dev |  | 25.05s
[2025-08-16 00:27](#error-2025-08-16t0027550000) | CANNOT_CREATE_FREE_CLUSTER_VIA_PUBLIC_API /api/atlas/v2/groups/689fd089abb59e7daa2c9ddb/clusters | dev |  | 75.04s
[2025-08-17 00:31](#error-2025-08-17t0031370000) | CANNOT_CREATE_FREE_CLUSTER_VIA_PUBLIC_API /api/atlas/v2/groups/68a122e6f746882a383c9cf9/clusters | qa |  | 15.04s
[2025-08-18 00:31](#error-2025-08-18t0031350000) | CANNOT_CREATE_FREE_CLUSTER_VIA_PUBLIC_API /api/atlas/v2/groups/68a2746520e441390d885bef/clusters | dev |  | 60.04s
[2025-08-20 00:27](#error-2025-08-20t0027250000) | CANNOT_USE_FLEX_CLUSTER_IN_CLUSTER_API /api/atlas/v2/groups/68a5166c552c1710e1fb279c/clusters/test-acc-tf-c-7673890514674051713 | dev |  | 1011.00s
[2025-08-21 00:27](#error-2025-08-21t0027210000) | CANNOT_CREATE_FREE_CLUSTER_VIA_PUBLIC_API /api/atlas/v2/groups/68a667e60ed8ff152ac7ecb0/clusters | dev |  | 70.04s
[2025-08-23 00:27](#error-2025-08-23t0027120000) | CANNOT_USE_NON_FLEX_CLUSTER_IN_FLEX_API /api/atlas/v2/groups/68a90adead47257586c2719a/flexClusters/test-acc-tf-c-8562903472110406600 | dev | timeout | 11072.02s
[2025-08-24 00:30](#error-2025-08-24t0030560000) | CANNOT_USE_NON_FLEX_CLUSTER_IN_FLEX_API /api/atlas/v2/groups/68aa5d3e4192cd1cc589d457/flexClusters/test-acc-tf-c-1632814535287999201 | qa | timeout | 11065.06s
[2025-08-25 00:29](#error-2025-08-25t0029120000) | CANNOT_USE_FLEX_CLUSTER_IN_CLUSTER_API /api/atlas/v2/groups/68abae5616afe76254e87890/clusters/test-acc-tf-c-435979405823425513 | dev |  | 1483.07s
[2025-08-27 00:27](#error-2025-08-27t0027410000) | CANNOT_USE_FLEX_CLUSTER_IN_CLUSTER_API /api/atlas/v2/groups/68ae50fbaa49ce49aab88100/clusters/test-acc-tf-c-6270177215151737472 | dev |  | 2397.02s
[2025-08-28 00:27](#error-2025-08-28t0027310000) | CANNOT_USE_NON_FLEX_CLUSTER_IN_FLEX_API /api/atlas/v2/groups/68afa270e2173c2b10934a86/flexClusters/test-acc-tf-c-6413423957953149982 | dev | timeout | 11075.02s
[2025-09-01 00:30](#error-2025-09-01t0030410000) |  | dev | timeout | 10821.00s
[2025-09-01 13:42](#error-2025-09-01t1342020000) | CANNOT_USE_FLEX_CLUSTER_IN_CLUSTER_API /api/atlas/v2/groups/68b5a2a9172c126611872132/clusters/test-acc-tf-c-6474566299923793398 | dev |  | 1496.04s
[2025-09-03 00:26](#error-2025-09-03t0026180000) | CANNOT_USE_FLEX_CLUSTER_IN_CLUSTER_API /api/atlas/v2/groups/68b78b28a89cf4184d26f099/clusters/test-acc-tf-c-5599210234147744779 | dev |  | 976.04s
[2025-09-04 00:26](#error-2025-09-04t0026290000) | CANNOT_USE_FLEX_CLUSTER_IN_CLUSTER_API /api/atlas/v2/groups/68b8dcb3d8b60049b936d6c0/clusters/test-acc-tf-c-1554695614228743002 | dev |  | 1522.00s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 50 minutes
- 2025-08-07

### Error 2025-08-07T00:31:49+00:00
GoTestErrorClassification(error_class='real_test_failure',author='similar',run_id='2025-08-07T00:31:49.251000+00:00-TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade',confidence=1.0,ts_when='28 days ago')
API Error ATLAS_RESOURCE_POLICIES_VIOLATION_NOT_AUTHORIZED /api/atlas/v2/groups/{groupId}/clusters
```
2025-08-07T00:31:49.2514733Z === RUN   TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade
2025-08-07T00:35:02.1556145Z === CONT  TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade
2025-08-07T00:35:52.1612539Z === NAME  TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade
2025-08-07T00:35:52.1613861Z     pre_check.go:40: Time before creating cluster: 2025-08-07T00:35:52.161006229Z, ProjectID: 6893f3f09c9cc040e192f9b7, Cluster name: test-acc-tf-c-2277062507928687525
2025-08-07T00:35:55.9605597Z   
2025-08-07T00:35:55.9606151Z     resource_advanced_cluster_test.go:157: Step 1/3 error: Error running apply: exit status 1
2025-08-07T00:35:55.9606645Z         
2025-08-07T00:35:55.9609884Z         Error: error creating advanced cluster: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6893f3f09c9cc040e192f9b7/clusters POST: HTTP 403 Forbidden (Error code: "ATLAS_RESOURCE_POLICIES_VIOLATION_NOT_AUTHORIZED") Detail: Invalid Configuration. Contains selections that are unavailable due to your organization's resource policies. Reason: Forbidden. Params: [], BadRequestDetail: 
2025-08-07T00:35:55.9611365Z         
2025-08-07T00:35:55.9611684Z           with mongodbatlas_advanced_cluster.test,
2025-08-07T00:35:55.9612294Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-08-07T00:35:55.9613168Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-08-07T00:35:55.9613478Z         
2025-08-07T00:35:56.0140964Z --- FAIL: TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade (53.86s)
```

- 2025-08-08

### Error 2025-08-08T00:31:05+00:00
GoTestErrorClassification(error_class='real_test_failure',author='similar',run_id='2025-08-08T00:31:05.523000+00:00-TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade',confidence=1.0,ts_when='27 days ago')
API Error CANNOT_CREATE_FREE_CLUSTER_VIA_PUBLIC_API /api/atlas/v2/groups/{groupId}/clusters
```
2025-08-08T00:31:05.5231073Z === RUN   TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade
2025-08-08T00:31:59.3115621Z === CONT  TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade
2025-08-08T00:32:34.3148918Z === NAME  TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade
2025-08-08T00:32:34.3150406Z     pre_check.go:40: Time before creating cluster: 2025-08-08T00:32:34.314632302Z, ProjectID: 6895454713642126f901ef43, Cluster name: test-acc-tf-c-129182051018124096
2025-08-08T00:32:34.6836314Z   
2025-08-08T00:32:34.6836961Z     resource_advanced_cluster_test.go:155: Step 1/3 error: Error running apply: exit status 1
2025-08-08T00:32:34.6837467Z         
2025-08-08T00:32:34.6840402Z         Error: error creating advanced cluster: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6895454713642126f901ef43/clusters POST: HTTP 400 Bad Request (Error code: "CANNOT_CREATE_FREE_CLUSTER_VIA_PUBLIC_API") Detail: Cannot create a cluster with instance size M0 via the public api: This project has reached the limit for the number of free clusters. Reason: Bad Request. Params: [This project has reached the limit for the number of free clusters], BadRequestDetail: 
2025-08-08T00:32:34.6842255Z         
2025-08-08T00:32:34.6842577Z           with mongodbatlas_advanced_cluster.test,
2025-08-08T00:32:34.6843226Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-08-08T00:32:34.6843822Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-08-08T00:32:34.6844127Z         
2025-08-08T00:32:34.7300215Z --- FAIL: TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade (35.42s)
```

- 2025-08-09

### Error 2025-08-09T00:28:49+00:00
```
2025-08-09T00:28:49.4180513Z === RUN   TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade
2025-08-09T00:29:58.3237875Z === CONT  TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade
2025-08-09T00:31:08.3153188Z === NAME  TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade
2025-08-09T00:31:08.3154381Z     pre_check.go:40: Time before creating cluster: 2025-08-09T00:31:08.315078881Z, ProjectID: 6896963eda77bc53077053e4, Cluster name: test-acc-tf-c-1212648281991988137
2025-08-09T00:31:08.6563687Z    test_step_number=1 test_working_directory=/tmp/plugintest2055061813 test_name=TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade test_terraform_path=/home/runner/work/_temp/629b98a5-3243-4292-bf57-3b1de8060bd5/terraform
2025-08-09T00:31:08.6565336Z     resource_advanced_cluster_test.go:157: Step 1/3 error: Error running apply: exit status 1
2025-08-09T00:31:08.6565763Z         
2025-08-09T00:31:08.6568611Z         Error: error creating advanced cluster: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6896963eda77bc53077053e4/clusters POST: HTTP 400 Bad Request (Error code: "CANNOT_CREATE_FREE_CLUSTER_VIA_PUBLIC_API") Detail: Cannot create a cluster with instance size M0 via the public api: This project has reached the limit for the number of free clusters. Reason: Bad Request. Params: [This project has reached the limit for the number of free clusters], BadRequestDetail: 
2025-08-09T00:31:08.6570310Z         
2025-08-09T00:31:08.6570633Z           with mongodbatlas_advanced_cluster.test,
2025-08-09T00:31:08.6571257Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-08-09T00:31:08.6571829Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-08-09T00:31:08.6572137Z         
2025-08-09T00:31:08.6988595Z --- FAIL: TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade (70.38s)
```

- 2025-08-10

### Error 2025-08-10T00:33:23+00:00
```
2025-08-10T00:33:23.8202119Z === RUN   TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade
2025-08-10T00:34:27.0096704Z === CONT  TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade
2025-08-10T00:35:32.0044601Z === NAME  TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade
2025-08-10T00:35:32.0046599Z     pre_check.go:40: Time before creating cluster: 2025-08-10T00:35:32.004128983Z, ProjectID: 6897e8d2dacc1950586dbf43, Cluster name: test-acc-tf-c-4397637439382210554
2025-08-10T00:35:32.3847643Z   
2025-08-10T00:35:32.3848205Z     resource_advanced_cluster_test.go:157: Step 1/3 error: Error running apply: exit status 1
2025-08-10T00:35:32.3848730Z         
2025-08-10T00:35:32.3851512Z         Error: error creating advanced cluster: https://cloud-qa.mongodb.com/api/atlas/v2/groups/6897e8d2dacc1950586dbf43/clusters POST: HTTP 400 Bad Request (Error code: "CANNOT_CREATE_FREE_CLUSTER_VIA_PUBLIC_API") Detail: Cannot create a cluster with instance size M0 via the public api: This project has reached the limit for the number of free clusters. Reason: Bad Request. Params: [This project has reached the limit for the number of free clusters], BadRequestDetail: 
2025-08-10T00:35:32.3853726Z         
2025-08-10T00:35:32.3854050Z           with mongodbatlas_advanced_cluster.test,
2025-08-10T00:35:32.3854677Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-08-10T00:35:32.3855247Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-08-10T00:35:32.3855545Z         
2025-08-10T00:35:32.4283194Z --- FAIL: TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade (65.42s)
```

- 2025-08-11

### Error 2025-08-11T00:32:27+00:00
```
2025-08-11T00:32:27.1022712Z === RUN   TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade
2025-08-11T00:33:33.3882743Z === CONT  TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade
2025-08-11T00:33:43.3900881Z === NAME  TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade
2025-08-11T00:33:43.3902544Z     pre_check.go:40: Time before creating cluster: 2025-08-11T00:33:43.389797741Z, ProjectID: 68993a1609b64000724cc4bc, Cluster name: test-acc-tf-c-3737890766272966609
2025-08-11T00:33:43.7662245Z   
2025-08-11T00:33:44.3580409Z === NAME  TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade
2025-08-11T00:33:44.3581498Z     resource_advanced_cluster_test.go:157: Step 1/3 error: Error running apply: exit status 1
2025-08-11T00:33:44.3582196Z         
2025-08-11T00:33:44.3585943Z         Error: error creating advanced cluster: https://cloud-dev.mongodb.com/api/atlas/v2/groups/68993a1609b64000724cc4bc/clusters POST: HTTP 403 Forbidden (Error code: "ATLAS_RESOURCE_POLICIES_VIOLATION_NOT_AUTHORIZED") Detail: Invalid Configuration. Contains selections that are unavailable due to your organization's resource policies. Reason: Forbidden. Params: [], BadRequestDetail: 
2025-08-11T00:33:44.3587757Z         
2025-08-11T00:33:44.3588097Z           with mongodbatlas_advanced_cluster.test,
2025-08-11T00:33:44.3588771Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-08-11T00:33:44.3589390Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-08-11T00:33:44.3589708Z         
2025-08-11T00:33:44.4038694Z --- FAIL: TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade (11.02s)
```

- 2025-08-12
  - FAIL a minute

### Error 2025-08-12T00:28:43+00:00
```
2025-08-12T00:28:43.1579691Z === RUN   TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade
2025-08-12T00:29:43.1305228Z === CONT  TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade
2025-08-12T00:30:58.0847804Z === NAME  TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade
2025-08-12T00:30:58.0850177Z     pre_check.go:40: Time before creating cluster: 2025-08-12T00:30:58.084440554Z, ProjectID: 689a8ab833922b33437be816, Cluster name: test-acc-tf-c-3929976312886214935
2025-08-12T00:30:58.5485349Z    test_step_number=1 test_name=TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade
2025-08-12T00:30:58.5486191Z     resource_advanced_cluster_test.go:157: Step 1/3 error: Error running apply: exit status 1
2025-08-12T00:30:58.5486707Z         
2025-08-12T00:30:58.5489486Z         Error: error creating advanced cluster: https://cloud-dev.mongodb.com/api/atlas/v2/groups/689a8ab833922b33437be816/clusters POST: HTTP 400 Bad Request (Error code: "CANNOT_CREATE_FREE_CLUSTER_VIA_PUBLIC_API") Detail: Cannot create a cluster with instance size M0 via the public api: This project has reached the limit for the number of free clusters. Reason: Bad Request. Params: [This project has reached the limit for the number of free clusters], BadRequestDetail: 
2025-08-12T00:30:58.5491067Z         
2025-08-12T00:30:58.5491406Z           with mongodbatlas_advanced_cluster.test,
2025-08-12T00:30:58.5492067Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-08-12T00:30:58.5492860Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-08-12T00:30:58.5493174Z         
2025-08-12T00:30:58.5947362Z --- FAIL: TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade (75.49s)
```

  - PASS 29 minutes
- 2025-08-13 PASS 37 minutes
- 2025-08-14

### Error 2025-08-14T00:29:08+00:00
```
2025-08-14T00:29:08.8592770Z === RUN   TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade
2025-08-14T00:30:18.4059682Z === CONT  TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade
2025-08-14T00:30:43.4066842Z === NAME  TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade
2025-08-14T00:30:43.4068746Z     pre_check.go:40: Time before creating cluster: 2025-08-14T00:30:43.406344435Z, ProjectID: 689d2dd2ef833d45fb6d14f8, Cluster name: test-acc-tf-c-5959030630815501478
2025-08-14T00:30:43.8826023Z    test_name=TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade test_terraform_path=/home/runner/work/_temp/6ed6bb8a-5c87-4267-96a4-118e18a375e3/terraform test_step_number=1
2025-08-14T00:30:43.8827732Z     resource_advanced_cluster_test.go:157: Step 1/3 error: Error running apply: exit status 1
2025-08-14T00:30:43.8828456Z         
2025-08-14T00:30:43.8832853Z         Error: error creating advanced cluster: https://cloud-dev.mongodb.com/api/atlas/v2/groups/689d2dd2ef833d45fb6d14f8/clusters POST: HTTP 400 Bad Request (Error code: "CANNOT_CREATE_FREE_CLUSTER_VIA_PUBLIC_API") Detail: Cannot create a cluster with instance size M0 via the public api: This project has reached the limit for the number of free clusters. Reason: Bad Request. Params: [This project has reached the limit for the number of free clusters], BadRequestDetail: 
2025-08-14T00:30:43.8835918Z         
2025-08-14T00:30:43.8836445Z           with mongodbatlas_advanced_cluster.test,
2025-08-14T00:30:43.8837638Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-08-14T00:30:43.8838683Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-08-14T00:30:43.8865270Z         
2025-08-14T00:30:43.9303346Z --- FAIL: TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade (25.53s)
```

- 2025-08-15: MISSING
- 2025-08-16

### Error 2025-08-16T00:27:55+00:00
```
2025-08-16T00:27:55.5242967Z === RUN   TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade
2025-08-16T00:29:12.9313783Z === CONT  TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade
2025-08-16T00:30:27.9154459Z === NAME  TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade
2025-08-16T00:30:27.9156542Z     pre_check.go:40: Time before creating cluster: 2025-08-16T00:30:27.915200335Z, ProjectID: 689fd089abb59e7daa2c9ddb, Cluster name: test-acc-tf-c-1709178605207775733
2025-08-16T00:30:28.2659133Z   
2025-08-16T00:30:28.2659935Z     resource_advanced_cluster_test.go:157: Step 1/3 error: Error running apply: exit status 1
2025-08-16T00:30:28.2660673Z         
2025-08-16T00:30:28.2664419Z         Error: error creating advanced cluster: https://cloud-dev.mongodb.com/api/atlas/v2/groups/689fd089abb59e7daa2c9ddb/clusters POST: HTTP 400 Bad Request (Error code: "CANNOT_CREATE_FREE_CLUSTER_VIA_PUBLIC_API") Detail: Cannot create a cluster with instance size M0 via the public api: This project has reached the limit for the number of free clusters. Reason: Bad Request. Params: [This project has reached the limit for the number of free clusters], BadRequestDetail: 
2025-08-16T00:30:28.2666482Z         
2025-08-16T00:30:28.2666961Z           with mongodbatlas_advanced_cluster.test,
2025-08-16T00:30:28.2667914Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-08-16T00:30:28.2668834Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-08-16T00:30:28.2669152Z         
2025-08-16T00:30:28.3225572Z --- FAIL: TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade (75.40s)
```

- 2025-08-17

### Error 2025-08-17T00:31:37+00:00
```
2025-08-17T00:31:37.3759608Z === RUN   TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade
2025-08-17T00:32:50.8942650Z === CONT  TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade
2025-08-17T00:33:05.8878885Z === NAME  TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade
2025-08-17T00:33:05.8880241Z     pre_check.go:40: Time before creating cluster: 2025-08-17T00:33:05.887602469Z, ProjectID: 68a122e6f746882a383c9cf9, Cluster name: test-acc-tf-c-8465877440013702956
2025-08-17T00:33:06.2052710Z   
2025-08-17T00:33:06.2053180Z     resource_advanced_cluster_test.go:157: Step 1/3 error: Error running apply: exit status 1
2025-08-17T00:33:06.2053607Z         
2025-08-17T00:33:06.2056887Z         Error: error creating advanced cluster: https://cloud-qa.mongodb.com/api/atlas/v2/groups/68a122e6f746882a383c9cf9/clusters POST: HTTP 400 Bad Request (Error code: "CANNOT_CREATE_FREE_CLUSTER_VIA_PUBLIC_API") Detail: Cannot create a cluster with instance size M0 via the public api: This project has reached the limit for the number of free clusters. Reason: Bad Request. Params: [This project has reached the limit for the number of free clusters], BadRequestDetail: 
2025-08-17T00:33:06.2058496Z         
2025-08-17T00:33:06.2058817Z           with mongodbatlas_advanced_cluster.test,
2025-08-17T00:33:06.2059445Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-08-17T00:33:06.2060018Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-08-17T00:33:06.2060316Z         
2025-08-17T00:33:06.2566887Z --- FAIL: TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade (15.37s)
```

- 2025-08-18

### Error 2025-08-18T00:31:35+00:00
```
2025-08-18T00:31:35.0282475Z === RUN   TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade
2025-08-18T00:32:45.8152495Z === CONT  TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade
2025-08-18T00:33:45.7673600Z === NAME  TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade
2025-08-18T00:33:45.7677132Z     pre_check.go:40: Time before creating cluster: 2025-08-18T00:33:45.767014435Z, ProjectID: 68a2746520e441390d885bef, Cluster name: test-acc-tf-c-2096562620862841632
2025-08-18T00:33:46.1327842Z    test_name=TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade test_terraform_path=/home/runner/work/_temp/7300829b-3103-48a8-ad0e-d61e0997548a/terraform test_working_directory=/tmp/plugintest3538244102 test_step_number=1
2025-08-18T00:33:46.1329930Z     resource_advanced_cluster_test.go:157: Step 1/3 error: Error running apply: exit status 1
2025-08-18T00:33:46.1330525Z         
2025-08-18T00:33:46.1333780Z         Error: error creating advanced cluster: https://cloud-dev.mongodb.com/api/atlas/v2/groups/68a2746520e441390d885bef/clusters POST: HTTP 400 Bad Request (Error code: "CANNOT_CREATE_FREE_CLUSTER_VIA_PUBLIC_API") Detail: Cannot create a cluster with instance size M0 via the public api: This project has reached the limit for the number of free clusters. Reason: Bad Request. Params: [This project has reached the limit for the number of free clusters], BadRequestDetail: 
2025-08-18T00:33:46.1335754Z         
2025-08-18T00:33:46.1336086Z           with mongodbatlas_advanced_cluster.test,
2025-08-18T00:33:46.1336778Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-08-18T00:33:46.1337398Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-08-18T00:33:46.1337714Z         
2025-08-18T00:33:46.1801560Z --- FAIL: TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade (60.41s)
```

- 2025-08-19 PASS 39 minutes
- 2025-08-20
  - FAIL 16 minutes

### Error 2025-08-20T00:27:25+00:00
```
2025-08-20T00:27:25.8136941Z === RUN   TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade
2025-08-20T00:28:29.0305199Z === CONT  TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade
2025-08-20T00:28:39.0266755Z === NAME  TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade
2025-08-20T00:28:39.0268505Z     pre_check.go:40: Time before creating cluster: 2025-08-20T00:28:39.026381932Z, ProjectID: 68a5166c552c1710e1fb279c, Cluster name: test-acc-tf-c-7673890514674051713
2025-08-20T00:45:19.8422647Z === NAME  TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade
2025-08-20T00:45:19.8423435Z     resource_advanced_cluster_test.go:157: Step 3/3 error: Error running apply: exit status 1
2025-08-20T00:45:19.8423979Z         
2025-08-20T00:45:19.8424771Z         Error: error updating advanced cluster (test-acc-tf-c-7673890514674051713): couldn't find resource (21 retries)
2025-08-20T00:45:19.8425398Z         
2025-08-20T00:45:19.8425943Z           with mongodbatlas_advanced_cluster.test,
2025-08-20T00:45:19.8426616Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-08-20T00:45:19.8427271Z           12: 	resource "mongodbatlas_advanced_cluster" "test" {
2025-08-20T00:45:19.8427667Z         
2025-08-20T00:45:20.0743279Z    test_name=TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade test_terraform_path=/home/runner/work/_temp/3ecf3243-c170-407b-a20d-8f7a7a535dc8/terraform test_step_number=3
2025-08-20T00:45:20.0745498Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-08-20T00:45:20.0746451Z         
2025-08-20T00:45:20.0750744Z         Error: error deleting advanced cluster (test-acc-tf-c-7673890514674051713): https://cloud-dev.mongodb.com/api/atlas/v2/groups/68a5166c552c1710e1fb279c/clusters/test-acc-tf-c-7673890514674051713 DELETE: HTTP 400 Bad Request (Error code: "CANNOT_USE_FLEX_CLUSTER_IN_CLUSTER_API") Detail: Flex cluster test-acc-tf-c-7673890514674051713 cannot be used in the Cluster API. Reason: Bad Request. Params: [test-acc-tf-c-7673890514674051713], BadRequestDetail: 
2025-08-20T00:45:20.0753582Z         
2025-08-20T00:45:20.0754220Z --- FAIL: TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade (1011.05s)
```

  - PASS 31 minutes
- 2025-08-21

### Error 2025-08-21T00:27:21+00:00
```
2025-08-21T00:27:21.2316951Z === RUN   TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade
2025-08-21T00:28:16.0647871Z === CONT  TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade
2025-08-21T00:29:26.0373506Z === NAME  TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade
2025-08-21T00:29:26.0375196Z     pre_check.go:40: Time before creating cluster: 2025-08-21T00:29:26.037005452Z, ProjectID: 68a667e60ed8ff152ac7ecb0, Cluster name: test-acc-tf-c-8335559737354581742
2025-08-21T00:29:26.4310234Z   
2025-08-21T00:29:26.4310835Z     resource_advanced_cluster_test.go:157: Step 1/3 error: Error running apply: exit status 1
2025-08-21T00:29:26.4311265Z         
2025-08-21T00:29:26.4314120Z         Error: error creating advanced cluster: https://cloud-dev.mongodb.com/api/atlas/v2/groups/68a667e60ed8ff152ac7ecb0/clusters POST: HTTP 400 Bad Request (Error code: "CANNOT_CREATE_FREE_CLUSTER_VIA_PUBLIC_API") Detail: Cannot create a cluster with instance size M0 via the public api: This project has reached the limit for the number of free clusters. Reason: Bad Request. Params: [This project has reached the limit for the number of free clusters], BadRequestDetail: 
2025-08-21T00:29:26.4315708Z         
2025-08-21T00:29:26.4316038Z           with mongodbatlas_advanced_cluster.test,
2025-08-21T00:29:26.4316681Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-08-21T00:29:26.4317278Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-08-21T00:29:26.4337712Z         
2025-08-21T00:29:26.4818562Z --- FAIL: TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade (70.42s)
```

- 2025-08-22: MISSING
- 2025-08-23

### Error 2025-08-23T00:27:12+00:00
```
2025-08-23T00:27:12.6308344Z === RUN   TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade
2025-08-23T00:28:26.3071107Z === CONT  TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade
2025-08-23T00:29:36.2976173Z === NAME  TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade
2025-08-23T00:29:36.2978047Z     pre_check.go:40: Time before creating cluster: 2025-08-23T00:29:36.297286886Z, ProjectID: 68a90adead47257586c2719a, Cluster name: test-acc-tf-c-8562903472110406600
2025-08-23T03:32:58.1955903Z === NAME  TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade
2025-08-23T03:32:58.1956774Z     resource_advanced_cluster_test.go:157: Step 2/3 error: Error running apply: exit status 1
2025-08-23T03:32:58.1957273Z         
2025-08-23T03:32:58.1958346Z         Error: error updating advanced cluster (test-acc-tf-c-8562903472110406600): timeout while waiting for state to become 'IDLE' (last state: 'UPDATING', timeout: 3h0m0s)
2025-08-23T03:32:58.1959300Z         
2025-08-23T03:32:58.1959628Z           with mongodbatlas_advanced_cluster.test,
2025-08-23T03:32:58.1960491Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-08-23T03:32:58.1961081Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-08-23T03:32:58.1961386Z         
2025-08-23T03:32:58.5200618Z    test_terraform_path=/home/runner/work/_temp/4cb0e8d4-60a5-44f0-ae1c-b013ca1c85e7/terraform test_name=TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade
2025-08-23T03:32:58.5201744Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-08-23T03:32:58.5202192Z         
2025-08-23T03:32:58.5204519Z         Error: error deleting a flex cluster (test-acc-tf-c-8562903472110406600): https://cloud-dev.mongodb.com/api/atlas/v2/groups/68a90adead47257586c2719a/flexClusters/test-acc-tf-c-8562903472110406600 DELETE: HTTP 400 Bad Request (Error code: "CANNOT_USE_NON_FLEX_CLUSTER_IN_FLEX_API") Detail: Cannot use non-flex cluster test-acc-tf-c-8562903472110406600 in the flex API. Reason: Bad Request. Params: [test-acc-tf-c-8562903472110406600], BadRequestDetail: 
2025-08-23T03:32:58.5206073Z         
2025-08-23T03:32:58.5206435Z --- FAIL: TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade (11072.21s)
```

- 2025-08-24

### Error 2025-08-24T00:30:56+00:00
```
2025-08-24T00:30:56.3149954Z === RUN   TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade
2025-08-24T00:32:02.0861107Z === CONT  TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade
2025-08-24T00:33:17.0074042Z === NAME  TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade
2025-08-24T00:33:17.0075412Z     pre_check.go:40: Time before creating cluster: 2025-08-24T00:33:17.007134852Z, ProjectID: 68aa5d3e4192cd1cc589d457, Cluster name: test-acc-tf-c-1632814535287999201
2025-08-24T03:36:27.4174326Z === NAME  TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade
2025-08-24T03:36:27.4175089Z     resource_advanced_cluster_test.go:157: Step 2/3 error: Error running apply: exit status 1
2025-08-24T03:36:27.4175576Z         
2025-08-24T03:36:27.4176972Z         Error: error updating advanced cluster (test-acc-tf-c-1632814535287999201): timeout while waiting for state to become 'IDLE' (last state: 'UPDATING', timeout: 3h0m0s)
2025-08-24T03:36:27.4177832Z         
2025-08-24T03:36:27.4178271Z           with mongodbatlas_advanced_cluster.test,
2025-08-24T03:36:27.4178960Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-08-24T03:36:27.4179603Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-08-24T03:36:27.4179999Z         
2025-08-24T03:36:27.6115405Z    test_name=TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade
2025-08-24T03:36:27.6116098Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-08-24T03:36:27.6116519Z         
2025-08-24T03:36:27.6118802Z         Error: error deleting a flex cluster (test-acc-tf-c-1632814535287999201): https://cloud-qa.mongodb.com/api/atlas/v2/groups/68aa5d3e4192cd1cc589d457/flexClusters/test-acc-tf-c-1632814535287999201 DELETE: HTTP 400 Bad Request (Error code: "CANNOT_USE_NON_FLEX_CLUSTER_IN_FLEX_API") Detail: Cannot use non-flex cluster test-acc-tf-c-1632814535287999201 in the flex API. Reason: Bad Request. Params: [test-acc-tf-c-1632814535287999201], BadRequestDetail: 
2025-08-24T03:36:27.6120296Z         
2025-08-24T03:36:27.6120647Z --- FAIL: TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade (11065.59s)
```

- 2025-08-25

### Error 2025-08-25T00:29:12+00:00
```
2025-08-25T00:29:12.8939657Z === RUN   TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade
2025-08-25T00:30:27.1275946Z === CONT  TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade
2025-08-25T00:31:57.1389773Z === NAME  TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade
2025-08-25T00:31:57.1391031Z     pre_check.go:40: Time before creating cluster: 2025-08-25T00:31:57.138668881Z, ProjectID: 68abae5616afe76254e87890, Cluster name: test-acc-tf-c-435979405823425513
2025-08-25T00:55:10.6171109Z === NAME  TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade
2025-08-25T00:55:10.6172464Z     resource_advanced_cluster_test.go:157: Step 3/3 error: Error running apply: exit status 1
2025-08-25T00:55:10.6173138Z         
2025-08-25T00:55:10.6174090Z         Error: error updating advanced cluster (test-acc-tf-c-435979405823425513): couldn't find resource (21 retries)
2025-08-25T00:55:10.6174801Z         
2025-08-25T00:55:10.6175153Z           with mongodbatlas_advanced_cluster.test,
2025-08-25T00:55:10.6175932Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-08-25T00:55:10.6176620Z           12: 	resource "mongodbatlas_advanced_cluster" "test" {
2025-08-25T00:55:10.6177007Z         
2025-08-25T00:55:10.8176004Z    test_working_directory=/tmp/plugintest3709996150 test_step_number=3 test_name=TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade test_terraform_path=/home/runner/work/_temp/4397621d-dd5e-4287-b6ed-d0f9cac6856f/terraform
2025-08-25T00:55:10.8177225Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-08-25T00:55:10.8177651Z         
2025-08-25T00:55:10.8180138Z         Error: error deleting advanced cluster (test-acc-tf-c-435979405823425513): https://cloud-dev.mongodb.com/api/atlas/v2/groups/68abae5616afe76254e87890/clusters/test-acc-tf-c-435979405823425513 DELETE: HTTP 400 Bad Request (Error code: "CANNOT_USE_FLEX_CLUSTER_IN_CLUSTER_API") Detail: Flex cluster test-acc-tf-c-435979405823425513 cannot be used in the Cluster API. Reason: Bad Request. Params: [test-acc-tf-c-435979405823425513], BadRequestDetail: 
2025-08-25T00:55:10.8181662Z         
2025-08-25T00:55:10.8182005Z --- FAIL: TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade (1483.69s)
```

- 2025-08-26 PASS 50 minutes
- 2025-08-27

### Error 2025-08-27T00:27:41+00:00
```
2025-08-27T00:27:41.7740256Z === RUN   TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade
2025-08-27T00:28:59.6996415Z === CONT  TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade
2025-08-27T00:30:14.6643496Z === NAME  TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade
2025-08-27T00:30:14.6645115Z     pre_check.go:40: Time before creating cluster: 2025-08-27T00:30:14.664091269Z, ProjectID: 68ae50fbaa49ce49aab88100, Cluster name: test-acc-tf-c-6270177215151737472
2025-08-27T01:08:56.7247747Z === NAME  TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade
2025-08-27T01:08:56.7248536Z     resource_advanced_cluster_test.go:157: Step 3/3 error: Error running apply: exit status 1
2025-08-27T01:08:56.7248971Z         
2025-08-27T01:08:56.7249757Z         Error: error updating advanced cluster (test-acc-tf-c-6270177215151737472): couldn't find resource (21 retries)
2025-08-27T01:08:56.7250347Z         
2025-08-27T01:08:56.7250804Z           with mongodbatlas_advanced_cluster.test,
2025-08-27T01:08:56.7251466Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-08-27T01:08:56.7252137Z           12: 	resource "mongodbatlas_advanced_cluster" "test" {
2025-08-27T01:08:56.7252440Z         
2025-08-27T01:08:56.9133828Z    test_working_directory=/tmp/plugintest4267755388
2025-08-27T01:08:56.9134440Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-08-27T01:08:56.9134861Z         
2025-08-27T01:08:56.9137180Z         Error: error deleting advanced cluster (test-acc-tf-c-6270177215151737472): https://cloud-dev.mongodb.com/api/atlas/v2/groups/68ae50fbaa49ce49aab88100/clusters/test-acc-tf-c-6270177215151737472 DELETE: HTTP 400 Bad Request (Error code: "CANNOT_USE_FLEX_CLUSTER_IN_CLUSTER_API") Detail: Flex cluster test-acc-tf-c-6270177215151737472 cannot be used in the Cluster API. Reason: Bad Request. Params: [test-acc-tf-c-6270177215151737472], BadRequestDetail: 
2025-08-27T01:08:56.9138723Z         
2025-08-27T01:08:56.9139073Z --- FAIL: TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade (2397.21s)
```

- 2025-08-28

### Error 2025-08-28T00:27:31+00:00
```
2025-08-28T00:27:31.9131654Z === RUN   TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade
2025-08-28T00:28:33.8942494Z === CONT  TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade
2025-08-28T00:28:58.8639058Z === NAME  TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade
2025-08-28T00:28:58.8641565Z     pre_check.go:40: Time before creating cluster: 2025-08-28T00:28:58.863559795Z, ProjectID: 68afa270e2173c2b10934a86, Cluster name: test-acc-tf-c-6413423957953149982
2025-08-28T03:33:08.9019455Z === NAME  TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade
2025-08-28T03:33:08.9020893Z     resource_advanced_cluster_test.go:157: Step 2/3 error: Error running apply: exit status 1
2025-08-28T03:33:08.9021604Z         
2025-08-28T03:33:08.9022523Z         Error: error updating advanced cluster (test-acc-tf-c-6413423957953149982): timeout while waiting for state to become 'IDLE' (last state: 'UPDATING', timeout: 3h0m0s)
2025-08-28T03:33:08.9023337Z         
2025-08-28T03:33:08.9023912Z           with mongodbatlas_advanced_cluster.test,
2025-08-28T03:33:08.9024671Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-08-28T03:33:08.9025286Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-08-28T03:33:08.9025600Z         
2025-08-28T03:33:09.1147288Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-08-28T03:33:09.1147740Z         
2025-08-28T03:33:09.1150368Z         Error: error deleting a flex cluster (test-acc-tf-c-6413423957953149982): https://cloud-dev.mongodb.com/api/atlas/v2/groups/68afa270e2173c2b10934a86/flexClusters/test-acc-tf-c-6413423957953149982 DELETE: HTTP 400 Bad Request (Error code: "CANNOT_USE_NON_FLEX_CLUSTER_IN_FLEX_API") Detail: Cannot use non-flex cluster test-acc-tf-c-6413423957953149982 in the flex API. Reason: Bad Request. Params: [test-acc-tf-c-6413423957953149982], BadRequestDetail: 
2025-08-28T03:33:09.1152015Z         
2025-08-28T03:33:09.1152396Z --- FAIL: TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade (11075.24s)
```

- 2025-08-29: MISSING
- 2025-08-30 PASS 39 minutes
- 2025-08-31 PASS 35 minutes
- 2025-09-01
  - FAIL 3 hours

### Error 2025-09-01T00:30:41+00:00
```
2025-09-01T00:30:41.5977971Z === RUN   TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade
2025-09-01T00:30:44.5148749Z === CONT  TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade
2025-09-01T00:31:04.5067256Z === NAME  TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade
2025-09-01T00:31:04.5068566Z     pre_check.go:40: Time before creating cluster: 2025-09-01T00:31:04.506419056Z, ProjectID: 68b4e92e46ef690a79d70c0c, Cluster name: test-acc-tf-c-747000210672378264
2025-09-01T03:31:05.4662456Z === NAME  TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade
2025-09-01T03:31:05.4663306Z     resource_advanced_cluster_test.go:157: Step 1/3 error: Error running apply: exit status 1
2025-09-01T03:31:05.4663874Z         
2025-09-01T03:31:05.4664799Z         Error: error creating advanced cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2025-09-01T03:31:05.4665563Z         
2025-09-01T03:31:05.4665901Z           with mongodbatlas_advanced_cluster.test,
2025-09-01T03:31:05.4666660Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-09-01T03:31:05.4667355Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-09-01T03:31:05.4667688Z         
2025-09-01T03:31:05.5109776Z --- FAIL: TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade (10821.01s)
```

  - PASS 52 minutes
  - PASS an hour
  - PASS 34 minutes
  - PASS 38 minutes
  - FAIL 24 minutes

### Error 2025-09-01T13:42:02+00:00
```
2025-09-01T13:42:02.6461097Z === RUN   TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade
2025-09-01T13:43:28.2631623Z === CONT  TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade
2025-09-01T13:43:58.2537188Z === NAME  TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade
2025-09-01T13:43:58.2539334Z     pre_check.go:40: Time before creating cluster: 2025-09-01T13:43:58.25336207Z, ProjectID: 68b5a2a9172c126611872132, Cluster name: test-acc-tf-c-6474566299923793398
2025-09-01T14:08:24.3460228Z === NAME  TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade
2025-09-01T14:08:24.3460984Z     resource_advanced_cluster_test.go:157: Step 3/3 error: Error running apply: exit status 1
2025-09-01T14:08:24.3461560Z         
2025-09-01T14:08:24.3462348Z         Error: error updating advanced cluster (test-acc-tf-c-6474566299923793398): couldn't find resource (21 retries)
2025-09-01T14:08:24.3463058Z         
2025-09-01T14:08:24.3463434Z           with mongodbatlas_advanced_cluster.test,
2025-09-01T14:08:24.3464121Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-09-01T14:08:24.3464937Z           12: 	resource "mongodbatlas_advanced_cluster" "test" {
2025-09-01T14:08:24.3465337Z         
2025-09-01T14:08:24.6475279Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-09-01T14:08:24.6475712Z         
2025-09-01T14:08:24.6478009Z         Error: error deleting advanced cluster (test-acc-tf-c-6474566299923793398): https://cloud-dev.mongodb.com/api/atlas/v2/groups/68b5a2a9172c126611872132/clusters/test-acc-tf-c-6474566299923793398 DELETE: HTTP 400 Bad Request (Error code: "CANNOT_USE_FLEX_CLUSTER_IN_CLUSTER_API") Detail: Flex cluster test-acc-tf-c-6474566299923793398 cannot be used in the Cluster API. Reason: Bad Request. Params: [test-acc-tf-c-6474566299923793398], BadRequestDetail: 
2025-09-01T14:08:24.6479535Z         
2025-09-01T14:08:24.6479882Z --- FAIL: TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade (1496.40s)
```

  - PASS 35 minutes
  - PASS 37 minutes
- 2025-09-02 PASS 55 minutes
- 2025-09-03

### Error 2025-09-03T00:26:18+00:00
```
2025-09-03T00:26:18.4103567Z === RUN   TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade
2025-09-03T00:27:34.8528423Z === CONT  TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade
2025-09-03T00:27:44.8542253Z === NAME  TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade
2025-09-03T00:27:44.8544706Z     pre_check.go:40: Time before creating cluster: 2025-09-03T00:27:44.853885274Z, ProjectID: 68b78b28a89cf4184d26f099, Cluster name: test-acc-tf-c-5599210234147744779
2025-09-03T00:43:51.0023466Z === NAME  TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade
2025-09-03T00:43:51.0024299Z     resource_advanced_cluster_test.go:157: Step 3/3 error: Error running apply: exit status 1
2025-09-03T00:43:51.0024963Z         
2025-09-03T00:43:51.0025963Z         Error: error updating advanced cluster (test-acc-tf-c-5599210234147744779): couldn't find resource (21 retries)
2025-09-03T00:43:51.0026787Z         
2025-09-03T00:43:51.0027186Z           with mongodbatlas_advanced_cluster.test,
2025-09-03T00:43:51.0028071Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-09-03T00:43:51.0028904Z           12: 	resource "mongodbatlas_advanced_cluster" "test" {
2025-09-03T00:43:51.0029616Z         
2025-09-03T00:43:51.2441402Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-09-03T00:43:51.2441907Z         
2025-09-03T00:43:51.2444670Z         Error: error deleting advanced cluster (test-acc-tf-c-5599210234147744779): https://cloud-dev.mongodb.com/api/atlas/v2/groups/68b78b28a89cf4184d26f099/clusters/test-acc-tf-c-5599210234147744779 DELETE: HTTP 400 Bad Request (Error code: "CANNOT_USE_FLEX_CLUSTER_IN_CLUSTER_API") Detail: Flex cluster test-acc-tf-c-5599210234147744779 cannot be used in the Cluster API. Reason: Bad Request. Params: [test-acc-tf-c-5599210234147744779], BadRequestDetail: 
2025-09-03T00:43:51.2446449Z         
2025-09-03T00:43:51.2446825Z --- FAIL: TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade (976.39s)
```

- 2025-09-04

### Error 2025-09-04T00:26:29+00:00
```
2025-09-04T00:26:29.6542609Z === RUN   TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade
2025-09-04T00:27:48.8146112Z === CONT  TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade
2025-09-04T00:28:58.7894607Z === NAME  TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade
2025-09-04T00:28:58.7896934Z     pre_check.go:40: Time before creating cluster: 2025-09-04T00:28:58.789186829Z, ProjectID: 68b8dcb3d8b60049b936d6c0, Cluster name: test-acc-tf-c-1554695614228743002
2025-09-04T00:53:10.6212708Z === NAME  TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade
2025-09-04T00:53:10.6213559Z     resource_advanced_cluster_test.go:157: Step 3/3 error: Error running apply: exit status 1
2025-09-04T00:53:10.6214021Z         
2025-09-04T00:53:10.6214796Z         Error: error updating advanced cluster (test-acc-tf-c-1554695614228743002): couldn't find resource (21 retries)
2025-09-04T00:53:10.6215414Z         
2025-09-04T00:53:10.6215755Z           with mongodbatlas_advanced_cluster.test,
2025-09-04T00:53:10.6216515Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-09-04T00:53:10.6217219Z           12: 	resource "mongodbatlas_advanced_cluster" "test" {
2025-09-04T00:53:10.6217637Z         
2025-09-04T00:53:10.8395481Z    test_name=TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade test_terraform_path=/home/runner/work/_temp/427a7b05-237d-46dc-80b1-f08d939a1e60/terraform test_working_directory=/tmp/plugintest4075298172
2025-09-04T00:53:10.8396671Z     panic.go:615: Error running post-test destroy, there may be dangling resources: exit status 1
2025-09-04T00:53:10.8397118Z         
2025-09-04T00:53:10.8399459Z         Error: error deleting advanced cluster (test-acc-tf-c-1554695614228743002): https://cloud-dev.mongodb.com/api/atlas/v2/groups/68b8dcb3d8b60049b936d6c0/clusters/test-acc-tf-c-1554695614228743002 DELETE: HTTP 400 Bad Request (Error code: "CANNOT_USE_FLEX_CLUSTER_IN_CLUSTER_API") Detail: Flex cluster test-acc-tf-c-1554695614228743002 cannot be used in the Cluster API. Reason: Bad Request. Params: [test-acc-tf-c-1554695614228743002], BadRequestDetail: 
2025-09-04T00:53:10.8401039Z         
2025-09-04T00:53:10.8401602Z --- FAIL: TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade (1522.04s)
```
