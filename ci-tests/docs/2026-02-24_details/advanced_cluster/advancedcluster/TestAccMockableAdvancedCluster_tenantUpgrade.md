# advanced_cluster/advancedcluster/TestAccMockableAdvancedCluster_tenantUpgrade Test Details
# Found 33 TestRuns in dev, qa from 2026-01-26 to 2026-02-24 from master branch: 1 unique tests, PASS(x 30) FAIL(x 3)
Success rate: 90.91%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-31 00:35](#error-2026-01-31t0035180000) |  | dev | timeout | 11019.08s
[2026-02-02 00:38](#error-2026-02-02t0038480000) |  | dev | timeout | 11009.05s
[2026-02-03 00:39](#error-2026-02-03t0039280000) | ATLAS_GENERAL_ERROR /api/atlas/v2/groups/698143beb2e54ee995907df2/clusters/tenantUpgrade | dev |  | 113.04s

### Timeline
- 2026-01-25: MISSING
- 2026-01-26 PASS 21 minutes
- 2026-01-27 PASS 26 minutes
- 2026-01-28 PASS 24 minutes
- 2026-01-29 PASS 31 minutes
- 2026-01-30 PASS 37 minutes
- 2026-01-31

### Error 2026-01-31T00:35:18+00:00
```
2026-01-31T00:35:18.6272483Z === RUN   TestAccMockableAdvancedCluster_tenantUpgrade
2026-01-31T00:35:19.7487331Z     resource_test.go:54: Adding variable groupId=697d4e447d00588dcf9f1901
2026-01-31T00:35:19.7488172Z     resource_test.go:54: Adding variable clusterName=test-acc-tf-c-651072384029347002
2026-01-31T00:36:56.2140471Z === CONT  TestAccMockableAdvancedCluster_tenantUpgrade
2026-01-31T00:37:51.1516218Z === NAME  TestAccMockableAdvancedCluster_tenantUpgrade
2026-01-31T00:37:51.1517534Z     pre_check.go:46: Time before creating cluster: 2026-01-31T00:37:51.151351353Z, ProjectID: 697d4e447d00588dcf9f1901, Cluster name: test-acc-tf-c-651072384029347002
2026-01-31T00:38:24.0264654Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName2=test-acc-tf-c-1906903694876408184
2026-01-31T00:38:24.4975314Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName3=test-acc-tf-c-7352477762258495844
2026-01-31T00:38:24.8025615Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName4=test-acc-tf-c-8267225134829290661
2026-01-31T00:38:25.1267674Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName5=test-acc-tf-c-3270096194010905947
2026-01-31T00:38:25.4635859Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName6=test-acc-tf-c-6396520722860891768
2026-01-31T02:17:01.6051521Z   
2026-01-31T03:38:32.6380421Z === NAME  TestAccMockableAdvancedCluster_tenantUpgrade
2026-01-31T03:38:32.6381359Z     resource_test.go:54: Step 2/3 error: Error running apply: exit status 1
2026-01-31T03:38:32.6381980Z         
2026-01-31T03:38:32.6382414Z         Error: Error in tenant upgrade
2026-01-31T03:38:32.6382846Z         
2026-01-31T03:38:32.6383399Z           with mongodbatlas_advanced_cluster.test,
2026-01-31T03:38:32.6384645Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-01-31T03:38:32.6385699Z           12: 	resource "mongodbatlas_advanced_cluster" "test" {
2026-01-31T03:38:32.6386221Z         
2026-01-31T03:38:32.6386984Z         cluster=test-acc-tf-c-651072384029347002 didn't reach desired state: IDLE,
2026-01-31T03:38:32.6388076Z         error: timeout while waiting for state to become 'IDLE' (last state:
2026-01-31T03:38:32.6388822Z         'UPDATING', timeout: 3h0m0s)
2026-01-31T03:40:34.9544028Z --- FAIL: TestAccMockableAdvancedCluster_tenantUpgrade (11019.85s)
```

- 2026-02-01: MISSING
- 2026-02-02

### Error 2026-02-02T00:38:48+00:00
```
2026-02-02T00:38:48.8801618Z === RUN   TestAccMockableAdvancedCluster_tenantUpgrade
2026-02-02T00:38:49.8139780Z     resource_test.go:54: Adding variable clusterName=test-acc-tf-c-1001852834196857171
2026-02-02T00:38:49.8141535Z     resource_test.go:54: Adding variable groupId=697ff216197cc66080b0d943
2026-02-02T00:40:19.9784594Z === CONT  TestAccMockableAdvancedCluster_tenantUpgrade
2026-02-02T00:41:09.9226109Z === NAME  TestAccMockableAdvancedCluster_tenantUpgrade
2026-02-02T00:41:09.9228475Z     pre_check.go:46: Time before creating cluster: 2026-02-02T00:41:09.922269785Z, ProjectID: 697ff216197cc66080b0d943, Cluster name: test-acc-tf-c-1001852834196857171
2026-02-02T00:41:41.7764185Z === NAME  TestAccMockableAdvancedCluster_tenantUpgrade
2026-02-02T00:41:41.7767139Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName2=test-acc-tf-c-1471289383812214799
2026-02-02T00:41:41.9539344Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName3=test-acc-tf-c-5075266180790736652
2026-02-02T00:41:42.1413565Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName4=test-acc-tf-c-8279345934741430749
2026-02-02T02:20:27.4426913Z   
2026-02-02T03:41:46.5599462Z === NAME  TestAccMockableAdvancedCluster_tenantUpgrade
2026-02-02T03:41:46.5600413Z     resource_test.go:54: Step 2/3 error: Error running apply: exit status 1
2026-02-02T03:41:46.5601031Z         
2026-02-02T03:41:46.5601472Z         Error: Error in tenant upgrade
2026-02-02T03:41:46.5601904Z         
2026-02-02T03:41:46.5602646Z           with mongodbatlas_advanced_cluster.test,
2026-02-02T03:41:46.5603837Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-02-02T03:41:46.5604922Z           12: 	resource "mongodbatlas_advanced_cluster" "test" {
2026-02-02T03:41:46.5605460Z         
2026-02-02T03:41:46.5606243Z         cluster=test-acc-tf-c-1001852834196857171 didn't reach desired state: IDLE,
2026-02-02T03:41:46.5607341Z         error: timeout while waiting for state to become 'IDLE' (last state:
2026-02-02T03:41:46.5608102Z         'UPDATING', timeout: 3h0m0s)
2026-02-02T03:43:48.4955296Z --- FAIL: TestAccMockableAdvancedCluster_tenantUpgrade (11009.45s)
```

- 2026-02-03

### Error 2026-02-03T00:39:28+00:00
```
2026-02-03T00:39:28.9662101Z === RUN   TestAccMockableAdvancedCluster_tenantUpgrade
2026-02-03T00:39:30.6534270Z     resource_test.go:54: Adding variable groupId=698143beb2e54ee995907df2
2026-02-03T00:39:30.6535116Z     resource_test.go:54: Adding variable clusterName=test-acc-tf-c-41290850162275255
2026-02-03T00:42:03.6229205Z === CONT  TestAccMockableAdvancedCluster_tenantUpgrade
2026-02-03T00:42:48.6602655Z === NAME  TestAccMockableAdvancedCluster_tenantUpgrade
2026-02-03T00:42:48.6603715Z     pre_check.go:46: Time before creating cluster: 2026-02-03T00:42:48.659886794Z, ProjectID: 698143beb2e54ee995907df2, Cluster name: test-acc-tf-c-41290850162275255
2026-02-03T00:43:24.2386379Z === NAME  TestAccMockableAdvancedCluster_tenantUpgrade
2026-02-03T00:43:24.2386980Z     resource_test.go:54: Step 2/3 error: Error running apply: exit status 1
2026-02-03T00:43:24.2387576Z         
2026-02-03T00:43:24.2387869Z         Error: Error in tenant upgrade
2026-02-03T00:43:24.2388142Z         
2026-02-03T00:43:24.2388476Z           with mongodbatlas_advanced_cluster.test,
2026-02-03T00:43:24.2389242Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-02-03T00:43:24.2389904Z           12: 	resource "mongodbatlas_advanced_cluster" "test" {
2026-02-03T00:43:24.2390387Z         
2026-02-03T00:43:24.2390887Z         cluster name: test-acc-tf-c-41290850162275255, API error details:
2026-02-03T00:43:24.2391601Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/698143beb2e54ee995907df2/clusters/tenantUpgrade
2026-02-03T00:43:24.2392285Z         POST: HTTP 400 Bad Request (Error code: "ATLAS_GENERAL_ERROR") Detail:
2026-02-03T00:43:24.2392854Z         Reason: No Capacity. Reason: Bad Request. Params: [No Capacity],
2026-02-03T00:43:24.2393278Z         BadRequestDetail: 
2026-02-03T00:43:55.3390769Z --- FAIL: TestAccMockableAdvancedCluster_tenantUpgrade (113.41s)
```

- 2026-02-04 PASS 36 minutes
- 2026-02-05 PASS 26 minutes
- 2026-02-06 PASS 24 minutes
- 2026-02-07 PASS 23 minutes
- 2026-02-08: MISSING
- 2026-02-09 PASS 25 minutes
- 2026-02-10 PASS 25 minutes
- 2026-02-11 PASS 25 minutes
- 2026-02-12 PASS 24 minutes
- 2026-02-13 PASS 25 minutes
- 2026-02-14 PASS 24 minutes
- 2026-02-15: MISSING
- 2026-02-16 PASS 25 minutes
- 2026-02-17 PASS 21 minutes
- 2026-02-18 PASS 28 minutes
- 2026-02-19 PASS 42 minutes
- 2026-02-20 PASS 26 minutes
- 2026-02-21 PASS 27 minutes
- 2026-02-22: MISSING
- 2026-02-23 PASS 27 minutes
- 2026-02-24 PASS 26 minutes

## QA Environment
### Timeline
- 2026-01-25: MISSING
- 2026-01-26: MISSING
- 2026-01-27: MISSING
- 2026-01-28: MISSING
- 2026-01-29: MISSING
- 2026-01-30: MISSING
- 2026-01-31: MISSING
- 2026-02-01 PASS 26 minutes
- 2026-02-02: MISSING
- 2026-02-03: MISSING
- 2026-02-04 PASS 22 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING
- 2026-02-07: MISSING
- 2026-02-08 PASS 26 minutes
- 2026-02-09: MISSING
- 2026-02-10: MISSING
- 2026-02-11: MISSING
- 2026-02-12: MISSING
- 2026-02-13: MISSING
- 2026-02-14: MISSING
- 2026-02-15 PASS 31 minutes
- 2026-02-16: MISSING
- 2026-02-17
  - PASS 24 minutes
  - PASS 18 minutes
- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20: MISSING
- 2026-02-21: MISSING
- 2026-02-22 PASS 26 minutes
- 2026-02-23: MISSING
- 2026-02-24: MISSING
