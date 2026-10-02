# advanced_cluster/advancedcluster/TestAccMockableAdvancedCluster_tenantUpgrade Test Details
# Found 38 TestRuns in dev, qa from 2026-09-02 to 2026-10-02 from master branch: 1 unique tests, PASS(x 34) FAIL(x 4)
Success rate: 89.47%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-09-22 00:43](#error-2026-09-22t0043000000) |  | dev | timeout | 10962.02s
[2026-09-23 00:40](#error-2026-09-23t0040210000) |  | dev | timeout | 10967.04s
[2026-09-24 00:42](#error-2026-09-24t0042430000) |  | dev | timeout | 10927.00s
[2026-10-01 00:52](#error-2026-10-01t0052160000) |  | dev | timeout | 10926.05s

### Timeline
- 2026-09-01: MISSING
- 2026-09-02 PASS 27 minutes
- 2026-09-03
  - PASS 25 minutes
  - PASS 26 minutes
- 2026-09-04 PASS 38 minutes
- 2026-09-05 PASS 26 minutes
- 2026-09-06: MISSING
- 2026-09-07 PASS 25 minutes
- 2026-09-08 PASS 25 minutes
- 2026-09-09 PASS 26 minutes
- 2026-09-10 PASS 25 minutes
- 2026-09-11
  - PASS an hour
  - PASS 37 minutes
- 2026-09-12 PASS 22 minutes
- 2026-09-13: MISSING
- 2026-09-14 PASS 24 minutes
- 2026-09-15 PASS 26 minutes
- 2026-09-16 PASS 25 minutes
- 2026-09-17 PASS 33 minutes
- 2026-09-18 PASS 31 minutes
- 2026-09-19 PASS 25 minutes
- 2026-09-20: MISSING
- 2026-09-21 PASS 24 minutes
- 2026-09-22
  - FAIL 3 hours

### Error 2026-09-22T00:43:00+00:00
```
2026-09-22T00:43:00.5373894Z === RUN   TestAccMockableAdvancedCluster_tenantUpgrade
2026-09-22T00:43:00.7539603Z     resource_test.go:58: Adding variable groupId=6ab1cf11a17d32e660126f4d
2026-09-22T00:43:00.7542559Z     resource_test.go:58: Adding variable clusterName=test-acc-tf-c-3562422392560324218
2026-09-22T00:44:34.6601355Z === CONT  TestAccMockableAdvancedCluster_tenantUpgrade
2026-09-22T00:44:35.8332957Z   diagnostic_detail=
2026-09-22T00:44:35.8465111Z    diagnostic_attribute="AttributeName(\"replication_specs\").ElementKeyInt(0).AttributeName(\"region_configs\")"
2026-09-22T00:46:03.8082121Z === NAME  TestAccMockableAdvancedCluster_tenantUpgrade
2026-09-22T00:46:03.8084293Z     pre_check.go:46: Time before creating cluster: 2026-09-22T00:46:03.8078631Z, ProjectID: 6ab1cf11a17d32e660126f4d, Cluster name: test-acc-tf-c-3562422392560324218
2026-09-22T00:46:36.2700034Z === NAME  TestAccMockableAdvancedCluster_tenantUpgrade
2026-09-22T00:46:36.2701658Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName2=test-acc-tf-c-2587450738505986858
2026-09-22T00:46:36.7152467Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName3=test-acc-tf-c-1018435697269016679
2026-09-22T00:46:37.0095230Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName4=test-acc-tf-c-730899208532505966
2026-09-22T00:46:37.2885916Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName5=test-acc-tf-c-8905574357082667252
2026-09-22T00:46:37.5910097Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName6=test-acc-tf-c-71488141665876602
2026-09-22T03:46:44.5942878Z === NAME  TestAccMockableAdvancedCluster_tenantUpgrade
2026-09-22T03:46:44.5943691Z     resource_test.go:58: Step 2/3 error: Error running apply: exit status 1
2026-09-22T03:46:44.5944172Z         
2026-09-22T03:46:44.5944511Z         Error: Error in tenant upgrade
2026-09-22T03:46:44.5944812Z         
2026-09-22T03:46:44.5945150Z           with mongodbatlas_advanced_cluster.test,
2026-09-22T03:46:44.5945801Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-09-22T03:46:44.5946411Z           12: 	resource "mongodbatlas_advanced_cluster" "test" {
2026-09-22T03:46:44.5946750Z         
2026-09-22T03:46:44.5947211Z         cluster=test-acc-tf-c-3562422392560324218 didn't reach desired state: IDLE,
2026-09-22T03:46:44.5948055Z         error: timeout while waiting for state to become 'IDLE' (last state:
2026-09-22T03:46:44.5948516Z         'UPDATING', timeout: 3h0m0s)
2026-09-22T03:47:15.8499357Z --- FAIL: TestAccMockableAdvancedCluster_tenantUpgrade (10962.21s)
```

  - PASS 26 minutes
- 2026-09-23
  - FAIL 3 hours

### Error 2026-09-23T00:40:21+00:00
```
2026-09-23T00:40:21.8827187Z === RUN   TestAccMockableAdvancedCluster_tenantUpgrade
2026-09-23T00:40:22.0069127Z     resource_test.go:58: Adding variable clusterName=test-acc-tf-c-2015555431096251554
2026-09-23T00:40:22.0069960Z     resource_test.go:58: Adding variable groupId=6ab31ff2653bb1f6237cb878
2026-09-23T00:41:55.6396746Z === CONT  TestAccMockableAdvancedCluster_tenantUpgrade
2026-09-23T00:43:30.1277209Z === NAME  TestAccMockableAdvancedCluster_tenantUpgrade
2026-09-23T00:43:30.1278397Z     pre_check.go:46: Time before creating cluster: 2026-09-23T00:43:30.127419298Z, ProjectID: 6ab31ff2653bb1f6237cb878, Cluster name: test-acc-tf-c-2015555431096251554
2026-09-23T00:44:02.5252120Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName2=test-acc-tf-c-3184333968724099199
2026-09-23T00:44:03.3276276Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName3=test-acc-tf-c-1996522015159715241
2026-09-23T00:44:03.7285358Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName4=test-acc-tf-c-518550817274954354
2026-09-23T03:44:11.1352736Z === NAME  TestAccMockableAdvancedCluster_tenantUpgrade
2026-09-23T03:44:11.1353115Z     resource_test.go:58: Step 2/3 error: Error running apply: exit status 1
2026-09-23T03:44:11.1353429Z         
2026-09-23T03:44:11.1353684Z         Error: Error in tenant upgrade
2026-09-23T03:44:11.1353920Z         
2026-09-23T03:44:11.1354218Z           with mongodbatlas_advanced_cluster.test,
2026-09-23T03:44:11.1354823Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-09-23T03:44:11.1355405Z           12: 	resource "mongodbatlas_advanced_cluster" "test" {
2026-09-23T03:44:11.1355702Z         
2026-09-23T03:44:11.1356293Z         cluster=test-acc-tf-c-2015555431096251554 didn't reach desired state: IDLE,
2026-09-23T03:44:11.1356913Z         error: timeout while waiting for state to become 'IDLE' (last state:
2026-09-23T03:44:11.1357368Z         'UPDATING', timeout: 3h0m0s)
2026-09-23T03:44:42.4323404Z --- FAIL: TestAccMockableAdvancedCluster_tenantUpgrade (10967.43s)
```

  - PASS 31 minutes
- 2026-09-24

### Error 2026-09-24T00:42:43+00:00
```
2026-09-24T00:42:43.1808591Z === RUN   TestAccMockableAdvancedCluster_tenantUpgrade
2026-09-24T00:42:43.3961363Z     resource_test.go:58: Adding variable groupId=6ab471ffff00324af47c70d1
2026-09-24T00:42:43.3962487Z     resource_test.go:58: Adding variable clusterName=test-acc-tf-c-2005135676237572549
2026-09-24T00:44:12.5259268Z === CONT  TestAccMockableAdvancedCluster_tenantUpgrade
2026-09-24T00:45:06.9583032Z === NAME  TestAccMockableAdvancedCluster_tenantUpgrade
2026-09-24T00:45:06.9584936Z     pre_check.go:46: Time before creating cluster: 2026-09-24T00:45:06.957992741Z, ProjectID: 6ab471ffff00324af47c70d1, Cluster name: test-acc-tf-c-2005135676237572549
2026-09-24T00:45:39.1727841Z === NAME  TestAccMockableAdvancedCluster_tenantUpgrade
2026-09-24T00:45:39.1729320Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName2=test-acc-tf-c-3322091987778160888
2026-09-24T00:45:39.6861586Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName3=test-acc-tf-c-8604896082357827769
2026-09-24T00:45:39.9632221Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName4=test-acc-tf-c-1285255534661348128
2026-09-24T00:45:40.2343426Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName5=test-acc-tf-c-6067400553449194064
2026-09-24T00:45:40.5098409Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName6=test-acc-tf-c-1676149331284756655
2026-09-24T03:45:47.2794077Z === NAME  TestAccMockableAdvancedCluster_tenantUpgrade
2026-09-24T03:45:47.2794980Z     resource_test.go:58: Step 2/3 error: Error running apply: exit status 1
2026-09-24T03:45:47.2795524Z         
2026-09-24T03:45:47.2796110Z         Error: Error in tenant upgrade
2026-09-24T03:45:47.2796451Z         
2026-09-24T03:45:47.2796827Z           with mongodbatlas_advanced_cluster.test,
2026-09-24T03:45:47.2797571Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-09-24T03:45:47.2798251Z           12: 	resource "mongodbatlas_advanced_cluster" "test" {
2026-09-24T03:45:47.2798618Z         
2026-09-24T03:45:47.2799398Z         cluster=test-acc-tf-c-2005135676237572549 didn't reach desired state: IDLE,
2026-09-24T03:45:47.2800117Z         error: timeout while waiting for state to become 'IDLE' (last state:
2026-09-24T03:45:47.2800644Z         'UPDATING', timeout: 3h0m0s)
2026-09-24T03:46:18.7576131Z --- FAIL: TestAccMockableAdvancedCluster_tenantUpgrade (10927.02s)
```

- 2026-09-25 PASS 25 minutes
- 2026-09-26: MISSING
- 2026-09-27: MISSING
- 2026-09-28 PASS 25 minutes
- 2026-09-29
  - PASS 25 minutes
  - PASS 26 minutes
  - PASS 23 minutes
- 2026-09-30 PASS 23 minutes
- 2026-10-01

### Error 2026-10-01T00:52:16+00:00
```
2026-10-01T00:52:16.3330388Z === RUN   TestAccMockableAdvancedCluster_tenantUpgrade
2026-10-01T00:52:16.5462279Z     resource_test.go:58: Adding variable groupId=6abdaebdc17c78f6395c7949
2026-10-01T00:52:16.5463165Z     resource_test.go:58: Adding variable clusterName=test-acc-tf-c-8085723244657090333
2026-10-01T00:53:59.2982892Z === CONT  TestAccMockableAdvancedCluster_tenantUpgrade
2026-10-01T00:54:53.5547010Z === NAME  TestAccMockableAdvancedCluster_tenantUpgrade
2026-10-01T00:54:53.5548291Z     pre_check.go:46: Time before creating cluster: 2026-10-01T00:54:53.554401409Z, ProjectID: 6abdaebdc17c78f6395c7949, Cluster name: test-acc-tf-c-8085723244657090333
2026-10-01T00:55:25.8120369Z === NAME  TestAccMockableAdvancedCluster_tenantUpgrade
2026-10-01T00:55:25.8121802Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName2=test-acc-tf-c-5229836168095457781
2026-10-01T00:55:26.0496173Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName3=test-acc-tf-c-6795544059911669529
2026-10-01T00:55:26.4208877Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName4=test-acc-tf-c-8933409588742023877
2026-10-01T00:55:26.6429876Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName5=test-acc-tf-c-5175733274149316162
2026-10-01T00:55:26.8718607Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName6=test-acc-tf-c-7329646776534122630
2026-10-01T00:55:27.0991367Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName7=test-acc-tf-c-752719869118978050
2026-10-01T00:55:32.0815169Z === NAME  TestAccMockableAdvancedCluster_tenantUpgrade
2026-10-01T00:55:32.0816461Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName8=test-acc-tf-c-4137959445736037836
2026-10-01T03:55:33.6830268Z === NAME  TestAccMockableAdvancedCluster_tenantUpgrade
2026-10-01T03:55:33.6830901Z     resource_test.go:58: Step 2/3 error: Error running apply: exit status 1
2026-10-01T03:55:33.6831350Z         
2026-10-01T03:55:33.6831673Z         Error: Error in tenant upgrade
2026-10-01T03:55:33.6832047Z         
2026-10-01T03:55:33.6832467Z           with mongodbatlas_advanced_cluster.test,
2026-10-01T03:55:33.6833230Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-10-01T03:55:33.6833844Z           12: 	resource "mongodbatlas_advanced_cluster" "test" {
2026-10-01T03:55:33.6834140Z         
2026-10-01T03:55:33.6834825Z         cluster=test-acc-tf-c-8085723244657090333 didn't reach desired state: IDLE,
2026-10-01T03:55:33.6835619Z         error: timeout while waiting for state to become 'IDLE' (last state:
2026-10-01T03:55:33.6836007Z         'UPDATING', timeout: 3h0m0s)
2026-10-01T03:56:04.8336296Z --- FAIL: TestAccMockableAdvancedCluster_tenantUpgrade (10926.49s)
```

- 2026-10-02 PASS 23 minutes

## QA Environment
### Timeline
- 2026-09-01: MISSING
- 2026-09-02: MISSING
- 2026-09-03: MISSING
- 2026-09-04: MISSING
- 2026-09-05: MISSING
- 2026-09-06 PASS 21 minutes
- 2026-09-07: MISSING
- 2026-09-08: MISSING
- 2026-09-09: MISSING
- 2026-09-10: MISSING
- 2026-09-11: MISSING
- 2026-09-12: MISSING
- 2026-09-13 PASS 25 minutes
- 2026-09-14: MISSING
- 2026-09-15: MISSING
- 2026-09-16 PASS 24 minutes
- 2026-09-17: MISSING
- 2026-09-18: MISSING
- 2026-09-19: MISSING
- 2026-09-20 PASS 24 minutes
- 2026-09-21: MISSING
- 2026-09-22: MISSING
- 2026-09-23: MISSING
- 2026-09-24: MISSING
- 2026-09-25: MISSING
- 2026-09-26: MISSING
- 2026-09-27 PASS 24 minutes
- 2026-09-28: MISSING
- 2026-09-29 PASS 25 minutes
- 2026-09-30: MISSING
- 2026-10-01: MISSING
- 2026-10-02: MISSING
