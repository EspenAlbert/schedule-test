# advanced_cluster/advancedcluster/TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate Test Details
# Found 34 TestRuns in dev, qa from 2026-08-06 to 2026-09-04 from master branch: 1 unique tests, PASS(x 20) FAIL(x 14)
Success rate: 58.82%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-08-06 00:40](#error-2026-08-06t0040010000) | INVALID_ATTRIBUTE /api/atlas/v2/groups/6a73d7e1357372fed31faad5/clusters/test-acc-tf-c-6568051398481516750 | dev | 919.02s
[2026-08-14 00:33](#error-2026-08-14t0033440000) | INVALID_ATTRIBUTE /api/atlas/v2/groups/6a7e626833ce881fa886ce65/clusters/test-acc-tf-c-8246318004866084018 | dev | 931.08s
[2026-08-18 00:20](#error-2026-08-18t0020390000) | INVALID_ATTRIBUTE /api/atlas/v2/groups/6a83a557486f4b37b4b66778/clusters/test-acc-tf-c-2585126133216878819 | dev | 1461.02s
[2026-08-21 00:22](#error-2026-08-21t0022280000) | ATLAS_GENERAL_ERROR /api/atlas/v2/groups/6a879a44ab7e64cdcb55ac79/clusters/test-acc-tf-c-8077056571438802669 | dev | 932.02s
[2026-08-22 00:20](#error-2026-08-22t0020450000) | ATLAS_GENERAL_ERROR /api/atlas/v2/groups/6a88eb5dcede693fdd01519b/clusters/test-acc-tf-c-2875888384530543595 | dev | 919.05s
[2026-08-24 00:22](#error-2026-08-24t0022040000) | ATLAS_GENERAL_ERROR /api/atlas/v2/groups/6a8b8eaccede693fdd1395cd/clusters/test-acc-tf-c-6170188865553925776 | dev | 928.05s
[2026-08-25 00:21](#error-2026-08-25t0021150000) | ATLAS_GENERAL_ERROR /api/atlas/v2/groups/6a8cdffb591bbff5876f56a9/clusters/test-acc-tf-c-5294292318412677390 | dev | 953.08s
[2026-08-26 00:21](#error-2026-08-26t0021460000) | ATLAS_GENERAL_ERROR /api/atlas/v2/groups/6a8e319aebdcb635db00c014/clusters/test-acc-tf-c-3980260736801292651 | dev | 891.03s
[2026-08-27 01:47](#error-2026-08-27t0147350000) | INVALID_ATTRIBUTE /api/atlas/v2/groups/6a8f97376af220b06a109ac5/clusters/test-acc-tf-c-7213669386841060485 | dev | 1017.05s
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
- 2026-08-08 PASS 23 minutes
- 2026-08-09: MISSING
- 2026-08-10 PASS 23 minutes
- 2026-08-11 PASS 24 minutes
- 2026-08-12 PASS 23 minutes
- 2026-08-13 PASS 24 minutes
- 2026-08-14

### Error 2026-08-14T00:33:44+00:00
```
2026-08-14T00:33:44.5626649Z === RUN   TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate
2026-08-14T00:33:48.0491259Z     resource_test.go:991: Adding variable groupId=6a7e626833ce881fa886ce65
2026-08-14T00:33:48.0492309Z     resource_test.go:991: Adding variable clusterName=test-acc-tf-c-8246318004866084018
2026-08-14T00:35:08.6871014Z === CONT  TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate
2026-08-14T00:48:22.8440298Z === NAME  TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate
2026-08-14T00:48:22.8441573Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName2=test-acc-tf-c-6922719596181845672
2026-08-14T00:48:23.3343682Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName3=test-acc-tf-c-6502996347436947324
2026-08-14T00:48:24.2462672Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName4=test-acc-tf-c-3074804527707217517
2026-08-14T00:48:34.4414795Z    test_name=TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate test_terraform_path=/home/runner/work/_temp/b9d098ad-2a94-43fa-9a65-4a34d95558e6/terraform test_working_directory=/tmp/plugintest2807291832
2026-08-14T00:48:34.4416481Z     resource_test.go:991: Step 2/4 error: Error running apply: exit status 1
2026-08-14T00:48:34.4417109Z         
2026-08-14T00:48:34.4417537Z         Error: Error in update
2026-08-14T00:48:34.4417924Z         
2026-08-14T00:48:34.4418710Z           with mongodbatlas_advanced_cluster.test,
2026-08-14T00:48:34.4420015Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-08-14T00:48:34.4421187Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-08-14T00:48:34.4421782Z         
2026-08-14T00:48:34.4422559Z         cluster name: test-acc-tf-c-8246318004866084018, API error details:
2026-08-14T00:48:34.4424215Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a7e626833ce881fa886ce65/clusters/test-acc-tf-c-8246318004866084018
2026-08-14T00:48:34.4425816Z         PATCH: HTTP 400 Bad Request (Error code: "INVALID_ATTRIBUTE") Detail: Invalid
2026-08-14T00:48:34.4427440Z         attribute Cannot validate cluster compatibility due to stale monitoring data.
2026-08-14T00:48:34.4428662Z         Please wait a few minutes and try again. specified. Reason: Bad Request.
2026-08-14T00:48:34.4429877Z         Params: [Cannot validate cluster compatibility due to stale monitoring data.
2026-08-14T00:48:34.4430981Z         Please wait a few minutes and try again.], BadRequestDetail: 
2026-08-14T00:50:36.9706768Z --- FAIL: TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate (931.77s)
```

- 2026-08-15 PASS 21 minutes
- 2026-08-16: MISSING
- 2026-08-17 PASS 22 minutes
- 2026-08-18

### Error 2026-08-18T00:20:39+00:00
```
2026-08-18T00:20:39.6731146Z === RUN   TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate
2026-08-18T00:20:42.9353087Z     resource_test.go:991: Adding variable groupId=6a83a557486f4b37b4b66778
2026-08-18T00:20:42.9354413Z     resource_test.go:991: Adding variable clusterName=test-acc-tf-c-2585126133216878819
2026-08-18T00:22:11.5616988Z === CONT  TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate
2026-08-18T00:34:20.6873985Z === NAME  TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate
2026-08-18T00:34:20.6874918Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName2=test-acc-tf-c-5412947501746584027
2026-08-18T00:34:20.8838498Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName3=test-acc-tf-c-1895113995950962909
2026-08-18T00:34:21.0550613Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName4=test-acc-tf-c-6709590687042901794
2026-08-18T00:34:25.5127963Z   
2026-08-18T00:34:25.5128678Z     resource_test.go:991: Step 2/4 error: Error running apply: exit status 1
2026-08-18T00:34:25.5129314Z         
2026-08-18T00:34:25.5129772Z         Error: Error in update
2026-08-18T00:34:25.5130051Z         
2026-08-18T00:34:25.5130534Z           with mongodbatlas_advanced_cluster.test,
2026-08-18T00:34:25.5131356Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-08-18T00:34:25.5132245Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-08-18T00:34:25.5132599Z         
2026-08-18T00:34:25.5133153Z         cluster name: test-acc-tf-c-2585126133216878819, API error details:
2026-08-18T00:34:25.5134520Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a83a557486f4b37b4b66778/clusters/test-acc-tf-c-2585126133216878819
2026-08-18T00:34:25.5135391Z         PATCH: HTTP 400 Bad Request (Error code: "INVALID_ATTRIBUTE") Detail: Invalid
2026-08-18T00:34:25.5138737Z         attribute Cannot validate cluster compatibility due to stale monitoring data.
2026-08-18T00:34:25.5139826Z         Please wait a few minutes and try again. specified. Reason: Bad Request.
2026-08-18T00:34:25.5140817Z         Params: [Cannot validate cluster compatibility due to stale monitoring data.
2026-08-18T00:34:25.5141587Z         Please wait a few minutes and try again.], BadRequestDetail: 
2026-08-18T00:46:29.4202056Z --- FAIL: TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate (1461.20s)
```

- 2026-08-19 PASS 22 minutes
- 2026-08-20 PASS 23 minutes
- 2026-08-21

### Error 2026-08-21T00:22:28+00:00
```
2026-08-21T00:22:28.5767195Z === RUN   TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate
2026-08-21T00:22:32.1945343Z     resource_test.go:991: Adding variable groupId=6a879a44ab7e64cdcb55ac79
2026-08-21T00:22:32.1946349Z     resource_test.go:991: Adding variable clusterName=test-acc-tf-c-8077056571438802669
2026-08-21T00:23:52.6038762Z === CONT  TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate
2026-08-21T00:37:09.5118595Z === NAME  TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate
2026-08-21T00:37:09.5120564Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName2=test-acc-tf-c-8028830205458782400
2026-08-21T00:37:09.9401745Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName3=test-acc-tf-c-9001838408177485434
2026-08-21T00:37:10.8319800Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName4=test-acc-tf-c-1513870567627906403
2026-08-21T00:37:19.2796798Z    test_step_number=2
2026-08-21T00:37:19.2797748Z     resource_test.go:991: Step 2/4 error: Error running apply: exit status 1
2026-08-21T00:37:19.2833794Z         
2026-08-21T00:37:19.2840233Z         Error: Error in update
2026-08-21T00:37:19.2841366Z         
2026-08-21T00:37:19.2842655Z           with mongodbatlas_advanced_cluster.test,
2026-08-21T00:37:19.2845341Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-08-21T00:37:19.2847119Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-08-21T00:37:19.2848404Z         
2026-08-21T00:37:19.2850238Z         cluster name: test-acc-tf-c-8077056571438802669, API error details:
2026-08-21T00:37:19.2854102Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a879a44ab7e64cdcb55ac79/clusters/test-acc-tf-c-8077056571438802669
2026-08-21T00:37:19.2856968Z         PATCH: HTTP 400 Bad Request (Error code: "ATLAS_GENERAL_ERROR") Detail:
2026-08-21T00:37:19.2873968Z         Reason: In order to enable Latest Version With Auto Upgrades, a cluster must
2026-08-21T00:37:19.2875462Z         be running the most recent MongoDB Major Version.. Reason: Bad Request.
2026-08-21T00:37:19.2876799Z         Params: [In order to enable Latest Version With Auto Upgrades, a cluster must
2026-08-21T00:37:19.2878082Z         be running the most recent MongoDB Major Version.], BadRequestDetail: 
2026-08-21T00:39:21.2027898Z --- FAIL: TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate (932.22s)
```

- 2026-08-22

### Error 2026-08-22T00:20:45+00:00
```
2026-08-22T00:20:45.1790033Z === RUN   TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate
2026-08-22T00:20:48.3796271Z     resource_test.go:991: Adding variable groupId=6a88eb5dcede693fdd01519b
2026-08-22T00:20:48.3797419Z     resource_test.go:991: Adding variable clusterName=test-acc-tf-c-2875888384530543595
2026-08-22T00:22:00.5352278Z === CONT  TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate
2026-08-22T00:35:10.3014069Z === NAME  TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate
2026-08-22T00:35:10.3015577Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName2=test-acc-tf-c-5653330105785593270
2026-08-22T00:35:10.4516515Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName3=test-acc-tf-c-1267345525411809923
2026-08-22T00:35:10.6144965Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName4=test-acc-tf-c-5329512582032786805
2026-08-22T00:35:15.7401482Z   
2026-08-22T00:35:15.7402482Z     resource_test.go:991: Step 2/4 error: Error running apply: exit status 1
2026-08-22T00:35:15.7403329Z         
2026-08-22T00:35:15.7403959Z         Error: Error in update
2026-08-22T00:35:15.7404616Z         
2026-08-22T00:35:15.7405358Z           with mongodbatlas_advanced_cluster.test,
2026-08-22T00:35:15.7406665Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-08-22T00:35:15.7407974Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-08-22T00:35:15.7408730Z         
2026-08-22T00:35:15.7409962Z         cluster name: test-acc-tf-c-2875888384530543595, API error details:
2026-08-22T00:35:15.7412373Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a88eb5dcede693fdd01519b/clusters/test-acc-tf-c-2875888384530543595
2026-08-22T00:35:15.7413760Z         PATCH: HTTP 400 Bad Request (Error code: "ATLAS_GENERAL_ERROR") Detail:
2026-08-22T00:35:15.7414902Z         Reason: In order to enable Latest Version With Auto Upgrades, a cluster must
2026-08-22T00:35:15.7415996Z         be running the most recent MongoDB Major Version.. Reason: Bad Request.
2026-08-22T00:35:15.7417087Z         Params: [In order to enable Latest Version With Auto Upgrades, a cluster must
2026-08-22T00:35:15.7418248Z         be running the most recent MongoDB Major Version.], BadRequestDetail: 
2026-08-22T00:37:16.8301220Z --- FAIL: TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate (919.51s)
```

- 2026-08-23: MISSING
- 2026-08-24

### Error 2026-08-24T00:22:04+00:00
```
2026-08-24T00:22:04.6419895Z === RUN   TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate
2026-08-24T00:22:07.0020814Z     resource_test.go:991: Adding variable groupId=6a8b8eaccede693fdd1395cd
2026-08-24T00:22:07.0022212Z     resource_test.go:991: Adding variable clusterName=test-acc-tf-c-6170188865553925776
2026-08-24T00:23:25.3327178Z === CONT  TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate
2026-08-24T00:36:39.9731393Z === NAME  TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate
2026-08-24T00:36:39.9791355Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName2=test-acc-tf-c-499968906681110625
2026-08-24T00:36:40.8105070Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName3=test-acc-tf-c-4722924451899664410
2026-08-24T00:36:41.2355662Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName4=test-acc-tf-c-7101362626621717649
2026-08-24T00:36:49.5336701Z   
2026-08-24T00:36:49.5337277Z     resource_test.go:991: Step 2/4 error: Error running apply: exit status 1
2026-08-24T00:36:49.5337842Z         
2026-08-24T00:36:49.5338327Z         Error: Error in update
2026-08-24T00:36:49.5338752Z         
2026-08-24T00:36:49.5339488Z           with mongodbatlas_advanced_cluster.test,
2026-08-24T00:36:49.5340495Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-08-24T00:36:49.5341260Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-08-24T00:36:49.5341873Z         
2026-08-24T00:36:49.5342468Z         cluster name: test-acc-tf-c-6170188865553925776, API error details:
2026-08-24T00:36:49.5343624Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a8b8eaccede693fdd1395cd/clusters/test-acc-tf-c-6170188865553925776
2026-08-24T00:36:49.5344544Z         PATCH: HTTP 400 Bad Request (Error code: "ATLAS_GENERAL_ERROR") Detail:
2026-08-24T00:36:49.5345691Z         Reason: In order to enable Latest Version With Auto Upgrades, a cluster must
2026-08-24T00:36:49.5347005Z         be running the most recent MongoDB Major Version.. Reason: Bad Request.
2026-08-24T00:36:49.5348310Z         Params: [In order to enable Latest Version With Auto Upgrades, a cluster must
2026-08-24T00:36:49.5350178Z         be running the most recent MongoDB Major Version.], BadRequestDetail: 
2026-08-24T00:38:51.3349913Z --- FAIL: TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate (928.49s)
```

- 2026-08-25

### Error 2026-08-25T00:21:15+00:00
```
2026-08-25T00:21:15.2836969Z === RUN   TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate
2026-08-25T00:21:17.7041829Z     resource_test.go:991: Adding variable clusterName=test-acc-tf-c-5294292318412677390
2026-08-25T00:21:17.7044327Z     resource_test.go:991: Adding variable groupId=6a8cdffb591bbff5876f56a9
2026-08-25T00:22:39.6326194Z === CONT  TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate
2026-08-25T00:35:50.7341246Z === NAME  TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate
2026-08-25T00:35:50.7343265Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName2=test-acc-tf-c-3448195728455045623
2026-08-25T00:35:51.1057546Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName3=test-acc-tf-c-5028464694869521373
2026-08-25T00:35:51.7232677Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName4=test-acc-tf-c-2678994716490517907
2026-08-25T00:35:58.6684532Z   
2026-08-25T00:35:58.6685223Z     resource_test.go:991: Step 2/4 error: Error running apply: exit status 1
2026-08-25T00:35:58.6686421Z         
2026-08-25T00:35:58.6686998Z         Error: Error in update
2026-08-25T00:35:58.6687561Z         
2026-08-25T00:35:58.6688307Z           with mongodbatlas_advanced_cluster.test,
2026-08-25T00:35:58.6689618Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-08-25T00:35:58.6690670Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-08-25T00:35:58.6691060Z         
2026-08-25T00:35:58.6691552Z         cluster name: test-acc-tf-c-5294292318412677390, API error details:
2026-08-25T00:35:58.6692568Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a8cdffb591bbff5876f56a9/clusters/test-acc-tf-c-5294292318412677390
2026-08-25T00:35:58.6693501Z         PATCH: HTTP 400 Bad Request (Error code: "ATLAS_GENERAL_ERROR") Detail:
2026-08-25T00:35:58.6694229Z         Reason: In order to enable Latest Version With Auto Upgrades, a cluster must
2026-08-25T00:35:58.6694959Z         be running the most recent MongoDB Major Version.. Reason: Bad Request.
2026-08-25T00:35:58.6695689Z         Params: [In order to enable Latest Version With Auto Upgrades, a cluster must
2026-08-25T00:35:58.6696408Z         be running the most recent MongoDB Major Version.], BadRequestDetail: 
2026-08-25T00:38:30.5360584Z --- FAIL: TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate (953.77s)
```

- 2026-08-26

### Error 2026-08-26T00:21:46+00:00
```
2026-08-26T00:21:46.5761715Z === RUN   TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate
2026-08-26T00:21:50.5553911Z     resource_test.go:991: Adding variable groupId=6a8e319aebdcb635db00c014
2026-08-26T00:21:50.5556921Z     resource_test.go:991: Adding variable clusterName=test-acc-tf-c-3980260736801292651
2026-08-26T00:23:03.4046523Z === CONT  TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate
2026-08-26T00:35:43.3389331Z === NAME  TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate
2026-08-26T00:35:43.3390270Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName2=test-acc-tf-c-5423541090440283979
2026-08-26T00:35:43.5484573Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName3=test-acc-tf-c-159169216051668666
2026-08-26T00:35:43.7483139Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName4=test-acc-tf-c-2685130745112010877
2026-08-26T00:35:49.2186598Z   
2026-08-26T00:35:49.2187402Z     resource_test.go:991: Step 2/4 error: Error running apply: exit status 1
2026-08-26T00:35:49.2187842Z         
2026-08-26T00:35:49.2188142Z         Error: Error in update
2026-08-26T00:35:49.2188435Z         
2026-08-26T00:35:49.2188856Z           with mongodbatlas_advanced_cluster.test,
2026-08-26T00:35:49.2189739Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-08-26T00:35:49.2190504Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-08-26T00:35:49.2190858Z         
2026-08-26T00:35:49.2191421Z         cluster name: test-acc-tf-c-3980260736801292651, API error details:
2026-08-26T00:35:49.2192775Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a8e319aebdcb635db00c014/clusters/test-acc-tf-c-3980260736801292651
2026-08-26T00:35:49.2193876Z         PATCH: HTTP 400 Bad Request (Error code: "ATLAS_GENERAL_ERROR") Detail:
2026-08-26T00:35:49.2194548Z         Reason: In order to enable Latest Version With Auto Upgrades, a cluster must
2026-08-26T00:35:49.2195195Z         be running the most recent MongoDB Major Version.. Reason: Bad Request.
2026-08-26T00:35:49.2195849Z         Params: [In order to enable Latest Version With Auto Upgrades, a cluster must
2026-08-26T00:35:49.2196504Z         be running the most recent MongoDB Major Version.], BadRequestDetail: 
2026-08-26T00:37:50.6911575Z --- FAIL: TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate (891.31s)
```

- 2026-08-27

### Error 2026-08-27T01:47:35+00:00
```
2026-08-27T01:47:35.1930826Z === RUN   TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate
2026-08-27T01:47:41.1291461Z     resource_test.go:991: Adding variable groupId=6a8f97376af220b06a109ac5
2026-08-27T01:47:41.1293885Z     resource_test.go:991: Adding variable clusterName=test-acc-tf-c-7213669386841060485
2026-08-27T01:48:56.3390522Z === CONT  TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate
2026-08-27T02:03:09.0036325Z === NAME  TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate
2026-08-27T02:03:09.0038498Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName2=test-acc-tf-c-9146699432469850141
2026-08-27T02:03:09.6047954Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName3=test-acc-tf-c-8895666450126003895
2026-08-27T02:03:09.8635914Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName4=test-acc-tf-c-7299941035322715470
2026-08-27T02:03:15.8569736Z    test_name=TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate test_terraform_path=/home/runner/work/_temp/82bee526-e940-4349-ac85-67ae7ad9aaef/terraform test_working_directory=/tmp/plugintest3625742166
2026-08-27T02:03:15.8571220Z     resource_test.go:991: Step 2/4 error: Error running apply: exit status 1
2026-08-27T02:03:15.8571797Z         
2026-08-27T02:03:15.8572091Z         Error: Error in update
2026-08-27T02:03:15.8572454Z         
2026-08-27T02:03:15.8573131Z           with mongodbatlas_advanced_cluster.test,
2026-08-27T02:03:15.8573870Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-08-27T02:03:15.8574535Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-08-27T02:03:15.8574890Z         
2026-08-27T02:03:15.8575343Z         cluster name: test-acc-tf-c-7213669386841060485, API error details:
2026-08-27T02:03:15.8576607Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a8f97376af220b06a109ac5/clusters/test-acc-tf-c-7213669386841060485
2026-08-27T02:03:15.8577714Z         PATCH: HTTP 400 Bad Request (Error code: "INVALID_ATTRIBUTE") Detail: Invalid
2026-08-27T02:03:15.8578442Z         attribute Cannot validate cluster compatibility due to stale monitoring data.
2026-08-27T02:03:15.8579130Z         Please wait a few minutes and try again. specified. Reason: Bad Request.
2026-08-27T02:03:15.8579825Z         Params: [Cannot validate cluster compatibility due to stale monitoring data.
2026-08-27T02:03:15.8580451Z         Please wait a few minutes and try again.], BadRequestDetail: 
2026-08-27T02:04:00.3109692Z    test_name=TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2026-08-27T02:05:47.4267292Z --- FAIL: TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate (1017.51s)
```

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

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-08-23 00:22](#error-2026-08-23t0022320000) | ATLAS_GENERAL_ERROR /api/atlas/v2/groups/6a8a3d48c9f9626c3fc2d488/clusters/test-acc-tf-c-205607018655117869 | qa |  | 870.03s
[2026-08-25 09:43](#error-2026-08-25t0943240000) | ATLAS_GENERAL_ERROR /api/atlas/v2/groups/6a8d63bc63ebdd639e8058a3/clusters/test-acc-tf-c-1107200067421902835 | qa |  | 893.03s
[2026-08-27 08:27](#error-2026-08-27t0827450000) | ATLAS_GENERAL_ERROR /api/atlas/v2/groups/6a8ff5016cc5b8fe40e17b41/clusters/test-acc-tf-c-1149297358250055981 | qa | flaky_500 | 1068.02s
[2026-08-30 00:46](#error-2026-08-30t0046260000) | ATLAS_GENERAL_ERROR /api/atlas/v2/groups/6a937d62f71a0dd24352eb17/clusters/test-acc-tf-c-5389426063810955211 | qa |  | 860.03s

### Timeline
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
- 2026-08-08: MISSING
- 2026-08-09 PASS 23 minutes
- 2026-08-10: MISSING
- 2026-08-11: MISSING
- 2026-08-12: MISSING
- 2026-08-13 PASS 23 minutes
- 2026-08-14: MISSING
- 2026-08-15: MISSING
- 2026-08-16 PASS 23 minutes
- 2026-08-17: MISSING
- 2026-08-18: MISSING
- 2026-08-19: MISSING
- 2026-08-20: MISSING
- 2026-08-21: MISSING
- 2026-08-22: MISSING
- 2026-08-23

### Error 2026-08-23T00:22:32+00:00
```
2026-08-23T00:22:32.4900863Z === RUN   TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate
2026-08-23T00:22:35.4615147Z     resource_test.go:991: Adding variable groupId=6a8a3d48c9f9626c3fc2d488
2026-08-23T00:22:35.4616584Z     resource_test.go:991: Adding variable clusterName=test-acc-tf-c-205607018655117869
2026-08-23T00:25:02.8311473Z === CONT  TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate
2026-08-23T00:36:47.6626611Z === NAME  TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate
2026-08-23T00:36:47.6628813Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName2=test-acc-tf-c-3746410850648522001
2026-08-23T00:36:48.5076806Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName3=test-acc-tf-c-7907193426717383214
2026-08-23T00:36:48.9277531Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName4=test-acc-tf-c-5393874036727883379
2026-08-23T00:36:57.4313451Z    test_name=TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate test_working_directory=/tmp/plugintest3172427178 test_step_number=2 test_terraform_path=/home/runner/work/_temp/04143ae4-f8fe-4ebf-ae4e-e4dd09aa76b0/terraform
2026-08-23T00:36:57.4315047Z     resource_test.go:991: Step 2/4 error: Error running apply: exit status 1
2026-08-23T00:36:57.4315771Z         
2026-08-23T00:36:57.4316279Z         Error: Error in update
2026-08-23T00:36:57.4316718Z         
2026-08-23T00:36:57.4317633Z           with mongodbatlas_advanced_cluster.test,
2026-08-23T00:36:57.4318977Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-08-23T00:36:57.4320239Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-08-23T00:36:57.4320734Z         
2026-08-23T00:36:57.4321198Z         cluster name: test-acc-tf-c-205607018655117869, API error details:
2026-08-23T00:36:57.4322137Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6a8a3d48c9f9626c3fc2d488/clusters/test-acc-tf-c-205607018655117869
2026-08-23T00:36:57.4322998Z         PATCH: HTTP 400 Bad Request (Error code: "ATLAS_GENERAL_ERROR") Detail:
2026-08-23T00:36:57.4323698Z         Reason: In order to enable Latest Version With Auto Upgrades, a cluster must
2026-08-23T00:36:57.4324384Z         be running the most recent MongoDB Major Version.. Reason: Bad Request.
2026-08-23T00:36:57.4325077Z         Params: [In order to enable Latest Version With Auto Upgrades, a cluster must
2026-08-23T00:36:57.4325769Z         be running the most recent MongoDB Major Version.], BadRequestDetail: 
2026-08-23T00:39:29.5360900Z --- FAIL: TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate (870.30s)
```

- 2026-08-24: MISSING
- 2026-08-25

### Error 2026-08-25T09:43:24+00:00
```
2026-08-25T09:43:24.3986726Z === RUN   TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate
2026-08-25T09:43:28.3829243Z     resource_test.go:991: Adding variable clusterName=test-acc-tf-c-1107200067421902835
2026-08-25T09:43:28.3830496Z     resource_test.go:991: Adding variable groupId=6a8d63bc63ebdd639e8058a3
2026-08-25T09:43:28.3836949Z === CONT  TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate
2026-08-25T09:56:15.5278953Z    test_name=TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate test_terraform_path=/home/runner/work/_temp/c24c1c8b-3557-4391-a20c-d2247f5fafb4/terraform
2026-08-25T09:56:15.5280447Z     resource_test.go:991: Step 2/4 error: Error running apply: exit status 1
2026-08-25T09:56:15.5281036Z         
2026-08-25T09:56:15.5281342Z         Error: Error in update
2026-08-25T09:56:15.5281805Z         
2026-08-25T09:56:15.5282394Z           with mongodbatlas_advanced_cluster.test,
2026-08-25T09:56:15.5283590Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-08-25T09:56:15.5284483Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-08-25T09:56:15.5284845Z         
2026-08-25T09:56:15.5285324Z         cluster name: test-acc-tf-c-1107200067421902835, API error details:
2026-08-25T09:56:15.5286573Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6a8d63bc63ebdd639e8058a3/clusters/test-acc-tf-c-1107200067421902835
2026-08-25T09:56:15.5287832Z         PATCH: HTTP 400 Bad Request (Error code: "ATLAS_GENERAL_ERROR") Detail:
2026-08-25T09:56:15.5288552Z         Reason: In order to enable Latest Version With Auto Upgrades, a cluster must
2026-08-25T09:56:15.5289244Z         be running the most recent MongoDB Major Version.. Reason: Bad Request.
2026-08-25T09:56:15.5289927Z         Params: [In order to enable Latest Version With Auto Upgrades, a cluster must
2026-08-25T09:56:15.5290586Z         be running the most recent MongoDB Major Version.], BadRequestDetail: 
2026-08-25T09:58:17.7110927Z --- FAIL: TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate (893.31s)
```

- 2026-08-26: MISSING
- 2026-08-27

### Error 2026-08-27T08:27:45+00:00
```
2026-08-27T08:27:45.4171059Z === RUN   TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate
2026-08-27T08:27:48.8781030Z     resource_test.go:991: Adding variable clusterName=test-acc-tf-c-1149297358250055981
2026-08-27T08:27:48.8784373Z     resource_test.go:991: Adding variable groupId=6a8ff5016cc5b8fe40e17b41
2026-08-27T08:32:00.7412415Z === CONT  TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate
2026-08-27T08:45:37.5123069Z === NAME  TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate
2026-08-27T08:45:37.5124619Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName2=test-acc-tf-c-2128052854693087361
2026-08-27T08:45:37.8008533Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName3=test-acc-tf-c-7363928460954331946
2026-08-27T08:45:38.0216919Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName4=test-acc-tf-c-3296146540670742286
2026-08-27T08:45:43.4925184Z   
2026-08-27T08:45:43.4925645Z     resource_test.go:991: Step 2/4 error: Error running apply: exit status 1
2026-08-27T08:45:43.4926353Z         
2026-08-27T08:45:43.4926686Z         Error: Error in update
2026-08-27T08:45:43.4927111Z         
2026-08-27T08:45:43.4927542Z           with mongodbatlas_advanced_cluster.test,
2026-08-27T08:45:43.4928267Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-08-27T08:45:43.4928934Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-08-27T08:45:43.4929284Z         
2026-08-27T08:45:43.4929733Z         cluster name: test-acc-tf-c-1149297358250055981, API error details:
2026-08-27T08:45:43.4930664Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6a8ff5016cc5b8fe40e17b41/clusters/test-acc-tf-c-1149297358250055981
2026-08-27T08:45:43.4931510Z         PATCH: HTTP 400 Bad Request (Error code: "ATLAS_GENERAL_ERROR") Detail:
2026-08-27T08:45:43.4932197Z         Reason: In order to enable Latest Version With Auto Upgrades, a cluster must
2026-08-27T08:45:43.4932871Z         be running the most recent MongoDB Major Version.. Reason: Bad Request.
2026-08-27T08:45:43.4933591Z         Params: [In order to enable Latest Version With Auto Upgrades, a cluster must
2026-08-27T08:45:43.4934277Z         be running the most recent MongoDB Major Version.], BadRequestDetail: 
2026-08-27T08:49:45.4549252Z --- FAIL: TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate (1068.18s)
```

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
