# advanced_cluster/advancedcluster/TestAccMockableAdvancedCluster_tenantUpgrade Test Details
# Found 31 TestRuns in dev, qa from 2025-10-06 to 2025-11-04 from master branch: 1 unique tests, PASS(x 29) TIMEOUT FAIL
Success rate: 96.67%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-07 00:27](#error-2025-10-07t0027390000) |  | dev | timeout | 17839.00s
[2025-10-30 00:28](#error-2025-10-30t0028130000) |  | dev | timeout | 11918.09s

## Timeline
- 2025-10-05: MISSING
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
- 2025-10-23 PASS 33 minutes
- 2025-10-24 PASS an hour
- 2025-10-25 PASS 40 minutes
- 2025-10-26 PASS 21 minutes
- 2025-10-27 PASS an hour
- 2025-10-28 PASS 20 minutes
- 2025-10-29 PASS 28 minutes
- 2025-10-30

### Error 2025-10-30T00:28:13+00:00
```
2025-10-30T00:28:13.2697105Z === RUN   TestAccMockableAdvancedCluster_tenantUpgrade
2025-10-30T00:28:18.3889476Z     resource_test.go:94: Adding variable groupId=6902b11de2dc7470847b8fef
2025-10-30T00:28:18.3890339Z     resource_test.go:94: Adding variable clusterName=test-acc-tf-c-8970453755243876949
2025-10-30T00:29:52.5087812Z === CONT  TestAccMockableAdvancedCluster_tenantUpgrade
2025-10-30T00:30:47.4719673Z === NAME  TestAccMockableAdvancedCluster_tenantUpgrade
2025-10-30T00:30:47.4720946Z     pre_check.go:46: Time before creating cluster: 2025-10-30T00:30:47.471652011Z, ProjectID: 6902b11de2dc7470847b8fef, Cluster name: test-acc-tf-c-8970453755243876949
2025-10-30T00:31:20.2231242Z === NAME  TestAccMockableAdvancedCluster_tenantUpgrade
2025-10-30T00:31:20.2233002Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName2=test-acc-tf-c-7618741531177568821
2025-10-30T00:31:20.9966849Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName3=test-acc-tf-c-1853270400503789627
2025-10-30T00:31:21.2186703Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName4=test-acc-tf-c-5453186812358773059
2025-10-30T00:31:21.4626673Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName5=test-acc-tf-c-8242992937060996441
2025-10-30T00:31:21.6856560Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName6=test-acc-tf-c-7158026017892682070
2025-10-30T03:48:26.2854452Z === NAME  TestAccMockableAdvancedCluster_tenantUpgrade
2025-10-30T03:48:26.2855738Z     resource_test.go:94: Error running post-test destroy, there may be dangling resources: exit status 1
2025-10-30T03:48:26.2856585Z         
2025-10-30T03:48:26.2857044Z         Error: Error in delete
2025-10-30T03:48:26.2857497Z         
2025-10-30T03:48:26.2858183Z         cluster=test-acc-tf-c-8970453755243876949 didn't reach desired state:
2025-10-30T03:48:26.2858970Z         DELETED, error: timeout while waiting for state to become 'DELETED' (last
2025-10-30T03:48:26.2859533Z         state: 'DELETING', timeout: 3h0m0s)
2025-10-30T03:48:26.3234043Z --- FAIL: TestAccMockableAdvancedCluster_tenantUpgrade (11918.95s)
```

- 2025-10-31 PASS 26 minutes
- 2025-11-01: MISSING
- 2025-11-02 PASS 20 minutes
- 2025-11-03 PASS 19 minutes
- 2025-11-04 PASS 24 minutes