# advanced_cluster/advancedcluster/TestAccClusterAdvancedCluster_replicaSetMultiCloud Test Details
# Found 7 TestRuns in dev, qa from 2025-07-02 to 2025-07-08 from master branch: 1 unique tests, FAIL(x 4) PASS(x 3)
Success rate: 42.86%

## Timeline
2025-07-01: MISSING
### 2025-07-02
#### PASS 38 minutes
### 2025-07-03
#### PASS 33 minutes
### 2025-07-04
#### FAIL 3 hours
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
### 2025-07-05
#### FAIL 3 hours
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
### 2025-07-06
#### FAIL 37 minutes
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
### 2025-07-07
#### FAIL 3 hours
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
### 2025-07-08
#### PASS 35 minutes