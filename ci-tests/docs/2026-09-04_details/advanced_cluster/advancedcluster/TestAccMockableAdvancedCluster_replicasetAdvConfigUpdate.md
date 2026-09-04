# advanced_cluster/advancedcluster/TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate Test Details
# Found 11 TestRuns in dev, qa from 2026-08-06 to 2026-09-04 from master branch: 1 unique tests, PASS(x 8) FAIL(x 3)
Success rate: 72.73%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-08-06 00:40](#error-2026-08-06t0040010000) | INVALID_ATTRIBUTE /api/atlas/v2/groups/6a73d7e1357372fed31faad5/clusters/test-acc-tf-c-6568051398481516750 | dev | 919.02s
[2026-08-28 03:09](#error-2026-08-28t0309110000) | INVALID_ATTRIBUTE /api/atlas/v2/groups/6a90fbd734dc94e0a78d5afa/clusters/test-acc-tf-c-6173607189416035232 | dev | 988.09s

### Timeline
- 2026-08-05: MISSING
- 2026-08-06

### Error 2026-08-06T00:40:01+00:00
```
2026-08-06T00:40:01.5557824Z === RUN   TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate
2026-08-06T00:40:05.7802411Z     resource_test.go:991: Adding variable clusterName=test-acc-tf-c-6568051398481516750
2026-08-06T00:40:05.7803391Z     resource_test.go:991: Adding variable groupId=6a73d7e1357372fed31faad5
2026-08-06T00:41:25.1468058Z === CONT  TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate
2026-08-06T00:41:25.8730682Z   diagnostic_detail=
2026-08-06T00:41:25.8736038Z    diagnostic_severity=ERROR diagnostic_summary="Unable to Move Resource State"
2026-08-06T00:54:01.7785150Z === NAME  TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate
2026-08-06T00:54:01.7786363Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName2=test-acc-tf-c-401718349034318443
2026-08-06T00:54:02.0469847Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName3=test-acc-tf-c-5378595803015451581
2026-08-06T00:54:02.6400171Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName4=test-acc-tf-c-8475770284112456875
2026-08-06T00:54:08.5627568Z   
2026-08-06T00:54:08.5627995Z     resource_test.go:991: Step 2/4 error: Error running apply: exit status 1
2026-08-06T00:54:08.5628489Z         
2026-08-06T00:54:08.5628744Z         Error: Error in update
2026-08-06T00:54:08.5628981Z         
2026-08-06T00:54:08.5629349Z           with mongodbatlas_advanced_cluster.test,
2026-08-06T00:54:08.5630069Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-08-06T00:54:08.5630634Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-08-06T00:54:08.5630915Z         
2026-08-06T00:54:08.5631297Z         cluster name: test-acc-tf-c-6568051398481516750, API error details:
2026-08-06T00:54:08.5632027Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a73d7e1357372fed31faad5/clusters/test-acc-tf-c-6568051398481516750
2026-08-06T00:54:08.5632684Z         PATCH: HTTP 400 Bad Request (Error code: "INVALID_ATTRIBUTE") Detail: Invalid
2026-08-06T00:54:08.5633233Z         attribute Cannot validate cluster compatibility due to stale monitoring data.
2026-08-06T00:54:08.5633996Z         Please wait a few minutes and try again. specified. Reason: Bad Request.
2026-08-06T00:54:08.5634529Z         Params: [Cannot validate cluster compatibility due to stale monitoring data.
2026-08-06T00:54:08.5635031Z         Please wait a few minutes and try again.], BadRequestDetail: 
2026-08-06T00:56:40.1247185Z --- FAIL: TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate (919.20s)
```

- 2026-08-07 PASS 27 minutes
- 2026-08-08: MISSING
- 2026-08-09: MISSING
- 2026-08-10: MISSING
- 2026-08-11: MISSING
- 2026-08-12: MISSING
- 2026-08-13: MISSING
- 2026-08-14: MISSING
- 2026-08-15: MISSING
- 2026-08-16: MISSING
- 2026-08-17: MISSING
- 2026-08-18: MISSING
- 2026-08-19: MISSING
- 2026-08-20: MISSING
- 2026-08-21: MISSING
- 2026-08-22: MISSING
- 2026-08-23: MISSING
- 2026-08-24: MISSING
- 2026-08-25: MISSING
- 2026-08-26: MISSING
- 2026-08-27: MISSING
- 2026-08-28

### Error 2026-08-28T03:09:11+00:00
```
2026-08-28T03:09:11.5324850Z === RUN   TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate
2026-08-28T03:09:13.5524319Z     resource_test.go:991: Adding variable clusterName=test-acc-tf-c-6173607189416035232
2026-08-28T03:09:13.5525399Z     resource_test.go:991: Adding variable groupId=6a90fbd734dc94e0a78d5afa
2026-08-28T03:10:39.4723576Z === CONT  TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate
2026-08-28T03:24:23.9936510Z === NAME  TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate
2026-08-28T03:24:23.9937969Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName2=test-acc-tf-c-7339785626894049738
2026-08-28T03:24:24.4568690Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName3=test-acc-tf-c-1720039429159190297
2026-08-28T03:24:24.9663300Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName4=test-acc-tf-c-9143261218793994319
2026-08-28T03:24:34.0932907Z   
2026-08-28T03:24:34.0933358Z     resource_test.go:991: Step 2/4 error: Error running apply: exit status 1
2026-08-28T03:24:34.0933916Z         
2026-08-28T03:24:34.0934311Z         Error: Error in update
2026-08-28T03:24:34.0934590Z         
2026-08-28T03:24:34.0935097Z           with mongodbatlas_advanced_cluster.test,
2026-08-28T03:24:34.0935807Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-08-28T03:24:34.0936482Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-08-28T03:24:34.0936839Z         
2026-08-28T03:24:34.0937283Z         cluster name: test-acc-tf-c-6173607189416035232, API error details:
2026-08-28T03:24:34.0938362Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a90fbd734dc94e0a78d5afa/clusters/test-acc-tf-c-6173607189416035232
2026-08-28T03:24:34.0939407Z         PATCH: HTTP 400 Bad Request (Error code: "INVALID_ATTRIBUTE") Detail: Invalid
2026-08-28T03:24:34.0940132Z         attribute Cannot validate cluster compatibility due to stale monitoring data.
2026-08-28T03:24:34.0940815Z         Please wait a few minutes and try again. specified. Reason: Bad Request.
2026-08-28T03:24:34.0941491Z         Params: [Cannot validate cluster compatibility due to stale monitoring data.
2026-08-28T03:24:34.0942113Z         Please wait a few minutes and try again.], BadRequestDetail: 
2026-08-28T03:27:06.3239648Z --- FAIL: TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate (988.88s)
```

- 2026-08-29 PASS 26 minutes
- 2026-08-30: MISSING
- 2026-08-31 PASS 40 minutes
- 2026-09-01 PASS 39 minutes
- 2026-09-02 PASS 28 minutes
- 2026-09-03
  - PASS 34 minutes
  - PASS 39 minutes
- 2026-09-04 PASS 36 minutes

## QA Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-08-30 00:46](#error-2026-08-30t0046260000) | ATLAS_GENERAL_ERROR /api/atlas/v2/groups/6a937d62f71a0dd24352eb17/clusters/test-acc-tf-c-5389426063810955211 | qa | 860.03s

### Timeline
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
- 2026-08-08: MISSING
- 2026-08-09: MISSING
- 2026-08-10: MISSING
- 2026-08-11: MISSING
- 2026-08-12: MISSING
- 2026-08-13: MISSING
- 2026-08-14: MISSING
- 2026-08-15: MISSING
- 2026-08-16: MISSING
- 2026-08-17: MISSING
- 2026-08-18: MISSING
- 2026-08-19: MISSING
- 2026-08-20: MISSING
- 2026-08-21: MISSING
- 2026-08-22: MISSING
- 2026-08-23: MISSING
- 2026-08-24: MISSING
- 2026-08-25: MISSING
- 2026-08-26: MISSING
- 2026-08-27: MISSING
- 2026-08-28: MISSING
- 2026-08-29: MISSING
- 2026-08-30

### Error 2026-08-30T00:46:26+00:00
```
2026-08-30T00:46:26.8639672Z === RUN   TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate
2026-08-30T00:46:29.8527187Z     resource_test.go:991: Adding variable clusterName=test-acc-tf-c-5389426063810955211
2026-08-30T00:46:29.8528265Z     resource_test.go:991: Adding variable groupId=6a937d62f71a0dd24352eb17
2026-08-30T00:48:29.6772956Z === CONT  TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate
2026-08-30T01:00:09.8428258Z === NAME  TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate
2026-08-30T01:00:09.8429898Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName2=test-acc-tf-c-6863946461333983314
2026-08-30T01:00:10.0181065Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName3=test-acc-tf-c-6491582379342476715
2026-08-30T01:00:10.1937486Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName4=test-acc-tf-c-8616745399526840941
2026-08-30T01:00:15.2396022Z   
2026-08-30T01:00:15.2396643Z     resource_test.go:991: Step 2/4 error: Error running apply: exit status 1
2026-08-30T01:00:15.2397066Z         
2026-08-30T01:00:15.2397450Z         Error: Error in update
2026-08-30T01:00:15.2397768Z         
2026-08-30T01:00:15.2398135Z           with mongodbatlas_advanced_cluster.test,
2026-08-30T01:00:15.2399025Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-08-30T01:00:15.2399828Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-08-30T01:00:15.2400210Z         
2026-08-30T01:00:15.2400672Z         cluster name: test-acc-tf-c-5389426063810955211, API error details:
2026-08-30T01:00:15.2402184Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6a937d62f71a0dd24352eb17/clusters/test-acc-tf-c-5389426063810955211
2026-08-30T01:00:15.2403151Z         PATCH: HTTP 400 Bad Request (Error code: "ATLAS_GENERAL_ERROR") Detail:
2026-08-30T01:00:15.2404014Z         Reason: In order to enable Latest Version With Auto Upgrades, a cluster must
2026-08-30T01:00:15.2404857Z         be running the most recent MongoDB Major Version.. Reason: Bad Request.
2026-08-30T01:00:15.2405586Z         Params: [In order to enable Latest Version With Auto Upgrades, a cluster must
2026-08-30T01:00:15.2406380Z         be running the most recent MongoDB Major Version.], BadRequestDetail: 
2026-08-30T01:02:46.7190372Z --- FAIL: TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate (860.32s)
```

- 2026-08-31: MISSING
- 2026-09-01: MISSING
- 2026-09-02: MISSING
- 2026-09-03: MISSING
- 2026-09-04: MISSING
