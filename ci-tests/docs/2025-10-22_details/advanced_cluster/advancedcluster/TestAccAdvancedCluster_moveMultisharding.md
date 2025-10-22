# advanced_cluster/advancedcluster/TestAccAdvancedCluster_moveMultisharding Test Details
# Found 44 TestRuns in dev, qa from 2025-09-23 to 2025-10-22 from master branch: 1 unique tests, PASS(x 39) FAIL(x 3) SKIP(x 2)
Success rate: 92.86%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-05 00:29](#error-2025-10-05t0029420000) | ATLAS_RESOURCE_POLICIES_VIOLATION_NOT_AUTHORIZED /api/atlas/v1.0/groups/68e1bbf5f758b3057a1ae656/clusters | qa |  | 4.05s
[2025-10-07 00:27](#error-2025-10-07t0027370000) |  | dev | timeout | 10804.07s
[2025-10-20 10:26](#error-2025-10-20t1026300000) | OUT_OF_CAPACITY /api/atlas/v1.0/groups/68f60e54de46041f5669aa57/clusters | dev | out_of_capacity | 3.05s

## Timeline
- 2025-09-22: MISSING
- 2025-09-23 PASS 27 minutes
- 2025-09-24 PASS 28 minutes
- 2025-09-25 PASS 28 minutes
- 2025-09-26 PASS 42 minutes
- 2025-09-27 PASS 23 minutes
- 2025-09-28 PASS 25 minutes
- 2025-09-29
  - PASS 23 minutes
  - PASS 15 minutes
- 2025-09-30
  - PASS 23 minutes
  - PASS 16 minutes
  - PASS 21 minutes
  - PASS 19 minutes
  - PASS 18 minutes
- 2025-10-01
  - PASS 51 minutes
  - PASS 37 minutes
  - PASS 40 minutes
  - PASS an hour
  - PASS 39 minutes
  - PASS 22 minutes
  - SKIP a moment
  - SKIP a moment
- 2025-10-02 PASS an hour
- 2025-10-03 PASS 40 minutes
- 2025-10-04 PASS 2 hours
- 2025-10-05

### Error 2025-10-05T00:29:42+00:00
```
2025-10-05T00:29:42.4788455Z === RUN   TestAccAdvancedCluster_moveMultisharding
2025-10-05T00:31:26.4123548Z === CONT  TestAccAdvancedCluster_moveMultisharding
2025-10-05T00:31:30.7068448Z === NAME  TestAccAdvancedCluster_moveMultisharding
2025-10-05T00:31:30.7071835Z     move_upgrade_state_test.go:45: Step 1/2 error: Error running apply: exit status 1
2025-10-05T00:31:30.7074502Z         
2025-10-05T00:31:30.7121231Z         Error: error creating MongoDB Cluster: POST https://cloud-qa.mongodb.com/api/atlas/v1.0/groups/68e1bbf5f758b3057a1ae656/clusters: 403 (request "ATLAS_RESOURCE_POLICIES_VIOLATION_NOT_AUTHORIZED") Invalid Configuration. Contains selections that are unavailable due to your organization's resource policies.
2025-10-05T00:31:30.7123329Z         
2025-10-05T00:31:30.7123851Z           with mongodbatlas_cluster.old,
2025-10-05T00:31:30.7125051Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "old":
2025-10-05T00:31:30.7125998Z           12: 		resource "mongodbatlas_cluster" "old" {
2025-10-05T00:31:30.7126493Z         
2025-10-05T00:31:30.8525380Z --- FAIL: TestAccAdvancedCluster_moveMultisharding (4.46s)
```

- 2025-10-06 PASS 19 minutes
- 2025-10-07

### Error 2025-10-07T00:27:37+00:00
```
2025-10-07T00:27:37.4683505Z === RUN   TestAccAdvancedCluster_moveMultisharding
2025-10-07T00:30:14.9881946Z === CONT  TestAccAdvancedCluster_moveMultisharding
2025-10-07T00:30:16.5975267Z   diagnostic_detail=
2025-10-07T00:30:16.5980772Z    diagnostic_attribute="AttributeName(\"replication_specs\").ElementKeyInt(0).AttributeName(\"region_configs\")" tf_proto_version=6.10
2025-10-07T03:30:19.6674496Z === NAME  TestAccAdvancedCluster_moveMultisharding
2025-10-07T03:30:19.6675478Z     move_upgrade_state_test.go:45: Step 1/2 error: Error running apply: exit status 1
2025-10-07T03:30:19.6676046Z         
2025-10-07T03:30:19.6676857Z         Error: error creating MongoDB Cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2025-10-07T03:30:19.6677770Z         
2025-10-07T03:30:19.6678287Z           with mongodbatlas_cluster.old,
2025-10-07T03:30:19.6679605Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "old":
2025-10-07T03:30:19.6680521Z           12: 		resource "mongodbatlas_cluster" "old" {
2025-10-07T03:30:19.6681006Z         
2025-10-07T03:30:19.7220532Z --- FAIL: TestAccAdvancedCluster_moveMultisharding (10804.74s)
```

- 2025-10-08 PASS 22 minutes
- 2025-10-09 PASS 2 hours
- 2025-10-10 PASS 24 minutes
- 2025-10-11 PASS 25 minutes
- 2025-10-12 PASS 2 hours
- 2025-10-13 PASS 22 minutes
- 2025-10-14 PASS 29 minutes
- 2025-10-15 PASS 20 minutes
- 2025-10-16 PASS 40 minutes
- 2025-10-17 PASS 22 minutes
- 2025-10-18 PASS 21 minutes
- 2025-10-19 PASS 18 minutes
- 2025-10-20
  - PASS an hour
  - FAIL 3 seconds

### Error 2025-10-20T10:26:30+00:00
```
2025-10-20T10:26:30.0952829Z === RUN   TestAccAdvancedCluster_moveMultisharding
2025-10-20T10:28:27.7303051Z === CONT  TestAccAdvancedCluster_moveMultisharding
2025-10-20T10:28:31.1332340Z === NAME  TestAccAdvancedCluster_moveMultisharding
2025-10-20T10:28:31.1333609Z     move_upgrade_state_test.go:45: Step 1/2 error: Error running apply: exit status 1
2025-10-20T10:28:31.1334320Z         
2025-10-20T10:28:31.1336923Z         Error: error creating MongoDB Cluster: POST https://cloud-dev.mongodb.com/api/atlas/v1.0/groups/68f60e54de46041f5669aa57/clusters: 409 (request "OUT_OF_CAPACITY") The requested region is currently out of capacity for the requested instance size.
2025-10-20T10:28:31.1338584Z         
2025-10-20T10:28:31.1339102Z           with mongodbatlas_cluster.old,
2025-10-20T10:28:31.1340134Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "old":
2025-10-20T10:28:31.1341059Z           12: 		resource "mongodbatlas_cluster" "old" {
2025-10-20T10:28:31.1341565Z         
2025-10-20T10:28:31.1980429Z --- FAIL: TestAccAdvancedCluster_moveMultisharding (3.47s)
```

- 2025-10-21 PASS 19 minutes
- 2025-10-22
  - PASS 26 minutes
  - PASS 20 minutes