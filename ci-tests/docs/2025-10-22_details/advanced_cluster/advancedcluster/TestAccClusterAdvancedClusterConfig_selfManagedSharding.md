# advanced_cluster/advancedcluster/TestAccClusterAdvancedClusterConfig_selfManagedSharding Test Details
# Found 44 TestRuns in dev, qa from 2025-09-23 to 2025-10-22 from master branch: 1 unique tests, PASS(x 40) FAIL(x 4)
Success rate: 90.91%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-02 00:26](#error-2025-10-02t0026200000) |  | dev |  | 10804.05s
[2025-10-05 00:29](#error-2025-10-05t0029490000) |  | qa |  | 4.09s
[2025-10-07 00:27](#error-2025-10-07t0027440000) |  | dev |  | 10804.08s
[2025-10-20 10:26](#error-2025-10-20t1026350000) | OUT_OF_CAPACITY /api/atlas/v2/groups/68f60e595a13b66d7cb6ac22/clusters | dev | out_of_capacity | 3.06s

## Timeline
- 2025-09-22: MISSING
- 2025-09-23 PASS 16 minutes
- 2025-09-24 PASS 15 minutes
- 2025-09-25 PASS 18 minutes
- 2025-09-26 PASS 30 minutes
- 2025-09-27 PASS 27 minutes
- 2025-09-28 PASS 26 minutes
- 2025-09-29
  - PASS 33 minutes
  - PASS 15 minutes
- 2025-09-30
  - PASS 19 minutes
  - PASS 14 minutes
  - PASS 16 minutes
  - PASS 19 minutes
  - PASS 17 minutes
- 2025-10-01
  - PASS 20 minutes
  - PASS 25 minutes
  - PASS an hour
  - PASS 37 minutes
  - PASS 35 minutes
  - PASS 16 minutes
  - PASS 31 minutes
  - PASS 16 minutes
- 2025-10-02

### Error 2025-10-02T00:26:20+00:00
```
2025-10-02T00:26:20.7390534Z === RUN   TestAccClusterAdvancedClusterConfig_selfManagedSharding
2025-10-02T00:28:04.4631704Z === CONT  TestAccClusterAdvancedClusterConfig_selfManagedSharding
2025-10-02T03:28:08.8952274Z === NAME  TestAccClusterAdvancedClusterConfig_selfManagedSharding
2025-10-02T03:28:08.8953190Z     resource_test.go:636: Step 1/3 error: Error running apply: exit status 1
2025-10-02T03:28:08.8953668Z         
2025-10-02T03:28:08.8953991Z         Error: Error in create
2025-10-02T03:28:08.8954278Z         
2025-10-02T03:28:08.8954600Z           with mongodbatlas_advanced_cluster.test,
2025-10-02T03:28:08.8955331Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-10-02T03:28:08.8956014Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-10-02T03:28:08.8956347Z         
2025-10-02T03:28:08.8957043Z         cluster=test-acc-tf-c-6760426032199382065 didn't reach desired state: IDLE,
2025-10-02T03:28:08.8957615Z         error: context deadline exceeded
2025-10-02T03:28:08.9427652Z --- FAIL: TestAccClusterAdvancedClusterConfig_selfManagedSharding (10804.48s)
```

- 2025-10-03 PASS 23 minutes
- 2025-10-04 PASS 2 hours
- 2025-10-05

### Error 2025-10-05T00:29:49+00:00
```
2025-10-05T00:29:49.9076396Z === RUN   TestAccClusterAdvancedClusterConfig_selfManagedSharding
2025-10-05T00:31:26.4204846Z === CONT  TestAccClusterAdvancedClusterConfig_selfManagedSharding
2025-10-05T00:31:31.0323093Z === NAME  TestAccClusterAdvancedClusterConfig_selfManagedSharding
2025-10-05T00:31:31.0435111Z     resource_test.go:636: Step 1/3 error: Error running apply: exit status 1
2025-10-05T00:31:31.0447788Z         
2025-10-05T00:31:31.0448255Z         Error: Error in create
2025-10-05T00:31:31.0448667Z         
2025-10-05T00:31:31.0451179Z           with mongodbatlas_advanced_cluster.test,
2025-10-05T00:31:31.0454661Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-10-05T00:31:31.0460814Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-10-05T00:31:31.0461373Z         
2025-10-05T00:31:31.0479386Z         cluster name: test-acc-tf-c-4507527775623444417, API error details:
2025-10-05T00:31:31.0480948Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68e1bbfcf758b3057a1af26f/clusters
2025-10-05T00:31:31.0554814Z         POST: HTTP 403 Forbidden (Error code:
2025-10-05T00:31:31.0556002Z         "ATLAS_RESOURCE_POLICIES_VIOLATION_NOT_AUTHORIZED") Detail: Invalid
2025-10-05T00:31:31.0557109Z         Configuration. Contains selections that are unavailable due to your
2025-10-05T00:31:31.0558184Z         organization's resource policies. Reason: Forbidden. Params: [],
2025-10-05T00:31:31.0558878Z         BadRequestDetail: 
2025-10-05T00:31:31.3002847Z --- FAIL: TestAccClusterAdvancedClusterConfig_selfManagedSharding (4.89s)
```

- 2025-10-06 PASS 16 minutes
- 2025-10-07

### Error 2025-10-07T00:27:44+00:00
```
2025-10-07T00:27:44.7836099Z === RUN   TestAccClusterAdvancedClusterConfig_selfManagedSharding
2025-10-07T00:30:14.9684211Z === CONT  TestAccClusterAdvancedClusterConfig_selfManagedSharding
2025-10-07T03:30:19.7166041Z === NAME  TestAccClusterAdvancedClusterConfig_selfManagedSharding
2025-10-07T03:30:19.7166875Z     resource_test.go:636: Step 1/3 error: Error running apply: exit status 1
2025-10-07T03:30:19.7167508Z         
2025-10-07T03:30:19.7167947Z         Error: Error in create
2025-10-07T03:30:19.7168358Z         
2025-10-07T03:30:19.7168941Z           with mongodbatlas_advanced_cluster.test,
2025-10-07T03:30:19.7170036Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-10-07T03:30:19.7170760Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-10-07T03:30:19.7171073Z         
2025-10-07T03:30:19.7171655Z         cluster=test-acc-tf-c-6111894760043624942 didn't reach desired state: IDLE,
2025-10-07T03:30:19.7172273Z         error: context deadline exceeded
2025-10-07T03:30:19.7742152Z --- FAIL: TestAccClusterAdvancedClusterConfig_selfManagedSharding (10804.82s)
```

- 2025-10-08 PASS 18 minutes
- 2025-10-09 PASS 2 hours
- 2025-10-10 PASS 21 minutes
- 2025-10-11 PASS 19 minutes
- 2025-10-12 PASS 2 hours
- 2025-10-13 PASS 21 minutes
- 2025-10-14 PASS 19 minutes
- 2025-10-15 PASS 19 minutes
- 2025-10-16 PASS 39 minutes
- 2025-10-17 PASS 19 minutes
- 2025-10-18 PASS 17 minutes
- 2025-10-19 PASS 18 minutes
- 2025-10-20
  - PASS an hour
  - FAIL 3 seconds

### Error 2025-10-20T10:26:35+00:00
```
2025-10-20T10:26:35.5288386Z === RUN   TestAccClusterAdvancedClusterConfig_selfManagedSharding
2025-10-20T10:28:27.7207041Z === CONT  TestAccClusterAdvancedClusterConfig_selfManagedSharding
2025-10-20T10:28:31.2373999Z === NAME  TestAccClusterAdvancedClusterConfig_selfManagedSharding
2025-10-20T10:28:31.2375051Z     resource_test.go:626: Step 1/3 error: Error running apply: exit status 1
2025-10-20T10:28:31.2375858Z         
2025-10-20T10:28:31.2376309Z         Error: Error in create
2025-10-20T10:28:31.2376751Z         
2025-10-20T10:28:31.2377336Z           with mongodbatlas_advanced_cluster.test,
2025-10-20T10:28:31.2378523Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-10-20T10:28:31.2379629Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-10-20T10:28:31.2380205Z         
2025-10-20T10:28:31.2380951Z         cluster name: test-acc-tf-c-4577537490085527530, API error details:
2025-10-20T10:28:31.2382370Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68f60e595a13b66d7cb6ac22/clusters
2025-10-20T10:28:31.2383610Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2025-10-20T10:28:31.2384782Z         region is currently out of capacity for the requested instance size. Reason:
2025-10-20T10:28:31.2385792Z         Conflict. Params: [], BadRequestDetail: 
2025-10-20T10:28:31.2724615Z    test_name=TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset test_terraform_path=/home/runner/work/_temp/ed2ad7b8-1a74-4ed2-bb7d-ab8de99af10f/terraform test_working_directory=/tmp/plugintest3534466364
2025-10-20T10:28:31.3303990Z --- FAIL: TestAccClusterAdvancedClusterConfig_selfManagedSharding (3.61s)
```

- 2025-10-21 PASS 16 minutes
- 2025-10-22
  - PASS 27 minutes
  - PASS 17 minutes