# advanced_cluster/advancedcluster/TestAccClusterAdvancedCluster_replicaSetMultiCloud Test Details
# Found 115 TestRuns in dev, qa from 2025-04-12 to 2025-07-10 from master branch: 1 unique tests, PASS(x 108) FAIL(x 7)
Success rate: 93.91%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-04-15 00:55](#error-2025-04-15t0055100000) |  | dev | timeout | 12631.03s
[2025-05-11 00:30](#error-2025-05-11t0030090000) |  | qa |  | 2.00s
[2025-06-05 00:35](#error-2025-06-05t0035270000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 8.07s
[2025-07-04 00:59](#error-2025-07-04t0059210000) |  | dev | timeout | 10810.03s
[2025-07-05 00:56](#error-2025-07-05t0056080000) |  | dev | timeout | 10808.05s
[2025-07-06 01:01](#error-2025-07-06t0101150000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6869cb2a690ae45e168c0038/limits | qa | flaky_500 | 2261.08s
[2025-07-07 01:01](#error-2025-07-07t0101250000) |  | dev | timeout | 10808.05s

## Timeline
- 2025-04-11: MISSING
- 2025-04-12 PASS 31 minutes
- 2025-04-13 PASS 42 minutes
- 2025-04-14 PASS 35 minutes
- 2025-04-15

### Error 2025-04-15T00:55:10+00:00
```
2025-04-15T00:55:10.8636902Z === RUN   TestAccClusterAdvancedCluster_replicaSetMultiCloud
2025-04-15T00:56:51.0608508Z === CONT  TestAccClusterAdvancedCluster_replicaSetMultiCloud
2025-04-15T04:27:22.0583780Z === NAME  TestAccClusterAdvancedCluster_replicaSetMultiCloud
2025-04-15T04:27:22.0584658Z     resource_advanced_cluster_test.go:245: Step 2/3 error: Error running apply: exit status 1
2025-04-15T04:27:22.0585129Z         
2025-04-15T04:27:22.0585963Z         Error: error creating advanced cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2025-04-15T04:27:22.0586758Z         
2025-04-15T04:27:22.0587187Z           with mongodbatlas_advanced_cluster.test,
2025-04-15T04:27:22.0587978Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_advanced_cluster" "test":
2025-04-15T04:27:22.0588856Z           17: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-04-15T04:27:22.0589160Z         
2025-04-15T04:27:22.3717933Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-04-15T04:27:22.3718362Z         
2025-04-15T04:27:22.3718652Z         Error: error when destroying resource
2025-04-15T04:27:22.3718929Z         
2025-04-15T04:27:22.3719276Z         error deleting project (67fdaed7eb449713bee41971):
2025-04-15T04:27:22.3719867Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/67fdaed7eb449713bee41971
2025-04-15T04:27:22.3720354Z         DELETE: HTTP 409 Conflict (Error code:
2025-04-15T04:27:22.3720887Z         "CANNOT_CLOSE_GROUP_ACTIVE_ATLAS_CLUSTERS") Detail: Cannot close group while
2025-04-15T04:27:22.3721702Z         it has active clusters; please terminate all clusters. Reason: Conflict.
2025-04-15T04:27:22.3722146Z         Params: [], BadRequestDetail: 
2025-04-15T04:27:22.3722546Z --- FAIL: TestAccClusterAdvancedCluster_replicaSetMultiCloud (12631.31s)
```

- 2025-04-16
  - PASS 33 minutes
  - PASS 47 minutes
- 2025-04-17 PASS 33 minutes
- 2025-04-18 PASS 35 minutes
- 2025-04-19 PASS 37 minutes
- 2025-04-20 PASS 35 minutes
- 2025-04-21 PASS 39 minutes
- 2025-04-22 PASS 34 minutes
- 2025-04-23 PASS 40 minutes
- 2025-04-24 PASS 35 minutes
- 2025-04-25 PASS 40 minutes
- 2025-04-26 PASS 33 minutes
- 2025-04-27 PASS 40 minutes
- 2025-04-28 PASS 34 minutes
- 2025-04-29 PASS 35 minutes
- 2025-04-30 PASS 46 minutes
- 2025-05-01
  - PASS 51 minutes
  - PASS 32 minutes
  - PASS 35 minutes
  - PASS 37 minutes
  - PASS 30 minutes
  - PASS 30 minutes
  - PASS 35 minutes
- 2025-05-02 PASS 42 minutes
- 2025-05-03 PASS 39 minutes
- 2025-05-04 PASS 34 minutes
- 2025-05-05 PASS 34 minutes
- 2025-05-06 PASS 39 minutes
- 2025-05-07 PASS 49 minutes
- 2025-05-08 PASS 40 minutes
- 2025-05-09 PASS 39 minutes
- 2025-05-10 PASS 36 minutes
- 2025-05-11

### Error 2025-05-11T00:30:09+00:00
```
2025-05-11T00:30:09.7421002Z === RUN   TestAccClusterAdvancedCluster_replicaSetMultiCloud
2025-05-11T00:30:11.3742215Z === CONT  TestAccClusterAdvancedCluster_replicaSetMultiCloud
2025-05-11T00:30:13.2884034Z === NAME  TestAccClusterAdvancedCluster_replicaSetMultiCloud
2025-05-11T00:30:13.2885064Z     resource_advanced_cluster_test.go:245: Step 1/3 error: Error running apply: exit status 1
2025-05-11T00:30:13.2885766Z         
2025-05-11T00:30:13.2886462Z         Error: error creating project: test-acc-tf-p-1027006948631360893
2025-05-11T00:30:13.2887063Z         
2025-05-11T00:30:13.2887679Z           with mongodbatlas_project.cluster_project,
2025-05-11T00:30:13.2888847Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2025-05-11T00:30:13.2889901Z           12: 		resource "mongodbatlas_project" "cluster_project" {
2025-05-11T00:30:13.2890434Z         
2025-05-11T00:30:13.2891649Z         (503 Service Unavailable) failed to decode response body: undefined response
2025-05-11T00:30:13.2892328Z         type
2025-05-11T00:30:13.3999051Z --- FAIL: TestAccClusterAdvancedCluster_replicaSetMultiCloud (2.03s)
```

- 2025-05-12 PASS 34 minutes
- 2025-05-13
  - PASS 34 minutes
  - PASS 32 minutes
- 2025-05-14 PASS 39 minutes
- 2025-05-15 PASS 38 minutes
- 2025-05-16 PASS 37 minutes
- 2025-05-17 PASS 37 minutes
- 2025-05-18 PASS 38 minutes
- 2025-05-19 PASS 38 minutes
- 2025-05-20 PASS 39 minutes
- 2025-05-21 PASS 37 minutes
- 2025-05-22 PASS 37 minutes
- 2025-05-23 PASS 44 minutes
- 2025-05-24 PASS 34 minutes
- 2025-05-25 PASS 40 minutes
- 2025-05-26 PASS 35 minutes
- 2025-05-27 PASS 37 minutes
- 2025-05-28
  - PASS 37 minutes
  - PASS 39 minutes
  - PASS 37 minutes
- 2025-05-29
  - PASS 49 minutes
  - PASS 29 minutes
- 2025-05-30
  - PASS an hour
  - PASS 35 minutes
- 2025-05-31 PASS 32 minutes
- 2025-06-01
  - PASS 33 minutes
  - PASS 36 minutes
  - PASS 34 minutes
  - PASS 36 minutes
  - PASS 33 minutes
  - PASS 31 minutes
- 2025-06-02
  - PASS 33 minutes
  - PASS an hour
  - PASS 32 minutes
- 2025-06-03 PASS 35 minutes
- 2025-06-04 PASS 36 minutes
- 2025-06-05

### Error 2025-06-05T00:35:27+00:00
```
2025-06-05T00:35:27.2500384Z === RUN   TestAccClusterAdvancedCluster_replicaSetMultiCloud
2025-06-05T00:35:42.8412472Z === CONT  TestAccClusterAdvancedCluster_replicaSetMultiCloud
2025-06-05T00:35:51.5046341Z === NAME  TestAccClusterAdvancedCluster_replicaSetMultiCloud
2025-06-05T00:35:51.5047075Z     resource_advanced_cluster_test.go:248: Step 1/3 error: Error running apply: exit status 1
2025-06-05T00:35:51.5047680Z         
2025-06-05T00:35:51.5048712Z         Error: error creating project: test-acc-tf-p-9198966538300717146
2025-06-05T00:35:51.5049263Z         
2025-06-05T00:35:51.5049611Z           with mongodbatlas_project.cluster_project,
2025-06-05T00:35:51.5050379Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2025-06-05T00:35:51.5051091Z           12: 		resource "mongodbatlas_project" "cluster_project" {
2025-06-05T00:35:51.5051497Z         
2025-06-05T00:35:51.5051956Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2025-06-05T00:35:51.5052728Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2025-06-05T00:35:51.5053489Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-06-05T00:35:51.5590318Z --- FAIL: TestAccClusterAdvancedCluster_replicaSetMultiCloud (8.74s)
```

- 2025-06-06 PASS 43 minutes
- 2025-06-07 PASS 36 minutes
- 2025-06-08 PASS 33 minutes
- 2025-06-09 PASS an hour
- 2025-06-10 PASS an hour
- 2025-06-11
  - PASS 35 minutes
  - PASS 58 minutes
- 2025-06-12 PASS 40 minutes
- 2025-06-13 PASS 40 minutes
- 2025-06-14 PASS 55 minutes
- 2025-06-15 PASS 36 minutes
- 2025-06-16 PASS an hour
- 2025-06-17 PASS 53 minutes
- 2025-06-18
  - PASS 40 minutes
  - PASS 32 minutes
- 2025-06-19 PASS an hour
- 2025-06-20 PASS 35 minutes
- 2025-06-21 PASS 34 minutes
- 2025-06-22 PASS 46 minutes
- 2025-06-23 PASS 32 minutes
- 2025-06-24 PASS 36 minutes
- 2025-06-25 PASS 35 minutes
- 2025-06-26 PASS 40 minutes
- 2025-06-27 PASS 36 minutes
- 2025-06-28 PASS 34 minutes
- 2025-06-29 PASS 42 minutes
- 2025-06-30 PASS 37 minutes
- 2025-07-01
  - PASS 33 minutes
  - PASS 34 minutes
  - PASS 34 minutes
  - PASS 34 minutes
  - PASS an hour
- 2025-07-02 PASS 38 minutes
- 2025-07-03 PASS 33 minutes
- 2025-07-04

### Error 2025-07-04T00:59:21+00:00
```
2025-07-04T00:59:21.7074965Z === RUN   TestAccClusterAdvancedCluster_replicaSetMultiCloud
2025-07-04T01:00:51.6165844Z === CONT  TestAccClusterAdvancedCluster_replicaSetMultiCloud
2025-07-04T04:01:01.3055855Z === NAME  TestAccClusterAdvancedCluster_replicaSetMultiCloud
2025-07-04T04:01:01.3057001Z     resource_advanced_cluster_test.go:248: Step 1/3 error: Error running apply: exit status 1
2025-07-04T04:01:01.3057923Z         
2025-07-04T04:01:01.3059056Z         Error: error creating advanced cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2025-07-04T04:01:01.3059876Z         
2025-07-04T04:01:01.3060320Z           with mongodbatlas_advanced_cluster.test,
2025-07-04T04:01:01.3061337Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_advanced_cluster" "test":
2025-07-04T04:01:01.3062090Z           17: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-07-04T04:01:01.3062440Z         
2025-07-04T04:01:01.8919788Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-07-04T04:01:01.8920417Z         
2025-07-04T04:01:01.8920798Z         Error: error when destroying resource
2025-07-04T04:01:01.8921104Z         
2025-07-04T04:01:01.8921470Z         error deleting project (686727c88263f52e03e796c9):
2025-07-04T04:01:01.8922114Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/686727c88263f52e03e796c9
2025-07-04T04:01:01.8922656Z         DELETE: HTTP 409 Conflict (Error code:
2025-07-04T04:01:01.8923484Z         "CANNOT_CLOSE_GROUP_ACTIVE_ATLAS_CLUSTERS") Detail: Cannot close group while
2025-07-04T04:01:01.8924197Z         it has active clusters; please terminate all clusters. Reason: Conflict.
2025-07-04T04:01:01.8924694Z         Params: [], BadRequestDetail: 
2025-07-04T04:01:01.8925142Z --- FAIL: TestAccClusterAdvancedCluster_replicaSetMultiCloud (10810.30s)
```

- 2025-07-05

### Error 2025-07-05T00:56:08+00:00
```
2025-07-05T00:56:08.1191357Z === RUN   TestAccClusterAdvancedCluster_replicaSetMultiCloud
2025-07-05T00:57:08.5707839Z === CONT  TestAccClusterAdvancedCluster_replicaSetMultiCloud
2025-07-05T03:57:16.8090565Z === NAME  TestAccClusterAdvancedCluster_replicaSetMultiCloud
2025-07-05T03:57:16.8091632Z     resource_advanced_cluster_test.go:248: Step 1/3 error: Error running apply: exit status 1
2025-07-05T03:57:16.8092370Z         
2025-07-05T03:57:16.8093654Z         Error: error creating advanced cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2025-07-05T03:57:16.8094622Z         
2025-07-05T03:57:16.8095167Z           with mongodbatlas_advanced_cluster.test,
2025-07-05T03:57:16.8096185Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_advanced_cluster" "test":
2025-07-05T03:57:16.8096770Z           17: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-07-05T03:57:16.8097388Z         
2025-07-05T03:57:17.1063695Z    test_name=TestAccClusterAdvancedCluster_replicaSetMultiCloud test_terraform_path=/home/runner/work/_temp/8bcf1b9b-6d48-42c3-b220-84c8698ad33a/terraform test_working_directory=/tmp/plugintest2670600188
2025-07-05T03:57:17.1064996Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-07-05T03:57:17.1065483Z         
2025-07-05T03:57:17.1066026Z         Error: error when destroying resource
2025-07-05T03:57:17.1066314Z         
2025-07-05T03:57:17.1066656Z         error deleting project (6868786921e3e31abeebbe98):
2025-07-05T03:57:17.1067257Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6868786921e3e31abeebbe98
2025-07-05T03:57:17.1067764Z         DELETE: HTTP 409 Conflict (Error code:
2025-07-05T03:57:17.1073384Z         "CANNOT_CLOSE_GROUP_ACTIVE_ATLAS_CLUSTERS") Detail: Cannot close group while
2025-07-05T03:57:17.1074259Z         it has active clusters; please terminate all clusters. Reason: Conflict.
2025-07-05T03:57:17.1074747Z         Params: [], BadRequestDetail: 
2025-07-05T03:57:17.1075174Z --- FAIL: TestAccClusterAdvancedCluster_replicaSetMultiCloud (10808.54s)
```

- 2025-07-06

### Error 2025-07-06T01:01:15+00:00
```
2025-07-06T01:01:15.1411017Z === RUN   TestAccClusterAdvancedCluster_replicaSetMultiCloud
2025-07-06T01:02:29.8166681Z === CONT  TestAccClusterAdvancedCluster_replicaSetMultiCloud
2025-07-06T01:37:18.2259451Z === NAME  TestAccClusterAdvancedCluster_replicaSetMultiCloud
2025-07-06T01:37:18.2260226Z     resource_advanced_cluster_test.go:248: Step 2/3 error: Error running post-apply refresh plan: exit status 1
2025-07-06T01:37:18.2260701Z         
2025-07-06T01:37:18.2261151Z         Error: error when getting project properties after create
2025-07-06T01:37:18.2261466Z         
2025-07-06T01:37:18.2261889Z           with mongodbatlas_project.cluster_project,
2025-07-06T01:37:18.2262668Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2025-07-06T01:37:18.2263364Z           12: 		resource "mongodbatlas_project" "cluster_project" {
2025-07-06T01:37:18.2263667Z         
2025-07-06T01:37:18.2264090Z         error getting project (6869cb2a690ae45e168c0038): error getting project's
2025-07-06T01:37:18.2265016Z         limits (6869cb2a690ae45e168c0038):
2025-07-06T01:37:18.2265570Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6869cb2a690ae45e168c0038/limits
2025-07-06T01:37:18.2266220Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-06T01:37:18.2266782Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-06T01:37:18.2267152Z         BadRequestDetail: 
2025-07-06T01:40:11.6326948Z --- FAIL: TestAccClusterAdvancedCluster_replicaSetMultiCloud (2261.83s)
```

- 2025-07-07

### Error 2025-07-07T01:01:25+00:00
```
2025-07-07T01:01:25.9416348Z === RUN   TestAccClusterAdvancedCluster_replicaSetMultiCloud
2025-07-07T01:02:17.8642865Z === CONT  TestAccClusterAdvancedCluster_replicaSetMultiCloud
2025-07-07T04:02:25.9033999Z === NAME  TestAccClusterAdvancedCluster_replicaSetMultiCloud
2025-07-07T04:02:25.9034748Z     resource_advanced_cluster_test.go:248: Step 1/3 error: Error running apply: exit status 1
2025-07-07T04:02:25.9035165Z         
2025-07-07T04:02:25.9036012Z         Error: error creating advanced cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2025-07-07T04:02:25.9036692Z         
2025-07-07T04:02:25.9037104Z           with mongodbatlas_advanced_cluster.test,
2025-07-07T04:02:25.9037781Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_advanced_cluster" "test":
2025-07-07T04:02:25.9038690Z           17: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-07-07T04:02:25.9039008Z         
2025-07-07T04:02:26.3654761Z    test_terraform_path=/home/runner/work/_temp/a9abdc25-77fa-4537-b3de-dbc49e28950c/terraform test_working_directory=/tmp/plugintest1477947791 test_step_number=1 test_name=TestAccClusterAdvancedCluster_replicaSetMultiCloud
2025-07-07T04:02:26.3655896Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-07-07T04:02:26.3656326Z         
2025-07-07T04:02:26.3656612Z         Error: error when destroying resource
2025-07-07T04:02:26.3656880Z         
2025-07-07T04:02:26.3657212Z         error deleting project (686b1c9e0aabd25fc85de3d0):
2025-07-07T04:02:26.3657785Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/686b1c9e0aabd25fc85de3d0
2025-07-07T04:02:26.3658270Z         DELETE: HTTP 409 Conflict (Error code:
2025-07-07T04:02:26.3658790Z         "CANNOT_CLOSE_GROUP_ACTIVE_ATLAS_CLUSTERS") Detail: Cannot close group while
2025-07-07T04:02:26.3659394Z         it has active clusters; please terminate all clusters. Reason: Conflict.
2025-07-07T04:02:26.3660002Z         Params: [], BadRequestDetail: 
2025-07-07T04:02:26.3660398Z --- FAIL: TestAccClusterAdvancedCluster_replicaSetMultiCloud (10808.52s)
```

- 2025-07-08 PASS 35 minutes
- 2025-07-09 PASS 34 minutes
- 2025-07-10 PASS 38 minutes