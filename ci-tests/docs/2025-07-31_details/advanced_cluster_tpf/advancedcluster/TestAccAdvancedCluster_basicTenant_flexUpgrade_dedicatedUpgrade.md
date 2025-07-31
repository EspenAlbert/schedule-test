# advanced_cluster_tpf/advancedcluster/TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade Test Details
# Found 32 TestRuns in dev, qa from 2025-07-02 to 2025-07-31 from master branch: 1 unique tests, PASS(x 23) FAIL(x 9)
Success rate: 71.88%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-07-10 04:28](#error-2025-07-10t0428210000) |  | dev | timeout | 10875.07s
[2025-07-23 12:32](#error-2025-07-23t1232270000) |  | qa | timeout | 10875.01s
[2025-07-23 17:30](#error-2025-07-23t1730380000) |  | qa | timeout | 10871.02s
[2025-07-25 01:51](#error-2025-07-25t0151250000) |  | dev |  | 987.02s
[2025-07-26 01:53](#error-2025-07-26t0153100000) |  | dev |  | 971.02s
[2025-07-28 01:56](#error-2025-07-28t0156310000) |  | dev |  | 1081.02s
[2025-07-29 01:51](#error-2025-07-29t0151110000) |  | dev |  | 1013.00s
[2025-07-30 01:51](#error-2025-07-30t0151200000) |  | dev | unknown | 1014.02s
[2025-07-31 03:21](#error-2025-07-31t0321450000) |  | dev |  | 1462.04s

## Timeline
- 2025-07-01: MISSING
- 2025-07-02 PASS 20 minutes
- 2025-07-03 PASS 19 minutes
- 2025-07-04 PASS 30 minutes
- 2025-07-05 PASS 19 minutes
- 2025-07-06 PASS 17 minutes
- 2025-07-07 PASS 19 minutes
- 2025-07-08 PASS 21 minutes
- 2025-07-09 PASS 23 minutes
- 2025-07-10
  - FAIL 3 hours

### Error 2025-07-10T04:28:21+00:00
```
2025-07-10T04:28:21.9739521Z === RUN   TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade
2025-07-10T04:28:21.9741309Z     pre_check.go:40: Time before creating cluster: 2025-07-10T00:29:38.506849219Z, ProjectID: 686f096b964afc762c202a8e, Cluster name: test-acc-tf-c-3439852545736574355
2025-07-10T04:28:21.9757425Z    test_working_directory=/tmp/plugintest993467233 test_step_number=2 test_name=TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade test_terraform_path=/home/runner/work/_temp/0240f3b0-a8c0-47f9-9b6c-80b34a4178d7/terraform
2025-07-10T04:28:21.9759507Z     resource_advanced_cluster_test.go:156: Step 2/3 error: Error running apply: exit status 1
2025-07-10T04:28:21.9760210Z         
2025-07-10T04:28:21.9761116Z         Error: error upgrading to a flex cluster: test-acc-tf-c-3439852545736574355
2025-07-10T04:28:21.9761753Z         
2025-07-10T04:28:21.9762290Z           with mongodbatlas_advanced_cluster.test,
2025-07-10T04:28:21.9763417Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-07-10T04:28:21.9764441Z           12: resource "mongodbatlas_advanced_cluster" "test" {
2025-07-10T04:28:21.9764959Z         
2025-07-10T04:28:21.9765711Z         timeout while waiting for state to become 'IDLE' (last state: 'UPDATING',
2025-07-10T04:28:21.9766412Z         timeout: 3h0m0s)
2025-07-10T04:28:21.9767089Z --- FAIL: TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade (10875.65s)
```

  - PASS 18 minutes
- 2025-07-11: MISSING
- 2025-07-12 PASS 22 minutes
- 2025-07-13 PASS 23 minutes
- 2025-07-14: MISSING
- 2025-07-15 PASS 19 minutes
- 2025-07-16 PASS 19 minutes
- 2025-07-17 PASS 20 minutes
- 2025-07-18 PASS 19 minutes
- 2025-07-19 PASS 18 minutes
- 2025-07-20 PASS 19 minutes
- 2025-07-21 PASS 18 minutes
- 2025-07-22 PASS 19 minutes
- 2025-07-23
  - PASS an hour
  - FAIL 3 hours

### Error 2025-07-23T12:32:27+00:00
```
2025-07-23T12:32:27.0212766Z === RUN   TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade
2025-07-23T12:32:27.0213770Z     pre_check.go:40: Time before creating cluster: 2025-07-23T08:15:41.424023695Z, ProjectID: 68809a25dafa37582cece141, Cluster name: test-acc-tf-c-532573453965194529
2025-07-23T12:32:27.0224849Z    test_working_directory=/tmp/plugintest603334770
2025-07-23T12:32:27.0225497Z     resource_advanced_cluster_test.go:156: Step 2/3 error: Error running apply: exit status 1
2025-07-23T12:32:27.0225918Z         
2025-07-23T12:32:27.0226368Z         Error: error upgrading to a flex cluster: test-acc-tf-c-532573453965194529
2025-07-23T12:32:27.0226750Z         
2025-07-23T12:32:27.0227072Z           with mongodbatlas_advanced_cluster.test,
2025-07-23T12:32:27.0227805Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-07-23T12:32:27.0228396Z           12: resource "mongodbatlas_advanced_cluster" "test" {
2025-07-23T12:32:27.0228708Z         
2025-07-23T12:32:27.0229158Z         timeout while waiting for state to become 'IDLE' (last state: 'UPDATING',
2025-07-23T12:32:27.0229725Z         timeout: 3h0m0s)
2025-07-23T12:32:27.0230134Z --- FAIL: TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade (10875.10s)
```

  - PASS 26 minutes
  - FAIL 3 hours

### Error 2025-07-23T17:30:38+00:00
```
2025-07-23T17:30:38.7526677Z === RUN   TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade
2025-07-23T17:30:38.7528249Z     pre_check.go:40: Time before creating cluster: 2025-07-23T13:23:42.253310215Z, ProjectID: 6880e2570afa8a5c60506f03, Cluster name: test-acc-tf-c-7578751464079047683
2025-07-23T17:30:38.7556600Z    test_working_directory=/tmp/plugintest3079804275 test_step_number=2
2025-07-23T17:30:38.7557669Z     resource_advanced_cluster_test.go:156: Step 2/3 error: Error running apply: exit status 1
2025-07-23T17:30:38.7558368Z         
2025-07-23T17:30:38.7559145Z         Error: error upgrading to a flex cluster: test-acc-tf-c-7578751464079047683
2025-07-23T17:30:38.7559934Z         
2025-07-23T17:30:38.7560495Z           with mongodbatlas_advanced_cluster.test,
2025-07-23T17:30:38.7561606Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-07-23T17:30:38.7562614Z           12: resource "mongodbatlas_advanced_cluster" "test" {
2025-07-23T17:30:38.7563145Z         
2025-07-23T17:30:38.7563905Z         timeout while waiting for state to become 'IDLE' (last state: 'UPDATING',
2025-07-23T17:30:38.7564601Z         timeout: 3h0m0s)
2025-07-23T17:30:38.7565277Z --- FAIL: TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade (10871.17s)
```

- 2025-07-24 PASS 21 minutes
- 2025-07-25

### Error 2025-07-25T01:51:25+00:00
```
2025-07-25T01:51:25.4308149Z === RUN   TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade
2025-07-25T01:51:25.4309777Z     pre_check.go:40: Time before creating cluster: 2025-07-25T00:31:02.65162849Z, ProjectID: 6882d03f22afec4fb24a6b4b, Cluster name: test-acc-tf-c-5303310044778746071
2025-07-25T01:51:25.4325378Z    test_terraform_path=/home/runner/work/_temp/f6f5def3-7955-45be-888f-a03cefb25fbc/terraform test_working_directory=/tmp/plugintest3576844874 test_step_number=3 test_name=TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade
2025-07-25T01:51:25.4327635Z     resource_advanced_cluster_test.go:156: Step 3/3 error: Error running apply: exit status 1
2025-07-25T01:51:25.4328371Z         
2025-07-25T01:51:25.4328822Z         Error: Error in flex upgrade
2025-07-25T01:51:25.4329262Z         
2025-07-25T01:51:25.4329823Z           with mongodbatlas_advanced_cluster.test,
2025-07-25T01:51:25.4330956Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-07-25T01:51:25.4331978Z           12: resource "mongodbatlas_advanced_cluster" "test" {
2025-07-25T01:51:25.4332505Z         
2025-07-25T01:51:25.4333301Z         cluster=test-acc-tf-c-5303310044778746071 didn't reach desired state: IDLE,
2025-07-25T01:51:25.4334159Z         error: couldn't find resource (21 retries)
2025-07-25T01:51:25.4334927Z --- FAIL: TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade (987.18s)
```

- 2025-07-26

### Error 2025-07-26T01:53:10+00:00
```
2025-07-26T01:53:10.6402668Z === RUN   TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade
2025-07-26T01:53:10.6403559Z     pre_check.go:40: Time before creating cluster: 2025-07-26T00:29:36.756584097Z, ProjectID: 68842169a8aaac041ec4eae8, Cluster name: test-acc-tf-c-2521717679690952659
2025-07-26T01:53:10.6417135Z    test_terraform_path=/home/runner/work/_temp/89427167-5a4f-483d-a4d3-bb99893c9639/terraform
2025-07-26T01:53:10.6417796Z     resource_advanced_cluster_test.go:156: Step 3/3 error: Error running apply: exit status 1
2025-07-26T01:53:10.6418311Z         
2025-07-26T01:53:10.6418569Z         Error: Error in flex upgrade
2025-07-26T01:53:10.6418825Z         
2025-07-26T01:53:10.6419133Z           with mongodbatlas_advanced_cluster.test,
2025-07-26T01:53:10.6419754Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-07-26T01:53:10.6420322Z           12: resource "mongodbatlas_advanced_cluster" "test" {
2025-07-26T01:53:10.6420939Z         
2025-07-26T01:53:10.6421405Z         cluster=test-acc-tf-c-2521717679690952659 didn't reach desired state: IDLE,
2025-07-26T01:53:10.6421905Z         error: couldn't find resource (21 retries)
2025-07-26T01:53:10.6422345Z --- FAIL: TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade (971.20s)
```

- 2025-07-27 PASS 21 minutes
- 2025-07-28

### Error 2025-07-28T01:56:31+00:00
```
2025-07-28T01:56:31.1611080Z === RUN   TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade
2025-07-28T01:56:31.1612749Z     pre_check.go:40: Time before creating cluster: 2025-07-28T00:33:17.65660407Z, ProjectID: 6886c546d543ef30ea6babb6, Cluster name: test-acc-tf-c-3901987733992508571
2025-07-28T01:56:31.1629014Z    test_terraform_path=/home/runner/work/_temp/6392b193-3f8d-4062-97d7-028bab4ed95a/terraform test_name=TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade test_working_directory=/tmp/plugintest864163162 test_step_number=3
2025-07-28T01:56:31.1631236Z     resource_advanced_cluster_test.go:156: Step 3/3 error: Error running apply: exit status 1
2025-07-28T01:56:31.1632000Z         
2025-07-28T01:56:31.1632465Z         Error: Error in flex upgrade
2025-07-28T01:56:31.1632921Z         
2025-07-28T01:56:31.1633479Z           with mongodbatlas_advanced_cluster.test,
2025-07-28T01:56:31.1634644Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-07-28T01:56:31.1635753Z           12: resource "mongodbatlas_advanced_cluster" "test" {
2025-07-28T01:56:31.1636292Z         
2025-07-28T01:56:31.1637408Z         cluster=test-acc-tf-c-3901987733992508571 didn't reach desired state: IDLE,
2025-07-28T01:56:31.1638292Z         error: couldn't find resource (21 retries)
2025-07-28T01:56:31.1639094Z --- FAIL: TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade (1081.20s)
```

- 2025-07-29

### Error 2025-07-29T01:51:11+00:00
```
2025-07-29T01:51:11.9768161Z === RUN   TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade
2025-07-29T01:51:11.9769269Z     pre_check.go:40: Time before creating cluster: 2025-07-29T00:33:30.19560727Z, ProjectID: 688816d3ecd9997600f10f90, Cluster name: test-acc-tf-c-2787455118447949210
2025-07-29T01:51:11.9778418Z    test_terraform_path=/home/runner/work/_temp/15b7945c-b21e-4c39-9f13-09f3d054d375/terraform test_name=TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade test_working_directory=/tmp/plugintest3216673193
2025-07-29T01:51:11.9779586Z     resource_advanced_cluster_test.go:156: Step 3/3 error: Error running apply: exit status 1
2025-07-29T01:51:11.9780018Z         
2025-07-29T01:51:11.9780294Z         Error: Error in flex upgrade
2025-07-29T01:51:11.9780568Z         
2025-07-29T01:51:11.9780906Z           with mongodbatlas_advanced_cluster.test,
2025-07-29T01:51:11.9781553Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-07-29T01:51:11.9782157Z           12: resource "mongodbatlas_advanced_cluster" "test" {
2025-07-29T01:51:11.9782478Z         
2025-07-29T01:51:11.9782942Z         cluster=test-acc-tf-c-2787455118447949210 didn't reach desired state: IDLE,
2025-07-29T01:51:11.9783454Z         error: couldn't find resource (21 retries)
2025-07-29T01:51:11.9783916Z --- FAIL: TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade (1013.03s)
```

- 2025-07-30

### Error 2025-07-30T01:51:20+00:00
GoTestErrorClassification(error_class='unknown',author='human',run_id='2025-07-30T01:51:20.530000+00:00-TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade',confidence=1.0,ts_when='a day ago')

```
2025-07-30T01:51:20.5305502Z === RUN   TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade
2025-07-30T01:51:20.5307246Z     pre_check.go:40: Time before creating cluster: 2025-07-30T00:31:19.189332887Z, ProjectID: 688967d09a270e78174a056e, Cluster name: test-acc-tf-c-3438133400707098847
2025-07-30T01:51:20.5324691Z   
2025-07-30T01:51:20.5325139Z     resource_advanced_cluster_test.go:156: Step 3/3 error: Error running apply: exit status 1
2025-07-30T01:51:20.5325547Z         
2025-07-30T01:51:20.5325807Z         Error: Error in flex upgrade
2025-07-30T01:51:20.5326065Z         
2025-07-30T01:51:20.5326381Z           with mongodbatlas_advanced_cluster.test,
2025-07-30T01:51:20.5327026Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-07-30T01:51:20.5327607Z           12: resource "mongodbatlas_advanced_cluster" "test" {
2025-07-30T01:51:20.5327909Z         
2025-07-30T01:51:20.5328351Z         cluster=test-acc-tf-c-3438133400707098847 didn't reach desired state: IDLE,
2025-07-30T01:51:20.5328841Z         error: couldn't find resource (21 retries)
2025-07-30T01:51:20.5329285Z --- FAIL: TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade (1014.17s)
```

- 2025-07-31

### Error 2025-07-31T03:21:45+00:00
```
2025-07-31T03:21:45.6103280Z === RUN   TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade
2025-07-31T03:21:45.6104164Z     pre_check.go:40: Time before creating cluster: 2025-07-31T00:31:03.54224915Z, ProjectID: 688ab93f85f3692162ffadcc, Cluster name: test-acc-tf-c-4057488257471718981
2025-07-31T03:21:45.6113808Z   
2025-07-31T03:21:45.6114251Z     resource_advanced_cluster_test.go:156: Step 3/3 error: Error running apply: exit status 1
2025-07-31T03:21:45.6114663Z         
2025-07-31T03:21:45.6114921Z         Error: Error in flex upgrade
2025-07-31T03:21:45.6115174Z         
2025-07-31T03:21:45.6115486Z           with mongodbatlas_advanced_cluster.test,
2025-07-31T03:21:45.6116111Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-07-31T03:21:45.6116692Z           12: resource "mongodbatlas_advanced_cluster" "test" {
2025-07-31T03:21:45.6116992Z         
2025-07-31T03:21:45.6117435Z         cluster=test-acc-tf-c-4057488257471718981 didn't reach desired state: IDLE,
2025-07-31T03:21:45.6117928Z         error: couldn't find resource (21 retries)
2025-07-31T03:21:45.6118368Z --- FAIL: TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade (1462.39s)
```
