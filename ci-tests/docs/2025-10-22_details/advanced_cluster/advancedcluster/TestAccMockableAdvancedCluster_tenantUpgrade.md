# advanced_cluster/advancedcluster/TestAccMockableAdvancedCluster_tenantUpgrade Test Details
# Found 44 TestRuns in dev, qa from 2025-09-23 to 2025-10-22 from master branch: 1 unique tests, PASS(x 41) TIMEOUT(x 2) FAIL
Success rate: 97.62%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-09-28 00:29](#error-2025-09-28t0029590000) |  | qa |  | 122.06s
[2025-10-02 00:26](#error-2025-10-02t0026130000) |  | dev | timeout | 17883.00s
[2025-10-07 00:27](#error-2025-10-07t0027390000) |  | dev | timeout | 17839.00s

## Timeline
- 2025-09-22: MISSING
- 2025-09-23 PASS 18 minutes
- 2025-09-24 PASS 19 minutes
- 2025-09-25 PASS 22 minutes
- 2025-09-26 PASS 19 minutes
- 2025-09-27 PASS 23 minutes
- 2025-09-28

### Error 2025-09-28T00:29:59+00:00
```
2025-09-28T00:29:59.8278627Z === RUN   TestAccMockableAdvancedCluster_tenantUpgrade
2025-09-28T00:30:03.1309308Z     resource_test.go:95: Adding variable groupId=68d88187ca428e2ad3dbbb23
2025-09-28T00:30:03.1310393Z     resource_test.go:95: Adding variable clusterName=test-acc-tf-c-2636416529427758817
2025-09-28T00:31:32.1259390Z === CONT  TestAccMockableAdvancedCluster_tenantUpgrade
2025-09-28T00:32:22.1074103Z === NAME  TestAccMockableAdvancedCluster_tenantUpgrade
2025-09-28T00:32:22.1075610Z     pre_check.go:32: Time before creating cluster: 2025-09-28T00:32:22.107046417Z, ProjectID: 68d88187ca428e2ad3dbbb23, Cluster name: test-acc-tf-c-2636416529427758817
2025-09-28T00:32:54.2187044Z === NAME  TestAccMockableAdvancedCluster_tenantUpgrade
2025-09-28T00:32:54.2188601Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName2=test-acc-tf-c-2355328481180600852
2025-09-28T00:32:54.5293922Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName3=test-acc-tf-c-3461586229471372822
2025-09-28T00:32:54.8574671Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName4=test-acc-tf-c-4398666943869588898
2025-09-28T00:32:55.0633184Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName5=test-acc-tf-c-195872184394519003
2025-09-28T00:32:55.2769970Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName6=test-acc-tf-c-7740974006259736203
2025-09-28T00:33:00.7617312Z    test_working_directory=/tmp/plugintest3809768451 test_step_number=2
2025-09-28T00:33:00.7617890Z     resource_test.go:95: Step 2/3 error: Error running apply: exit status 1
2025-09-28T00:33:00.7618256Z         
2025-09-28T00:33:00.7618522Z         Error: Error in tenant upgrade
2025-09-28T00:33:00.7618940Z         
2025-09-28T00:33:00.7619372Z           with mongodbatlas_advanced_cluster.test,
2025-09-28T00:33:00.7620000Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-09-28T00:33:00.7620581Z           12: 	resource "mongodbatlas_advanced_cluster" "test" {
2025-09-28T00:33:00.7621341Z         
2025-09-28T00:33:00.7621858Z         cluster name: test-acc-tf-c-2636416529427758817, API error details:
2025-09-28T00:33:00.7622734Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68d88187ca428e2ad3dbbb23/clusters/tenantUpgrade
2025-09-28T00:33:00.7623296Z         POST: HTTP 403 Forbidden (Error code:
2025-09-28T00:33:00.7623775Z         "ATLAS_RESOURCE_POLICIES_VIOLATION_NOT_AUTHORIZED") Detail: Invalid
2025-09-28T00:33:00.7624345Z         Configuration. Contains selections that are unavailable due to your
2025-09-28T00:33:00.7624912Z         organization's resource policies. Reason: Forbidden. Params: [],
2025-09-28T00:33:00.7625314Z         BadRequestDetail: 
2025-09-28T00:33:31.4458178Z --- FAIL: TestAccMockableAdvancedCluster_tenantUpgrade (122.64s)
```

- 2025-09-29
  - PASS 20 minutes
  - PASS 16 minutes
- 2025-09-30
  - PASS 19 minutes
  - PASS 14 minutes
  - PASS 21 minutes
  - PASS 18 minutes
  - PASS 14 minutes
- 2025-10-01
  - PASS 17 minutes
  - PASS 18 minutes
  - PASS 33 minutes
  - PASS 41 minutes
  - PASS 36 minutes
  - PASS 18 minutes
  - PASS 19 minutes
  - PASS 19 minutes
- 2025-10-02

### Error 2025-10-02T00:26:13+00:00
```
2025-10-02T00:26:13.3315320Z === RUN   TestAccMockableAdvancedCluster_tenantUpgrade
2025-10-02T00:26:16.3354509Z     resource_test.go:95: Adding variable groupId=68ddc6a5a496fb5b13e0e224
2025-10-02T00:26:16.3355200Z     resource_test.go:95: Adding variable clusterName=test-acc-tf-c-5299893955055663139
2025-10-02T00:28:04.4447497Z === CONT  TestAccMockableAdvancedCluster_tenantUpgrade
2025-10-02T00:28:19.4434253Z === NAME  TestAccMockableAdvancedCluster_tenantUpgrade
2025-10-02T00:28:19.4437894Z     pre_check.go:36: Time before creating cluster: 2025-10-02T00:28:19.443085417Z, ProjectID: 68ddc6a5a496fb5b13e0e224, Cluster name: test-acc-tf-c-5299893955055663139
2025-10-02T00:28:51.0823841Z === NAME  TestAccMockableAdvancedCluster_tenantUpgrade
2025-10-02T00:28:51.0825117Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName2=test-acc-tf-c-5949524132780715717
2025-10-02T00:28:51.2249628Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName3=test-acc-tf-c-2922492963179675176
2025-10-02T00:28:51.5001793Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName4=test-acc-tf-c-6763242178075391064
2025-10-02T03:28:55.2414499Z === NAME  TestAccMockableAdvancedCluster_tenantUpgrade
2025-10-02T03:28:55.2415462Z     resource_test.go:95: Step 2/3 error: Error running apply: exit status 1
2025-10-02T03:28:55.2415912Z         
2025-10-02T03:28:55.2416193Z         Error: Error in tenant upgrade
2025-10-02T03:28:55.2416464Z         
2025-10-02T03:28:55.2416885Z           with mongodbatlas_advanced_cluster.test,
2025-10-02T03:28:55.2417612Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-10-02T03:28:55.2418505Z           12: 	resource "mongodbatlas_advanced_cluster" "test" {
2025-10-02T03:28:55.2418820Z         
2025-10-02T03:28:55.2419273Z         cluster=test-acc-tf-c-5299893955055663139 didn't reach desired state: IDLE,
2025-10-02T03:28:55.2419876Z         error: timeout while waiting for state to become 'IDLE' (last state:
2025-10-02T03:28:55.2420299Z         'UPDATING', timeout: 3h0m0s)
2025-10-02T05:26:07.7853688Z panic: test timed out after 5h0m0s
2025-10-02T05:26:07.7854356Z 	running tests:
2025-10-02T05:26:07.7853688Z panic: test timed out after 5h0m0s
2025-10-02T05:26:07.7854356Z 	running tests:
2025-10-02T05:26:07.7857623Z 		TestAccMockableAdvancedCluster_tenantUpgrade (4h58m3s)
```

- 2025-10-03 PASS 42 minutes
- 2025-10-04 PASS 54 minutes
- 2025-10-05 PASS 17 minutes
- 2025-10-06 PASS 19 minutes
- 2025-10-07

### Error 2025-10-07T00:27:39+00:00
```
2025-10-07T00:27:39.6085527Z === RUN   TestAccMockableAdvancedCluster_tenantUpgrade
2025-10-07T00:27:43.0778290Z     resource_test.go:95: Adding variable groupId=68e45e7b507f48738a087c56
2025-10-07T00:27:43.0780450Z     resource_test.go:95: Adding variable clusterName=test-acc-tf-c-8708772177280987540
2025-10-07T00:30:14.9467770Z === CONT  TestAccMockableAdvancedCluster_tenantUpgrade
2025-10-07T00:30:19.9393382Z === NAME  TestAccMockableAdvancedCluster_tenantUpgrade
2025-10-07T00:30:19.9395354Z     pre_check.go:36: Time before creating cluster: 2025-10-07T00:30:19.938984494Z, ProjectID: 68e45e7b507f48738a087c56, Cluster name: test-acc-tf-c-8708772177280987540
2025-10-07T00:30:20.4532435Z   diagnostic_detail=
2025-10-07T00:30:20.4538935Z    diagnostic_severity=ERROR diagnostic_summary="Unable to Move Resource State" tf_proto_version=6.10 tf_provider_addr=registry.terraform.io/hashicorp/mongodbatlas tf_req_id=6183d0b5-5672-e9bd-dbe3-6d4788dfd295 tf_rpc=MoveResourceState
2025-10-07T00:30:52.0501279Z === NAME  TestAccMockableAdvancedCluster_tenantUpgrade
2025-10-07T00:30:52.0502581Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName2=test-acc-tf-c-5963028767911720121
2025-10-07T00:30:52.2310465Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName3=test-acc-tf-c-3913498858695238029
2025-10-07T03:30:55.4887610Z === NAME  TestAccMockableAdvancedCluster_tenantUpgrade
2025-10-07T03:30:55.4888577Z     resource_test.go:95: Step 2/3 error: Error running apply: exit status 1
2025-10-07T03:30:55.4889167Z         
2025-10-07T03:30:55.4889620Z         Error: Error in tenant upgrade
2025-10-07T03:30:55.4890055Z         
2025-10-07T03:30:55.4890586Z           with mongodbatlas_advanced_cluster.test,
2025-10-07T03:30:55.4891691Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-10-07T03:30:55.4892693Z           12: 	resource "mongodbatlas_advanced_cluster" "test" {
2025-10-07T03:30:55.4899923Z         
2025-10-07T03:30:55.4900753Z         cluster=test-acc-tf-c-8708772177280987540 didn't reach desired state: IDLE,
2025-10-07T03:30:55.4901807Z         error: timeout while waiting for state to become 'IDLE' (last state:
2025-10-07T03:30:55.4902522Z         'UPDATING', timeout: 3h0m0s)
2025-10-07T03:38:21.0113156Z   
2025-10-07T05:27:34.3735698Z 	running tests:
2025-10-07T05:27:34.3736611Z 		TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade (4h57m19s)
2025-10-07T05:27:34.3737764Z 		TestAccMockableAdvancedCluster_tenantUpgrade (4h57m19s)
```

- 2025-10-08 PASS 24 minutes
- 2025-10-09 PASS 3 hours
- 2025-10-10 PASS 27 minutes
- 2025-10-11 PASS 26 minutes
- 2025-10-12 PASS 2 hours
- 2025-10-13 PASS 24 minutes
- 2025-10-14 PASS 19 minutes
- 2025-10-15 PASS 19 minutes
- 2025-10-16 PASS 43 minutes
- 2025-10-17 PASS 22 minutes
- 2025-10-18 PASS 19 minutes
- 2025-10-19 PASS 21 minutes
- 2025-10-20
  - PASS 54 minutes
  - PASS 37 minutes
- 2025-10-21 PASS 18 minutes
- 2025-10-22
  - PASS 29 minutes
  - PASS 20 minutes