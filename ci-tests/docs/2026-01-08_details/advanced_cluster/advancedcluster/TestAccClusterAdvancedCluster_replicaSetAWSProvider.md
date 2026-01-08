# advanced_cluster/advancedcluster/TestAccClusterAdvancedCluster_replicaSetAWSProvider Test Details
# Found 31 TestRuns in dev, qa from 2025-12-10 to 2026-01-08 from master branch: 1 unique tests, PASS(x 26) FAIL(x 5)
Success rate: 83.87%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-12-13 00:30](#error-2025-12-13t0030060000) |  | dev | flaky_client | 3751.09s
[2025-12-15 00:33](#error-2025-12-15t0033190000) |  | dev | timeout | 11709.06s
[2025-12-31 00:32](#error-2025-12-31t0032080000) |  | dev | timeout | 11690.10s
[2026-01-07 00:30](#error-2026-01-07t0030540000) | UNEXPECTED_ERROR /api/atlas/v2/groups/695da93ad59b8466ea729f4f/clusters/test-acc-tf-c-2282010651098387728 | dev | flaky_500 | 41.03s

### Timeline
- 2025-12-09: MISSING
- 2025-12-10
  - PASS an hour
  - PASS 56 minutes
- 2025-12-11 PASS 58 minutes
- 2025-12-12 PASS an hour
- 2025-12-13

### Error 2025-12-13T00:30:06+00:00
```
2025-12-13T00:30:06.1204873Z === RUN   TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-12-13T00:31:44.5028347Z === CONT  TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-12-13T00:32:24.4993184Z === NAME  TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-12-13T00:32:24.4995195Z     pre_check.go:46: Time before creating cluster: 2025-12-13T00:32:24.499016184Z, ProjectID: 693cb38901541832febc4195, Cluster name: test-acc-tf-c-1919306958738250193
2025-12-13T01:31:42.8509247Z === NAME  TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-12-13T01:31:42.8509831Z     resource_test.go:114: Step 2/4 error: Error running apply: exit status 1
2025-12-13T01:31:42.8510492Z         
2025-12-13T01:31:42.8510945Z         Error: Error in update
2025-12-13T01:31:42.8511204Z         
2025-12-13T01:31:42.8511534Z           with mongodbatlas_advanced_cluster.test,
2025-12-13T01:31:42.8512458Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-12-13T01:31:42.8513069Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-12-13T01:31:42.8513379Z         
2025-12-13T01:31:42.8513833Z         cluster=test-acc-tf-c-1919306958738250193 didn't reach desired state: IDLE,
2025-12-13T01:31:42.8514507Z         error: Get
2025-12-13T01:31:42.8515263Z         "https://cloud-dev.mongodb.com/api/atlas/v2/groups/693cb38901541832febc4195/clusters/test-acc-tf-c-1919306958738250193":
2025-12-13T01:31:42.8515975Z         dial tcp: lookup cloud-dev.mongodb.com: i/o timeout
2025-12-13T01:34:16.4338922Z --- FAIL: TestAccClusterAdvancedCluster_replicaSetAWSProvider (3751.93s)
```

- 2025-12-14: MISSING
- 2025-12-15

### Error 2025-12-15T00:33:19+00:00
```
2025-12-15T00:33:19.0035199Z === RUN   TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-12-15T00:35:04.0389195Z === CONT  TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-12-15T00:35:29.0555274Z === NAME  TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-12-15T00:35:29.0557056Z     pre_check.go:46: Time before creating cluster: 2025-12-15T00:35:29.05528868Z, ProjectID: 693f574ade63462733325a2f, Cluster name: test-acc-tf-c-8854673644223959733
2025-12-15T03:46:10.1125489Z === NAME  TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-12-15T03:46:10.1126190Z     resource_test.go:114: Step 2/4 error: Error running apply: exit status 1
2025-12-15T03:46:10.1126854Z         
2025-12-15T03:46:10.1127265Z         Error: Error in update
2025-12-15T03:46:10.1127559Z         
2025-12-15T03:46:10.1127938Z           with mongodbatlas_advanced_cluster.test,
2025-12-15T03:46:10.1128661Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-12-15T03:46:10.1129337Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-12-15T03:46:10.1129734Z         
2025-12-15T03:46:10.1130371Z         cluster=test-acc-tf-c-8854673644223959733 didn't reach desired state: IDLE,
2025-12-15T03:46:10.1130966Z         error: timeout while waiting for state to become 'IDLE' (last state:
2025-12-15T03:46:10.1131376Z         'UPDATING', timeout: 3h0m0s)
2025-12-15T03:50:13.6474000Z --- FAIL: TestAccClusterAdvancedCluster_replicaSetAWSProvider (11709.61s)
```

- 2025-12-16 PASS 55 minutes
- 2025-12-17 PASS an hour
- 2025-12-18 PASS 57 minutes
- 2025-12-19 PASS an hour
- 2025-12-20 PASS 57 minutes
- 2025-12-21: MISSING
- 2025-12-22 PASS an hour
- 2025-12-23 PASS 58 minutes
- 2025-12-24 PASS an hour
- 2025-12-25 PASS an hour
- 2025-12-26 PASS 58 minutes
- 2025-12-27 PASS 59 minutes
- 2025-12-28: MISSING
- 2025-12-29: MISSING
- 2025-12-30 PASS 52 minutes
- 2025-12-31

### Error 2025-12-31T00:32:08+00:00
```
2025-12-31T00:32:08.6246552Z === RUN   TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-12-31T00:33:50.5544923Z === CONT  TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-12-31T00:34:15.5646558Z === NAME  TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-12-31T00:34:15.5648946Z     pre_check.go:46: Time before creating cluster: 2025-12-31T00:34:15.564303117Z, ProjectID: 69546f0318a9ce5f47bc712d, Cluster name: test-acc-tf-c-1095090175047136059
2025-12-31T03:46:07.6250728Z === NAME  TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-12-31T03:46:07.6251645Z     resource_test.go:114: Step 2/4 error: Error running apply: exit status 1
2025-12-31T03:46:07.6252109Z         
2025-12-31T03:46:07.6252369Z         Error: Error in update
2025-12-31T03:46:07.6252630Z         
2025-12-31T03:46:07.6252958Z           with mongodbatlas_advanced_cluster.test,
2025-12-31T03:46:07.6253719Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-12-31T03:46:07.6254566Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-12-31T03:46:07.6254897Z         
2025-12-31T03:46:07.6255357Z         cluster=test-acc-tf-c-1095090175047136059 didn't reach desired state: IDLE,
2025-12-31T03:46:07.6255969Z         error: timeout while waiting for state to become 'IDLE' (last state:
2025-12-31T03:46:07.6256386Z         'UPDATING', timeout: 3h0m0s)
2025-12-31T03:48:41.5248671Z --- FAIL: TestAccClusterAdvancedCluster_replicaSetAWSProvider (11690.97s)
```

- 2026-01-01 PASS 55 minutes
- 2026-01-02 PASS 59 minutes
- 2026-01-03 PASS 56 minutes
- 2026-01-04: MISSING
- 2026-01-05 PASS an hour
- 2026-01-06 PASS 58 minutes
- 2026-01-07

### Error 2026-01-07T00:30:54+00:00
```
2026-01-07T00:30:54.0492077Z === RUN   TestAccClusterAdvancedCluster_replicaSetAWSProvider
2026-01-07T00:31:16.8347064Z === CONT  TestAccClusterAdvancedCluster_replicaSetAWSProvider
2026-01-07T00:31:26.8404501Z === NAME  TestAccClusterAdvancedCluster_replicaSetAWSProvider
2026-01-07T00:31:26.8406083Z     pre_check.go:46: Time before creating cluster: 2026-01-07T00:31:26.840157438Z, ProjectID: 695da93ad59b8466ea729f4f, Cluster name: test-acc-tf-c-2282010651098387728
2026-01-07T00:31:26.9315118Z    test_working_directory=/tmp/plugintest690609142 test_step_number=1 test_name=TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade test_terraform_path=/home/runner/work/_temp/c3449c42-367b-4643-b3d9-335cf3ea8ac8/terraform
2026-01-07T00:31:58.1101866Z === NAME  TestAccClusterAdvancedCluster_replicaSetAWSProvider
2026-01-07T00:31:58.1102598Z     resource_test.go:114: Step 1/4 error: Error running apply: exit status 1
2026-01-07T00:31:58.1102988Z         
2026-01-07T00:31:58.1103232Z         Error: Error in create
2026-01-07T00:31:58.1103563Z         
2026-01-07T00:31:58.1103916Z           with mongodbatlas_advanced_cluster.test,
2026-01-07T00:31:58.1104677Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-01-07T00:31:58.1105220Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-01-07T00:31:58.1105514Z         
2026-01-07T00:31:58.1105944Z         cluster=test-acc-tf-c-2282010651098387728 didn't reach desired state: IDLE,
2026-01-07T00:31:58.1106333Z         error:
2026-01-07T00:31:58.1106999Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/695da93ad59b8466ea729f4f/clusters/test-acc-tf-c-2282010651098387728
2026-01-07T00:31:58.1107718Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2026-01-07T00:31:58.1108245Z         Unexpected error. Reason: Internal Server Error. Params: [],
2026-01-07T00:31:58.1108605Z         BadRequestDetail: 
2026-01-07T00:31:58.1556358Z --- FAIL: TestAccClusterAdvancedCluster_replicaSetAWSProvider (41.32s)
```

- 2026-01-08 PASS 56 minutes

## QA Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-08 06:25](#error-2026-01-08t0625000000) |  | qa | timeout | 11676.03s

### Timeline
- 2025-12-09: MISSING
- 2025-12-10: MISSING
- 2025-12-11: MISSING
- 2025-12-12: MISSING
- 2025-12-13: MISSING
- 2025-12-14 PASS 54 minutes
- 2025-12-15: MISSING
- 2025-12-16: MISSING
- 2025-12-17: MISSING
- 2025-12-18: MISSING
- 2025-12-19: MISSING
- 2025-12-20: MISSING
- 2025-12-21 PASS 51 minutes
- 2025-12-22: MISSING
- 2025-12-23: MISSING
- 2025-12-24: MISSING
- 2025-12-25: MISSING
- 2025-12-26: MISSING
- 2025-12-27: MISSING
- 2025-12-28 PASS 52 minutes
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31: MISSING
- 2026-01-01: MISSING
- 2026-01-02: MISSING
- 2026-01-03: MISSING
- 2026-01-04 PASS 55 minutes
- 2026-01-05: MISSING
- 2026-01-06: MISSING
- 2026-01-07: MISSING
- 2026-01-08

### Error 2026-01-08T06:25:00+00:00
```
2026-01-08T06:25:00.4559105Z === RUN   TestAccClusterAdvancedCluster_replicaSetAWSProvider
2026-01-08T06:26:28.7861247Z === CONT  TestAccClusterAdvancedCluster_replicaSetAWSProvider
2026-01-08T06:26:53.8052304Z === NAME  TestAccClusterAdvancedCluster_replicaSetAWSProvider
2026-01-08T06:26:53.8054112Z     pre_check.go:46: Time before creating cluster: 2026-01-08T06:26:53.804973151Z, ProjectID: 695f4db9350788a3ecf55d57, Cluster name: test-acc-tf-c-3228325967616788367
2026-01-08T09:38:32.7392735Z === NAME  TestAccClusterAdvancedCluster_replicaSetAWSProvider
2026-01-08T09:38:32.7393646Z     resource_test.go:114: Step 2/4 error: Error running apply: exit status 1
2026-01-08T09:38:32.7394221Z         
2026-01-08T09:38:32.7394476Z         Error: Error in update
2026-01-08T09:38:32.7394790Z         
2026-01-08T09:38:32.7395301Z           with mongodbatlas_advanced_cluster.test,
2026-01-08T09:38:32.7396085Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-01-08T09:38:32.7396815Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-01-08T09:38:32.7397157Z         
2026-01-08T09:38:32.7397780Z         cluster=test-acc-tf-c-3228325967616788367 didn't reach desired state: IDLE,
2026-01-08T09:38:32.7398602Z         error: timeout while waiting for state to become 'IDLE' (last state:
2026-01-08T09:38:32.7399044Z         'UPDATING', timeout: 3h0m0s)
2026-01-08T09:41:05.0639236Z --- FAIL: TestAccClusterAdvancedCluster_replicaSetAWSProvider (11676.28s)
```

