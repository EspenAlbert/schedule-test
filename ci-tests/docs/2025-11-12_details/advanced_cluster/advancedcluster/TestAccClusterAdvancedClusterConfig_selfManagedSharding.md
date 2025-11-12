# advanced_cluster/advancedcluster/TestAccClusterAdvancedClusterConfig_selfManagedSharding Test Details
# Found 42 TestRuns in dev, qa from 2025-10-04 to 2025-11-12 from master branch: 1 unique tests, PASS(x 37) FAIL(x 5)
Success rate: 88.10%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-05 00:29](#error-2025-10-05t0029490000) |  | qa |  | 4.09s
[2025-10-07 00:27](#error-2025-10-07t0027440000) |  | dev |  | 10804.08s
[2025-10-20 10:26](#error-2025-10-20t1026350000) | OUT_OF_CAPACITY /api/atlas/v2/groups/68f60e595a13b66d7cb6ac22/clusters | dev | out_of_capacity | 3.06s
[2025-10-30 00:28](#error-2025-10-30t0028200000) |  | dev | timeout | 11841.01s
[2025-11-02 00:29](#error-2025-11-02t0029450000) |  | qa |  | 5.02s

## Timeline
- 2025-10-03: MISSING
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
- 2025-10-23 PASS 28 minutes
- 2025-10-24 PASS 18 minutes
- 2025-10-25 PASS 23 minutes
- 2025-10-26 PASS 18 minutes
- 2025-10-27 PASS an hour
- 2025-10-28 PASS 19 minutes
- 2025-10-29 PASS 28 minutes
- 2025-10-30

### Error 2025-10-30T00:28:20+00:00
```
2025-10-30T00:28:20.8268595Z === RUN   TestAccClusterAdvancedClusterConfig_selfManagedSharding
2025-10-30T00:29:52.4607350Z === CONT  TestAccClusterAdvancedClusterConfig_selfManagedSharding
2025-10-30T03:47:13.6018144Z === NAME  TestAccClusterAdvancedClusterConfig_selfManagedSharding
2025-10-30T03:47:13.6019075Z     resource_test.go:626: Error running post-test destroy, there may be dangling resources: exit status 1
2025-10-30T03:47:13.6019692Z         
2025-10-30T03:47:13.6020016Z         Error: Error in delete
2025-10-30T03:47:13.6020665Z         
2025-10-30T03:47:13.6021232Z         cluster=test-acc-tf-c-8255530908908067890 didn't reach desired state:
2025-10-30T03:47:13.6022258Z         DELETED, error: timeout while waiting for state to become 'DELETED' (last
2025-10-30T03:47:13.6022736Z         state: 'DELETING', timeout: 3h0m0s)
2025-10-30T03:47:13.6023160Z --- FAIL: TestAccClusterAdvancedClusterConfig_selfManagedSharding (11841.14s)
```

- 2025-10-31 PASS 20 minutes
- 2025-11-01: MISSING
- 2025-11-02

### Error 2025-11-02T00:29:45+00:00
```
2025-11-02T00:29:45.9166665Z === RUN   TestAccClusterAdvancedClusterConfig_selfManagedSharding
2025-11-02T00:31:20.5649220Z === CONT  TestAccClusterAdvancedClusterConfig_selfManagedSharding
2025-11-02T00:31:25.4264821Z === NAME  TestAccClusterAdvancedClusterConfig_selfManagedSharding
2025-11-02T00:31:25.4266958Z     resource_test.go:626: Step 1/3 error: Error running apply: exit status 1
2025-11-02T00:31:25.4268837Z         
2025-11-02T00:31:25.4270583Z         Error: Error in create
2025-11-02T00:31:25.4272585Z         
2025-11-02T00:31:25.4274314Z           with mongodbatlas_advanced_cluster.test,
2025-11-02T00:31:25.4276624Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-02T00:31:25.4279205Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-11-02T00:31:25.4280830Z         
2025-11-02T00:31:25.4282642Z         cluster name: test-acc-tf-c-9090896152896017147, API error details:
2025-11-02T00:31:25.4284921Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6906a5f75ace12378d295e75/clusters
2025-11-02T00:31:25.4288198Z         POST: HTTP 403 Forbidden (Error code:
2025-11-02T00:31:25.4294540Z         "ATLAS_RESOURCE_POLICIES_VIOLATION_NOT_AUTHORIZED") Detail: Invalid
2025-11-02T00:31:25.4312656Z         Configuration. Contains selections that are unavailable due to your
2025-11-02T00:31:25.4313720Z         organization's resource policies. Reason: Forbidden. Params: [],
2025-11-02T00:31:25.4314426Z         BadRequestDetail: 
2025-11-02T00:31:25.4356268Z   
2025-11-02T00:31:25.7173429Z --- FAIL: TestAccClusterAdvancedClusterConfig_selfManagedSharding (5.16s)
```

- 2025-11-03 PASS 19 minutes
- 2025-11-04 PASS 19 minutes
- 2025-11-05
  - PASS 21 minutes
  - PASS 17 minutes
- 2025-11-06 PASS 22 minutes
- 2025-11-07 PASS 21 minutes
- 2025-11-08 PASS 46 minutes
- 2025-11-09 PASS 18 minutes
- 2025-11-10 PASS 19 minutes
- 2025-11-11 PASS 19 minutes
- 2025-11-12 PASS 20 minutes