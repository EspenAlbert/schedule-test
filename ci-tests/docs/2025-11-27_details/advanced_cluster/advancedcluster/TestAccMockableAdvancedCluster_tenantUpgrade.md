# advanced_cluster/advancedcluster/TestAccMockableAdvancedCluster_tenantUpgrade Test Details
# Found 33 TestRuns in dev, qa from 2025-10-29 to 2025-11-27 from master branch: 1 unique tests, PASS(x 21) FAIL(x 12)
Success rate: 63.64%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-30 00:28](#error-2025-10-30t0028130000) |  | dev | timeout | 11918.09s
[2025-11-08 00:29](#error-2025-11-08t0029010000) |  | dev | timeout | 11028.01s
[2025-11-19 00:28](#error-2025-11-19t0028550000) |  | dev | timeout | 11067.10s
[2025-11-19 09:29](#error-2025-11-19t0929570000) |  | dev | timeout | 11181.06s
[2025-11-20 00:27](#error-2025-11-20t0027570000) |  | dev | timeout | 11083.08s
[2025-11-20 10:01](#error-2025-11-20t1001520000) |  | dev | timeout | 11080.09s
[2025-11-21 00:28](#error-2025-11-21t0028250000) |  | dev | timeout | 11112.04s
[2025-11-22 00:26](#error-2025-11-22t0026510000) |  | dev | timeout | 11112.01s
[2025-11-24 00:30](#error-2025-11-24t0030060000) |  | dev | timeout | 11079.09s
[2025-11-25 00:27](#error-2025-11-25t0027180000) |  | dev | timeout | 11041.06s
[2025-11-26 00:28](#error-2025-11-26t0028350000) |  | dev | timeout | 11063.09s
[2025-11-27 00:28](#error-2025-11-27t0028230000) |  | dev | timeout | 11060.08s

### Timeline
- 2025-10-28: MISSING
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
- 2025-11-02: MISSING
- 2025-11-03 PASS 19 minutes
- 2025-11-04 PASS 24 minutes
- 2025-11-05
  - PASS 22 minutes
  - PASS 17 minutes
- 2025-11-06 PASS 26 minutes
- 2025-11-07 PASS 25 minutes
- 2025-11-08

### Error 2025-11-08T00:29:01+00:00
```
2025-11-08T00:29:01.8133351Z === RUN   TestAccMockableAdvancedCluster_tenantUpgrade
2025-11-08T00:29:05.7790713Z     resource_test.go:94: Adding variable clusterName=test-acc-tf-c-8548718170412882741
2025-11-08T00:29:05.7791973Z     resource_test.go:94: Adding variable groupId=690e8ecd0887d8385bbd5c9d
2025-11-08T00:31:08.7763439Z === CONT  TestAccMockableAdvancedCluster_tenantUpgrade
2025-11-08T00:31:38.7468929Z === NAME  TestAccMockableAdvancedCluster_tenantUpgrade
2025-11-08T00:31:38.7470818Z     pre_check.go:46: Time before creating cluster: 2025-11-08T00:31:38.74655642Z, ProjectID: 690e8ecd0887d8385bbd5c9d, Cluster name: test-acc-tf-c-8548718170412882741
2025-11-08T00:32:11.0418864Z === NAME  TestAccMockableAdvancedCluster_tenantUpgrade
2025-11-08T00:32:11.0420167Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName2=test-acc-tf-c-2337402786199298255
2025-11-08T00:32:11.5432931Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName3=test-acc-tf-c-6779364951920967456
2025-11-08T00:32:11.9982235Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName4=test-acc-tf-c-6752714679434143706
2025-11-08T00:32:12.3152825Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName5=test-acc-tf-c-9135854346227105655
2025-11-08T00:32:12.6317748Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName6=test-acc-tf-c-4884573638822336864
2025-11-08T03:32:19.8799555Z === NAME  TestAccMockableAdvancedCluster_tenantUpgrade
2025-11-08T03:32:19.8800516Z     resource_test.go:94: Step 2/3 error: Error running apply: exit status 1
2025-11-08T03:32:19.8800988Z         
2025-11-08T03:32:19.8801267Z         Error: Error in tenant upgrade
2025-11-08T03:32:19.8801764Z         
2025-11-08T03:32:19.8802094Z           with mongodbatlas_advanced_cluster.test,
2025-11-08T03:32:19.8802932Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-08T03:32:19.8803630Z           12: 	resource "mongodbatlas_advanced_cluster" "test" {
2025-11-08T03:32:19.8803933Z         
2025-11-08T03:32:19.8804730Z         cluster=test-acc-tf-c-8548718170412882741 didn't reach desired state: IDLE,
2025-11-08T03:32:19.8805482Z         error: timeout while waiting for state to become 'IDLE' (last state:
2025-11-08T03:32:19.8805902Z         'UPDATING', timeout: 3h0m0s)
2025-11-08T03:34:52.9469522Z --- FAIL: TestAccMockableAdvancedCluster_tenantUpgrade (11028.15s)
```

- 2025-11-09: MISSING
- 2025-11-10 PASS 19 minutes
- 2025-11-11 PASS 19 minutes
- 2025-11-12 PASS 25 minutes
- 2025-11-13 PASS 38 minutes
- 2025-11-14 PASS 28 minutes
- 2025-11-15 PASS 19 minutes
- 2025-11-16: MISSING
- 2025-11-17 PASS 25 minutes
- 2025-11-18 PASS 22 minutes
- 2025-11-19
  - FAIL 3 hours

### Error 2025-11-19T00:28:55+00:00
```
2025-11-19T00:28:55.0679641Z === RUN   TestAccMockableAdvancedCluster_tenantUpgrade
2025-11-19T00:28:58.0385667Z     resource_test.go:95: Adding variable groupId=691d0f47a9e010496ad05166
2025-11-19T00:28:58.0386870Z     resource_test.go:95: Adding variable clusterName=test-acc-tf-c-7183309775034730119
2025-11-19T00:35:20.7370486Z === CONT  TestAccMockableAdvancedCluster_tenantUpgrade
2025-11-19T00:35:55.7348633Z === NAME  TestAccMockableAdvancedCluster_tenantUpgrade
2025-11-19T00:35:55.7350128Z     pre_check.go:46: Time before creating cluster: 2025-11-19T00:35:55.734504315Z, ProjectID: 691d0f47a9e010496ad05166, Cluster name: test-acc-tf-c-7183309775034730119
2025-11-19T00:36:28.6628004Z === NAME  TestAccMockableAdvancedCluster_tenantUpgrade
2025-11-19T00:36:28.6629765Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName2=test-acc-tf-c-2523518216339313782
2025-11-19T00:36:29.3572161Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName3=test-acc-tf-c-5518641033172103269
2025-11-19T00:36:29.8045726Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName4=test-acc-tf-c-8595620430149971151
2025-11-19T00:36:30.5215158Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName5=test-acc-tf-c-8147242616107279170
2025-11-19T00:36:31.1814218Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName6=test-acc-tf-c-901790708626508985
2025-11-19T03:36:42.0347683Z === NAME  TestAccMockableAdvancedCluster_tenantUpgrade
2025-11-19T03:36:42.0348327Z     resource_test.go:95: Step 2/3 error: Error running apply: exit status 1
2025-11-19T03:36:42.0348776Z         
2025-11-19T03:36:42.0349073Z         Error: Error in tenant upgrade
2025-11-19T03:36:42.0349334Z         
2025-11-19T03:36:42.0349660Z           with mongodbatlas_advanced_cluster.test,
2025-11-19T03:36:42.0350320Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-19T03:36:42.0350912Z           12: 	resource "mongodbatlas_advanced_cluster" "test" {
2025-11-19T03:36:42.0351220Z         
2025-11-19T03:36:42.0351663Z         cluster=test-acc-tf-c-7183309775034730119 didn't reach desired state: IDLE,
2025-11-19T03:36:42.0352269Z         error: timeout while waiting for state to become 'IDLE' (last state:
2025-11-19T03:36:42.0352697Z         'UPDATING', timeout: 3h0m0s)
2025-11-19T03:39:45.7415454Z --- FAIL: TestAccMockableAdvancedCluster_tenantUpgrade (11067.98s)
```

  - FAIL 3 hours

### Error 2025-11-19T09:29:57+00:00
```
2025-11-19T09:29:57.8135625Z === RUN   TestAccMockableAdvancedCluster_tenantUpgrade
2025-11-19T09:30:03.0181420Z     resource_test.go:95: Adding variable groupId=691d8e154938dd1e70f60d87
2025-11-19T09:30:03.0182526Z     resource_test.go:95: Adding variable clusterName=test-acc-tf-c-3962322192786070678
2025-11-19T09:31:55.5692512Z === CONT  TestAccMockableAdvancedCluster_tenantUpgrade
2025-11-19T09:32:25.5610316Z === NAME  TestAccMockableAdvancedCluster_tenantUpgrade
2025-11-19T09:32:25.5612012Z     pre_check.go:46: Time before creating cluster: 2025-11-19T09:32:25.560688739Z, ProjectID: 691d8e154938dd1e70f60d87, Cluster name: test-acc-tf-c-3962322192786070678
2025-11-19T09:32:58.2165437Z === NAME  TestAccMockableAdvancedCluster_tenantUpgrade
2025-11-19T09:32:58.2167055Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName2=test-acc-tf-c-541119802893904889
2025-11-19T09:32:58.5199422Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName3=test-acc-tf-c-8447953105515003216
2025-11-19T09:32:58.7991562Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName4=test-acc-tf-c-3184855099373832324
2025-11-19T09:32:59.2266772Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName5=test-acc-tf-c-2940112374273047625
2025-11-19T09:32:59.5098622Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName6=test-acc-tf-c-8813733131941056151
2025-11-19T12:33:06.9930781Z === NAME  TestAccMockableAdvancedCluster_tenantUpgrade
2025-11-19T12:33:06.9931517Z     resource_test.go:95: Step 2/3 error: Error running apply: exit status 1
2025-11-19T12:33:06.9932089Z         
2025-11-19T12:33:06.9932439Z         Error: Error in tenant upgrade
2025-11-19T12:33:06.9932709Z         
2025-11-19T12:33:06.9933160Z           with mongodbatlas_advanced_cluster.test,
2025-11-19T12:33:06.9934105Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-19T12:33:06.9934804Z           12: 	resource "mongodbatlas_advanced_cluster" "test" {
2025-11-19T12:33:06.9935206Z         
2025-11-19T12:33:06.9935650Z         cluster=test-acc-tf-c-3962322192786070678 didn't reach desired state: IDLE,
2025-11-19T12:33:06.9936366Z         error: timeout while waiting for state to become 'IDLE' (last state:
2025-11-19T12:33:06.9936894Z         'UPDATING', timeout: 3h0m0s)
2025-11-19T12:38:11.9929013Z --- FAIL: TestAccMockableAdvancedCluster_tenantUpgrade (11181.63s)
```

- 2025-11-20
  - FAIL 3 hours

### Error 2025-11-20T00:27:57+00:00
```
2025-11-20T00:27:57.4393253Z === RUN   TestAccMockableAdvancedCluster_tenantUpgrade
2025-11-20T00:28:01.5622307Z     resource_test.go:95: Adding variable clusterName=test-acc-tf-c-9107372820035029237
2025-11-20T00:28:01.5623496Z     resource_test.go:95: Adding variable groupId=691e608da0b6e4670df28de8
2025-11-20T00:29:55.6008225Z === CONT  TestAccMockableAdvancedCluster_tenantUpgrade
2025-11-20T00:30:50.5799622Z === NAME  TestAccMockableAdvancedCluster_tenantUpgrade
2025-11-20T00:30:50.5800980Z     pre_check.go:46: Time before creating cluster: 2025-11-20T00:30:50.579627239Z, ProjectID: 691e608da0b6e4670df28de8, Cluster name: test-acc-tf-c-9107372820035029237
2025-11-20T00:31:22.7939847Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName2=test-acc-tf-c-3418228748691132868
2025-11-20T00:31:23.4209493Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName3=test-acc-tf-c-8419711123308902121
2025-11-20T00:31:23.7458854Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName4=test-acc-tf-c-502003025095580411
2025-11-20T00:31:24.0668404Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName5=test-acc-tf-c-4906994383241138947
2025-11-20T00:31:24.3984465Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName6=test-acc-tf-c-3851066662262499878
2025-11-20T03:31:31.9708737Z === NAME  TestAccMockableAdvancedCluster_tenantUpgrade
2025-11-20T03:31:31.9709321Z     resource_test.go:95: Step 2/3 error: Error running apply: exit status 1
2025-11-20T03:31:31.9709686Z         
2025-11-20T03:31:31.9709955Z         Error: Error in tenant upgrade
2025-11-20T03:31:31.9710302Z         
2025-11-20T03:31:31.9710596Z           with mongodbatlas_advanced_cluster.test,
2025-11-20T03:31:31.9711169Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-20T03:31:31.9711702Z           12: 	resource "mongodbatlas_advanced_cluster" "test" {
2025-11-20T03:31:31.9711993Z         
2025-11-20T03:31:31.9712403Z         cluster=test-acc-tf-c-9107372820035029237 didn't reach desired state: IDLE,
2025-11-20T03:31:31.9713446Z         error: timeout while waiting for state to become 'IDLE' (last state:
2025-11-20T03:31:31.9713869Z         'UPDATING', timeout: 3h0m0s)
2025-11-20T03:34:35.2317236Z --- FAIL: TestAccMockableAdvancedCluster_tenantUpgrade (11083.76s)
```

  - FAIL 3 hours

### Error 2025-11-20T10:01:52+00:00
```
2025-11-20T10:01:52.8581996Z === RUN   TestAccMockableAdvancedCluster_tenantUpgrade
2025-11-20T10:01:56.0800703Z     resource_test.go:95: Adding variable clusterName=test-acc-tf-c-6629203749669485588
2025-11-20T10:01:56.0801436Z     resource_test.go:95: Adding variable groupId=691ee710efafe847b127fc17
2025-11-20T10:03:33.6965392Z === CONT  TestAccMockableAdvancedCluster_tenantUpgrade
2025-11-20T10:04:28.6663417Z === NAME  TestAccMockableAdvancedCluster_tenantUpgrade
2025-11-20T10:04:28.6665184Z     pre_check.go:46: Time before creating cluster: 2025-11-20T10:04:28.666058478Z, ProjectID: 691ee710efafe847b127fc17, Cluster name: test-acc-tf-c-6629203749669485588
2025-11-20T10:05:01.0894626Z === NAME  TestAccMockableAdvancedCluster_tenantUpgrade
2025-11-20T10:05:01.0896109Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName2=test-acc-tf-c-454934478765114438
2025-11-20T10:05:01.3777173Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName3=test-acc-tf-c-3221874787910748969
2025-11-20T10:05:01.6677553Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName4=test-acc-tf-c-323684496171439164
2025-11-20T10:05:01.9480937Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName5=test-acc-tf-c-3573872450158847522
2025-11-20T13:05:08.0915384Z === NAME  TestAccMockableAdvancedCluster_tenantUpgrade
2025-11-20T13:05:08.0916258Z     resource_test.go:95: Step 2/3 error: Error running apply: exit status 1
2025-11-20T13:05:08.0916740Z         
2025-11-20T13:05:08.0917032Z         Error: Error in tenant upgrade
2025-11-20T13:05:08.0917322Z         
2025-11-20T13:05:08.0917655Z           with mongodbatlas_advanced_cluster.test,
2025-11-20T13:05:08.0918717Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-20T13:05:08.0919412Z           12: 	resource "mongodbatlas_advanced_cluster" "test" {
2025-11-20T13:05:08.0919928Z         
2025-11-20T13:05:08.0920403Z         cluster=test-acc-tf-c-6629203749669485588 didn't reach desired state: IDLE,
2025-11-20T13:05:08.0921154Z         error: timeout while waiting for state to become 'IDLE' (last state:
2025-11-20T13:05:08.0921595Z         'UPDATING', timeout: 3h0m0s)
2025-11-20T13:08:11.4032882Z --- FAIL: TestAccMockableAdvancedCluster_tenantUpgrade (11080.93s)
```

- 2025-11-21

### Error 2025-11-21T00:28:25+00:00
```
2025-11-21T00:28:25.3853250Z === RUN   TestAccMockableAdvancedCluster_tenantUpgrade
2025-11-21T00:28:28.2278417Z     resource_test.go:95: Adding variable clusterName=test-acc-tf-c-8703947582885057131
2025-11-21T00:28:28.2279154Z     resource_test.go:95: Adding variable groupId=691fb229238ce57ddce4270e
2025-11-21T00:30:22.6897089Z === CONT  TestAccMockableAdvancedCluster_tenantUpgrade
2025-11-21T00:31:17.6521870Z === NAME  TestAccMockableAdvancedCluster_tenantUpgrade
2025-11-21T00:31:17.6523499Z     pre_check.go:46: Time before creating cluster: 2025-11-21T00:31:17.6519177Z, ProjectID: 691fb229238ce57ddce4270e, Cluster name: test-acc-tf-c-8703947582885057131
2025-11-21T00:31:50.0644650Z === NAME  TestAccMockableAdvancedCluster_tenantUpgrade
2025-11-21T00:31:50.0646577Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName2=test-acc-tf-c-4703138103576048466
2025-11-21T00:31:50.4369653Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName3=test-acc-tf-c-6315364324891074477
2025-11-21T00:31:50.7290523Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName4=test-acc-tf-c-6595865928843614914
2025-11-21T00:31:51.1493485Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName5=test-acc-tf-c-5845879142901816167
2025-11-21T00:31:51.5711459Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName6=test-acc-tf-c-8469193301755905060
2025-11-21T03:31:58.6310220Z === NAME  TestAccMockableAdvancedCluster_tenantUpgrade
2025-11-21T03:31:58.6311092Z     resource_test.go:95: Step 2/3 error: Error running apply: exit status 1
2025-11-21T03:31:58.6311679Z         
2025-11-21T03:31:58.6312118Z         Error: Error in tenant upgrade
2025-11-21T03:31:58.6312543Z         
2025-11-21T03:31:58.6313084Z           with mongodbatlas_advanced_cluster.test,
2025-11-21T03:31:58.6314186Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-21T03:31:58.6315185Z           12: 	resource "mongodbatlas_advanced_cluster" "test" {
2025-11-21T03:31:58.6315681Z         
2025-11-21T03:31:58.6316563Z         cluster=test-acc-tf-c-8703947582885057131 didn't reach desired state: IDLE,
2025-11-21T03:31:58.6317579Z         error: timeout while waiting for state to become 'IDLE' (last state:
2025-11-21T03:31:58.6318278Z         'UPDATING', timeout: 3h0m0s)
2025-11-21T03:35:32.2663988Z --- FAIL: TestAccMockableAdvancedCluster_tenantUpgrade (11112.44s)
```

- 2025-11-22

### Error 2025-11-22T00:26:51+00:00
```
2025-11-22T00:26:51.8108862Z === RUN   TestAccMockableAdvancedCluster_tenantUpgrade
2025-11-22T00:26:56.2506674Z     resource_test.go:95: Adding variable clusterName=test-acc-tf-c-5223562440876281794
2025-11-22T00:26:56.2507814Z     resource_test.go:95: Adding variable groupId=6921034ba2a1e670f5291801
2025-11-22T00:28:42.9650788Z === CONT  TestAccMockableAdvancedCluster_tenantUpgrade
2025-11-22T00:29:37.9470902Z === NAME  TestAccMockableAdvancedCluster_tenantUpgrade
2025-11-22T00:29:37.9472751Z     pre_check.go:46: Time before creating cluster: 2025-11-22T00:29:37.946753873Z, ProjectID: 6921034ba2a1e670f5291801, Cluster name: test-acc-tf-c-5223562440876281794
2025-11-22T00:30:10.4437099Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName2=test-acc-tf-c-8128648166667083431
2025-11-22T00:30:10.6719050Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName3=test-acc-tf-c-6565577884807167956
2025-11-22T00:30:10.9122952Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName4=test-acc-tf-c-2436361179959103958
2025-11-22T00:30:11.1536325Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName5=test-acc-tf-c-8873736360162603902
2025-11-22T00:30:11.3757751Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName6=test-acc-tf-c-4333768778175880457
2025-11-22T03:30:17.2262820Z === NAME  TestAccMockableAdvancedCluster_tenantUpgrade
2025-11-22T03:30:17.2263559Z     resource_test.go:95: Step 2/3 error: Error running apply: exit status 1
2025-11-22T03:30:17.2264018Z         
2025-11-22T03:30:17.2264449Z         Error: Error in tenant upgrade
2025-11-22T03:30:17.2264725Z         
2025-11-22T03:30:17.2265201Z           with mongodbatlas_advanced_cluster.test,
2025-11-22T03:30:17.2265903Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-22T03:30:17.2266504Z           12: 	resource "mongodbatlas_advanced_cluster" "test" {
2025-11-22T03:30:17.2266817Z         
2025-11-22T03:30:17.2267513Z         cluster=test-acc-tf-c-5223562440876281794 didn't reach desired state: IDLE,
2025-11-22T03:30:17.2268139Z         error: timeout while waiting for state to become 'IDLE' (last state:
2025-11-22T03:30:17.2268576Z         'UPDATING', timeout: 3h0m0s)
2025-11-22T03:33:50.5727119Z --- FAIL: TestAccMockableAdvancedCluster_tenantUpgrade (11112.06s)
```

- 2025-11-23: MISSING
- 2025-11-24

### Error 2025-11-24T00:30:06+00:00
```
2025-11-24T00:30:06.7952091Z === RUN   TestAccMockableAdvancedCluster_tenantUpgrade
2025-11-24T00:30:09.5151004Z     resource_test.go:95: Adding variable groupId=6923a70ef47dc05918907815
2025-11-24T00:30:09.5152059Z     resource_test.go:95: Adding variable clusterName=test-acc-tf-c-4449341123535779205
2025-11-24T00:33:24.2030594Z === CONT  TestAccMockableAdvancedCluster_tenantUpgrade
2025-11-24T00:34:19.1891204Z === NAME  TestAccMockableAdvancedCluster_tenantUpgrade
2025-11-24T00:34:19.1892865Z     pre_check.go:46: Time before creating cluster: 2025-11-24T00:34:19.188840877Z, ProjectID: 6923a70ef47dc05918907815, Cluster name: test-acc-tf-c-4449341123535779205
2025-11-24T00:34:51.3061718Z === NAME  TestAccMockableAdvancedCluster_tenantUpgrade
2025-11-24T00:34:51.3064343Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName2=test-acc-tf-c-6140013589255310273
2025-11-24T00:34:51.5477136Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName3=test-acc-tf-c-7279453321738388819
2025-11-24T00:34:51.7819915Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName4=test-acc-tf-c-6958585529863156479
2025-11-24T00:34:52.2266731Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName5=test-acc-tf-c-3147138785575145084
2025-11-24T00:34:52.4487057Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName6=test-acc-tf-c-1030127636802953348
2025-11-24T03:34:58.4087937Z === NAME  TestAccMockableAdvancedCluster_tenantUpgrade
2025-11-24T03:34:58.4088488Z     resource_test.go:95: Step 2/3 error: Error running apply: exit status 1
2025-11-24T03:34:58.4088861Z         
2025-11-24T03:34:58.4089139Z         Error: Error in tenant upgrade
2025-11-24T03:34:58.4089426Z         
2025-11-24T03:34:58.4089748Z           with mongodbatlas_advanced_cluster.test,
2025-11-24T03:34:58.4090390Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-24T03:34:58.4091096Z           12: 	resource "mongodbatlas_advanced_cluster" "test" {
2025-11-24T03:34:58.4091409Z         
2025-11-24T03:34:58.4091972Z         cluster=test-acc-tf-c-4449341123535779205 didn't reach desired state: IDLE,
2025-11-24T03:34:58.4092778Z         error: timeout while waiting for state to become 'IDLE' (last state:
2025-11-24T03:34:58.4093209Z         'UPDATING', timeout: 3h0m0s)
2025-11-24T03:38:01.3432594Z --- FAIL: TestAccMockableAdvancedCluster_tenantUpgrade (11079.86s)
```

- 2025-11-25

### Error 2025-11-25T00:27:18+00:00
```
2025-11-25T00:27:18.5736780Z === RUN   TestAccMockableAdvancedCluster_tenantUpgrade
2025-11-25T00:27:22.3493133Z     resource_test.go:95: Adding variable groupId=6924f7e62b3b85618cf8e299
2025-11-25T00:27:22.3493823Z     resource_test.go:95: Adding variable clusterName=test-acc-tf-c-669627891401672240
2025-11-25T00:31:51.4065340Z === CONT  TestAccMockableAdvancedCluster_tenantUpgrade
2025-11-25T00:32:36.4014308Z === NAME  TestAccMockableAdvancedCluster_tenantUpgrade
2025-11-25T00:32:36.4016655Z     pre_check.go:46: Time before creating cluster: 2025-11-25T00:32:36.40103218Z, ProjectID: 6924f7e62b3b85618cf8e299, Cluster name: test-acc-tf-c-669627891401672240
2025-11-25T00:33:08.7618210Z === NAME  TestAccMockableAdvancedCluster_tenantUpgrade
2025-11-25T00:33:08.7619486Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName2=test-acc-tf-c-2267843256952811778
2025-11-25T00:33:09.0381176Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName3=test-acc-tf-c-8238504867186741691
2025-11-25T00:33:09.3175675Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName4=test-acc-tf-c-1474962444203731510
2025-11-25T00:33:09.5742023Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName5=test-acc-tf-c-1819438660939975292
2025-11-25T00:33:09.8359771Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName6=test-acc-tf-c-2465747067885210104
2025-11-25T03:33:16.7088106Z === NAME  TestAccMockableAdvancedCluster_tenantUpgrade
2025-11-25T03:33:16.7088982Z     resource_test.go:95: Step 2/3 error: Error running apply: exit status 1
2025-11-25T03:33:16.7089762Z         
2025-11-25T03:33:16.7090238Z         Error: Error in tenant upgrade
2025-11-25T03:33:16.7090699Z         
2025-11-25T03:33:16.7091163Z           with mongodbatlas_advanced_cluster.test,
2025-11-25T03:33:16.7091858Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-25T03:33:16.7092926Z           12: 	resource "mongodbatlas_advanced_cluster" "test" {
2025-11-25T03:33:16.7093400Z         
2025-11-25T03:33:16.7094070Z         cluster=test-acc-tf-c-669627891401672240 didn't reach desired state: IDLE,
2025-11-25T03:33:16.7094798Z         error: timeout while waiting for state to become 'IDLE' (last state:
2025-11-25T03:33:16.7095424Z         'UPDATING', timeout: 3h0m0s)
2025-11-25T03:35:49.2386258Z --- FAIL: TestAccMockableAdvancedCluster_tenantUpgrade (11041.61s)
```

- 2025-11-26

### Error 2025-11-26T00:28:35+00:00
```
2025-11-26T00:28:35.8763938Z === RUN   TestAccMockableAdvancedCluster_tenantUpgrade
2025-11-26T00:28:40.0222986Z     resource_test.go:95: Adding variable clusterName=test-acc-tf-c-5527502890071346489
2025-11-26T00:28:40.0223774Z     resource_test.go:95: Adding variable groupId=692649b3131e634a70c5ee92
2025-11-26T00:30:27.5007673Z === CONT  TestAccMockableAdvancedCluster_tenantUpgrade
2025-11-26T00:30:37.4999372Z === NAME  TestAccMockableAdvancedCluster_tenantUpgrade
2025-11-26T00:30:37.5001346Z     pre_check.go:46: Time before creating cluster: 2025-11-26T00:30:37.499641335Z, ProjectID: 692649b3131e634a70c5ee92, Cluster name: test-acc-tf-c-5527502890071346489
2025-11-26T00:31:09.4645100Z === NAME  TestAccMockableAdvancedCluster_tenantUpgrade
2025-11-26T00:31:09.4649206Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName2=test-acc-tf-c-4916472771171838129
2025-11-26T00:31:09.7355629Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName3=test-acc-tf-c-7748489755491838342
2025-11-26T00:31:09.9174357Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName4=test-acc-tf-c-1203069256855306745
2025-11-26T03:31:14.2071315Z === NAME  TestAccMockableAdvancedCluster_tenantUpgrade
2025-11-26T03:31:14.2072250Z     resource_test.go:95: Step 2/3 error: Error running apply: exit status 1
2025-11-26T03:31:14.2072868Z         
2025-11-26T03:31:14.2073173Z         Error: Error in tenant upgrade
2025-11-26T03:31:14.2073446Z         
2025-11-26T03:31:14.2073763Z           with mongodbatlas_advanced_cluster.test,
2025-11-26T03:31:14.2074403Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-26T03:31:14.2075122Z           12: 	resource "mongodbatlas_advanced_cluster" "test" {
2025-11-26T03:31:14.2075626Z         
2025-11-26T03:31:14.2076365Z         cluster=test-acc-tf-c-5527502890071346489 didn't reach desired state: IDLE,
2025-11-26T03:31:14.2076990Z         error: timeout while waiting for state to become 'IDLE' (last state:
2025-11-26T03:31:14.2077444Z         'UPDATING', timeout: 3h0m0s)
2025-11-26T03:31:18.0621623Z    test_terraform_path=/home/runner/work/_temp/88070532-96c2-4760-b2dd-7952d58b8690/terraform
2025-11-26T03:34:47.2896211Z --- FAIL: TestAccMockableAdvancedCluster_tenantUpgrade (11063.94s)
```

- 2025-11-27

### Error 2025-11-27T00:28:23+00:00
```
2025-11-27T00:28:23.1906652Z === RUN   TestAccMockableAdvancedCluster_tenantUpgrade
2025-11-27T00:28:26.5448462Z     resource_test.go:95: Adding variable groupId=69279b273c4d827e6c428b5e
2025-11-27T00:28:26.5449560Z     resource_test.go:95: Adding variable clusterName=test-acc-tf-c-7113915610101313716
2025-11-27T00:30:06.5005104Z === CONT  TestAccMockableAdvancedCluster_tenantUpgrade
2025-11-27T00:30:41.4921486Z === NAME  TestAccMockableAdvancedCluster_tenantUpgrade
2025-11-27T00:30:41.4922843Z     pre_check.go:46: Time before creating cluster: 2025-11-27T00:30:41.491834201Z, ProjectID: 69279b273c4d827e6c428b5e, Cluster name: test-acc-tf-c-7113915610101313716
2025-11-27T00:31:13.6202278Z === NAME  TestAccMockableAdvancedCluster_tenantUpgrade
2025-11-27T00:31:13.6203674Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName2=test-acc-tf-c-1989158572030207833
2025-11-27T00:31:14.0021991Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName3=test-acc-tf-c-8148750434285679797
2025-11-27T00:31:14.2618480Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName4=test-acc-tf-c-7103957533133337490
2025-11-27T00:31:14.5149128Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName5=test-acc-tf-c-3659612032092551985
2025-11-27T00:31:14.7703432Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName6=test-acc-tf-c-970858724294581445
2025-11-27T03:31:21.2216198Z === NAME  TestAccMockableAdvancedCluster_tenantUpgrade
2025-11-27T03:31:21.2216876Z     resource_test.go:95: Step 2/3 error: Error running apply: exit status 1
2025-11-27T03:31:21.2217572Z         
2025-11-27T03:31:21.2218013Z         Error: Error in tenant upgrade
2025-11-27T03:31:21.2218310Z         
2025-11-27T03:31:21.2218837Z           with mongodbatlas_advanced_cluster.test,
2025-11-27T03:31:21.2219537Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-27T03:31:21.2220308Z           12: 	resource "mongodbatlas_advanced_cluster" "test" {
2025-11-27T03:31:21.2220609Z         
2025-11-27T03:31:21.2221054Z         cluster=test-acc-tf-c-7113915610101313716 didn't reach desired state: IDLE,
2025-11-27T03:31:21.2221655Z         error: timeout while waiting for state to become 'IDLE' (last state:
2025-11-27T03:31:21.2222082Z         'UPDATING', timeout: 3h0m0s)
2025-11-27T03:34:23.9667949Z --- FAIL: TestAccMockableAdvancedCluster_tenantUpgrade (11060.83s)
```


## QA Environment
### Timeline
- 2025-10-28: MISSING
- 2025-10-29: MISSING
- 2025-10-30: MISSING
- 2025-10-31: MISSING
- 2025-11-01: MISSING
- 2025-11-02 PASS 20 minutes
- 2025-11-03: MISSING
- 2025-11-04: MISSING
- 2025-11-05: MISSING
- 2025-11-06: MISSING
- 2025-11-07: MISSING
- 2025-11-08: MISSING
- 2025-11-09 PASS 21 minutes
- 2025-11-10: MISSING
- 2025-11-11: MISSING
- 2025-11-12: MISSING
- 2025-11-13 PASS 21 minutes
- 2025-11-14: MISSING
- 2025-11-15: MISSING
- 2025-11-16 PASS 22 minutes
- 2025-11-17: MISSING
- 2025-11-18: MISSING
- 2025-11-19: MISSING
- 2025-11-20: MISSING
- 2025-11-21: MISSING
- 2025-11-22: MISSING
- 2025-11-23 PASS 24 minutes
- 2025-11-24: MISSING
- 2025-11-25: MISSING
- 2025-11-26: MISSING
- 2025-11-27: MISSING
