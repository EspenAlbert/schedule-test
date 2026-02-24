# cluster/cluster/TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade Test Details
# Found 32 TestRuns in dev, qa from 2026-01-26 to 2026-02-24 from master branch: 1 unique tests, PASS(x 28) FAIL(x 4)
Success rate: 87.50%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-31 00:35](#error-2026-01-31t0035140000) |  | dev | timeout | 10808.05s
[2026-02-02 00:38](#error-2026-02-02t0038370000) |  | dev | timeout | 10808.03s
[2026-02-03 00:39](#error-2026-02-03t0039240000) | OUT_OF_CAPACITY /api/atlas/v1.0/groups/698143bee3c7fce2317e3497/clusters | dev | out_of_capacity | 7.06s
[2026-02-24 00:37](#error-2026-02-24t0037020000) |  | dev | flaky_500 | 1386.00s

### Timeline
- 2026-01-25: MISSING
- 2026-01-26 PASS 28 minutes
- 2026-01-27 PASS 35 minutes
- 2026-01-28 PASS 32 minutes
- 2026-01-29 PASS 35 minutes
- 2026-01-30 PASS 40 minutes
- 2026-01-31

### Error 2026-01-31T00:35:14+00:00
```
2026-01-31T00:35:14.2400867Z === RUN   TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2026-01-31T00:35:14.2411702Z === CONT  TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2026-01-31T03:35:22.1859695Z === NAME  TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2026-01-31T03:35:22.1860560Z     resource_cluster_test.go:1373: Step 1/7 error: Error running apply: exit status 1
2026-01-31T03:35:22.1861149Z         
2026-01-31T03:35:22.1862108Z         Error: error creating MongoDB Cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2026-01-31T03:35:22.1862871Z         
2026-01-31T03:35:22.1863204Z           with mongodbatlas_cluster.test,
2026-01-31T03:35:22.1864044Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_cluster" "test":
2026-01-31T03:35:22.1864703Z           17: 		resource "mongodbatlas_cluster" "test" {
2026-01-31T03:35:22.1865057Z         
2026-01-31T03:35:22.6912643Z     panic.go:615: Error running post-test destroy, there may be dangling resources: exit status 1
2026-01-31T03:35:22.6913150Z         
2026-01-31T03:35:22.6913469Z         Error: error when destroying resource
2026-01-31T03:35:22.6913785Z         
2026-01-31T03:35:22.6914149Z         error deleting project (697d4e44ff188f1e45c4b1ac):
2026-01-31T03:35:22.6914786Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/697d4e44ff188f1e45c4b1ac
2026-01-31T03:35:22.6915332Z         DELETE: HTTP 409 Conflict (Error code:
2026-01-31T03:35:22.6916214Z         "CANNOT_CLOSE_GROUP_ACTIVE_ATLAS_CLUSTERS") Detail: Cannot close group while
2026-01-31T03:35:22.6916913Z         it has active clusters; please terminate all clusters. Reason: Conflict.
2026-01-31T03:35:22.6917381Z         Params: [], BadRequestDetail: 
2026-01-31T03:35:22.6917814Z --- FAIL: TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade (10808.45s)
```

- 2026-02-01: MISSING
- 2026-02-02

### Error 2026-02-02T00:38:37+00:00
```
2026-02-02T00:38:37.8804621Z === RUN   TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2026-02-02T00:38:37.8811159Z === CONT  TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2026-02-02T03:38:45.6961665Z === NAME  TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2026-02-02T03:38:45.6962579Z     resource_cluster_test.go:1373: Step 1/7 error: Error running apply: exit status 1
2026-02-02T03:38:45.6963254Z         
2026-02-02T03:38:45.6964568Z         Error: error creating MongoDB Cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2026-02-02T03:38:45.6965088Z         
2026-02-02T03:38:45.6965384Z           with mongodbatlas_cluster.test,
2026-02-02T03:38:45.6966018Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_cluster" "test":
2026-02-02T03:38:45.6966673Z           17: 		resource "mongodbatlas_cluster" "test" {
2026-02-02T03:38:45.6966951Z         
2026-02-02T03:38:45.7501225Z    test_name=TestMigCluster_basicAWS_simple test_terraform_path=/home/runner/work/_temp/3d353ea1-6a07-441f-98c3-1c55053dc79f/terraform test_working_directory=/tmp/plugintest4038526559
2026-02-02T03:38:46.2204355Z === NAME  TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2026-02-02T03:38:46.2204978Z     panic.go:615: Error running post-test destroy, there may be dangling resources: exit status 1
2026-02-02T03:38:46.2205393Z         
2026-02-02T03:38:46.2205675Z         Error: error when destroying resource
2026-02-02T03:38:46.2205945Z         
2026-02-02T03:38:46.2206270Z         error deleting project (697ff20f197cc66080b088ff):
2026-02-02T03:38:46.2206796Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/697ff20f197cc66080b088ff
2026-02-02T03:38:46.2207247Z         DELETE: HTTP 409 Conflict (Error code:
2026-02-02T03:38:46.2207739Z         "CANNOT_CLOSE_GROUP_ACTIVE_ATLAS_CLUSTERS") Detail: Cannot close group while
2026-02-02T03:38:46.2208310Z         it has active clusters; please terminate all clusters. Reason: Conflict.
2026-02-02T03:38:46.2208733Z         Params: [], BadRequestDetail: 
2026-02-02T03:38:46.2209126Z --- FAIL: TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade (10808.34s)
```

- 2026-02-03

### Error 2026-02-03T00:39:24+00:00
```
2026-02-03T00:39:24.5579740Z === RUN   TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2026-02-03T00:39:24.5582956Z === CONT  TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2026-02-03T00:39:31.3009711Z === NAME  TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2026-02-03T00:39:31.3010786Z     resource_cluster_test.go:1373: Step 1/7 error: Error running apply: exit status 1
2026-02-03T00:39:31.3011526Z         
2026-02-03T00:39:31.3013983Z         Error: error creating MongoDB Cluster: POST https://cloud-dev.mongodb.com/api/atlas/v1.0/groups/698143bee3c7fce2317e3497/clusters: 409 (request "OUT_OF_CAPACITY") The requested region is currently out of capacity for the requested instance size.
2026-02-03T00:39:31.3015119Z         
2026-02-03T00:39:31.3015466Z           with mongodbatlas_cluster.test,
2026-02-03T00:39:31.3016390Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_cluster" "test":
2026-02-03T00:39:31.3016998Z           17: 		resource "mongodbatlas_cluster" "test" {
2026-02-03T00:39:31.3017307Z         
2026-02-03T00:39:32.1271421Z --- FAIL: TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade (7.57s)
```

- 2026-02-04 PASS 31 minutes
- 2026-02-05 PASS 34 minutes
- 2026-02-06 PASS 31 minutes
- 2026-02-07 PASS 32 minutes
- 2026-02-08: MISSING
- 2026-02-09 PASS 32 minutes
- 2026-02-10 PASS 32 minutes
- 2026-02-11 PASS 31 minutes
- 2026-02-12 PASS 31 minutes
- 2026-02-13 PASS 33 minutes
- 2026-02-14 PASS 35 minutes
- 2026-02-15: MISSING
- 2026-02-16 PASS 34 minutes
- 2026-02-17 PASS 33 minutes
- 2026-02-18 PASS 36 minutes
- 2026-02-19 PASS 45 minutes
- 2026-02-20 PASS 35 minutes
- 2026-02-21 PASS 32 minutes
- 2026-02-22: MISSING
- 2026-02-23 PASS 32 minutes
- 2026-02-24

### Error 2026-02-24T00:37:02+00:00
```
2026-02-24T00:37:02.7161218Z === RUN   TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2026-02-24T00:37:02.7163408Z === CONT  TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2026-02-24T00:55:46.1083285Z === NAME  TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2026-02-24T00:55:46.1084024Z     resource_cluster_test.go:1373: Step 4/7 error: Error running pre-apply plan: exit status 1
2026-02-24T00:55:46.1084480Z         
2026-02-24T00:55:46.1084954Z         Error: error when getting project properties after create
2026-02-24T00:55:46.1085287Z         
2026-02-24T00:55:46.1085697Z           with mongodbatlas_project.test,
2026-02-24T00:55:46.1086346Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-02-24T00:55:46.1087263Z           12: 		resource "mongodbatlas_project" "test" {
2026-02-24T00:55:46.1087562Z         
2026-02-24T00:55:46.1087998Z         error getting project (699cf2b0ae2412ce6211fc04): error getting project's
2026-02-24T00:55:46.1088623Z         settings assigned (699cf2b0ae2412ce6211fc04): (503 Service Unavailable)
2026-02-24T00:55:46.1089175Z         failed to decode response body: undefined response type
2026-02-24T01:00:08.7273783Z --- FAIL: TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade (1386.01s)
```


## QA Environment
### Timeline
- 2026-01-25: MISSING
- 2026-01-26: MISSING
- 2026-01-27: MISSING
- 2026-01-28: MISSING
- 2026-01-29: MISSING
- 2026-01-30: MISSING
- 2026-01-31: MISSING
- 2026-02-01 PASS 31 minutes
- 2026-02-02: MISSING
- 2026-02-03: MISSING
- 2026-02-04 PASS 28 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING
- 2026-02-07: MISSING
- 2026-02-08 PASS 30 minutes
- 2026-02-09: MISSING
- 2026-02-10: MISSING
- 2026-02-11: MISSING
- 2026-02-12: MISSING
- 2026-02-13: MISSING
- 2026-02-14: MISSING
- 2026-02-15 PASS 35 minutes
- 2026-02-16: MISSING
- 2026-02-17 PASS 28 minutes
- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20: MISSING
- 2026-02-21: MISSING
- 2026-02-22 PASS 31 minutes
- 2026-02-23: MISSING
- 2026-02-24: MISSING
