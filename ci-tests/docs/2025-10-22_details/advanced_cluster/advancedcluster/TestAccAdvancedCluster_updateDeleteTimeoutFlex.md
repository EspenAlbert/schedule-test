# advanced_cluster/advancedcluster/TestAccAdvancedCluster_updateDeleteTimeoutFlex Test Details
# Found 44 TestRuns in dev, qa from 2025-09-23 to 2025-10-22 from master branch: 1 unique tests, PASS(x 25) FAIL(x 19)
Success rate: 56.82%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-09-23 00:29](#error-2025-09-23t0029040000) |  | dev | timeout | 19.08s
[2025-09-24 00:29](#error-2025-09-24t0029070000) | ATLAS_GENERAL_ERROR /api/atlas/v2/groups/68d33ae9f1337d3c4efef982/flexClusters/test-acc-tf-1079068236688390093 | dev | timeout | 20.03s
[2025-09-25 00:28](#error-2025-09-25t0028330000) | ATLAS_GENERAL_ERROR /api/atlas/v2/groups/68d48c5982566875200506fb/flexClusters/test-acc-tf-2862852587231070769 | dev | timeout | 19.03s
[2025-09-26 00:28](#error-2025-09-26t0028500000) | ATLAS_GENERAL_ERROR /api/atlas/v2/groups/68d5ddea14f56c035e3737ee/flexClusters/test-acc-tf-1896775946036458904 | dev | timeout | 29.01s
[2025-09-27 00:28](#error-2025-09-27t0028040000) | ATLAS_GENERAL_ERROR /api/atlas/v2/groups/68d72f425ed71157b434545a/flexClusters/test-acc-tf-3705508254660325584 | dev | timeout | 19.03s
[2025-09-28 00:31](#error-2025-09-28t0031320000) | ATLAS_GENERAL_ERROR /api/atlas/v2/groups/68d88191e664a15fb5ae8fba/flexClusters/test-acc-tf-5706802194857857782 | qa | timeout | 20.05s
[2025-09-29 00:30](#error-2025-09-29t0030210000) | ATLAS_GENERAL_ERROR /api/atlas/v2/groups/68d9d2d497534351000fe34d/flexClusters/test-acc-tf-9032700843261008610 | dev | timeout | 19.06s
[2025-09-29 07:11](#error-2025-09-29t0711540000) | ATLAS_GENERAL_ERROR /api/atlas/v2/groups/68da30da9ae0ff3b55cf580b/flexClusters/test-acc-tf-6041718471757345987 | dev | timeout | 20.06s
[2025-09-30 00:29](#error-2025-09-30t0029310000) | ATLAS_GENERAL_ERROR /api/atlas/v2/groups/68db2402ff1f6011517a7e2f/flexClusters/test-acc-tf-5896570181382843580 | dev | timeout | 19.02s
[2025-09-30 07:31](#error-2025-09-30t0731220000) | ATLAS_GENERAL_ERROR /api/atlas/v2/groups/68db86ecf2e0c5381c1202de/flexClusters/test-acc-tf-3624604560633559585 | dev | timeout | 19.04s
[2025-09-30 07:43](#error-2025-09-30t0743410000) | ATLAS_GENERAL_ERROR /api/atlas/v2/groups/68db89d6bb7b8c0d7034aa99/flexClusters/test-acc-tf-7120995244835794743 | qa | timeout | 21.09s
[2025-09-30 09:11](#error-2025-09-30t0911270000) | ATLAS_GENERAL_ERROR /api/atlas/v2/groups/68db9e59f2e0c5381c1330c1/flexClusters/test-acc-tf-7808478731773462451 | dev | timeout | 18.08s
[2025-09-30 15:08](#error-2025-09-30t1508020000) | ATLAS_GENERAL_ERROR /api/atlas/v2/groups/68dbf200ce185e38b70f0d81/flexClusters/test-acc-tf-4026581415522354496 | qa | timeout | 19.01s
[2025-10-01 00:30](#error-2025-10-01t0030010000) | ATLAS_GENERAL_ERROR /api/atlas/v2/groups/68dc75b40c72c45ec9a90b26/flexClusters/test-acc-tf-6840828070108141604 | dev | timeout | 18.09s
[2025-10-01 03:23](#error-2025-10-01t0323590000) |  | dev | timeout | 18.02s
[2025-10-01 04:56](#error-2025-10-01t0456430000) | ATLAS_GENERAL_ERROR /api/atlas/v2/groups/68dcb42d5a2f96450020b4cb/flexClusters/test-acc-tf-2004656689855192247 | dev | flaky_500 | 19.03s
[2025-10-01 07:30](#error-2025-10-01t0730000000) | ATLAS_GENERAL_ERROR /api/atlas/v2/groups/68dcd8215b2d552e98f9bb7c/flexClusters/test-acc-tf-1038707880225857862 | dev | timeout | 22.03s
[2025-10-01 14:21](#error-2025-10-01t1421470000) |  | dev |  | 19.07s
[2025-10-05 00:31](#error-2025-10-05t0031260000) |  | qa |  | 4.05s

## Timeline
- 2025-09-22: MISSING
- 2025-09-23

### Error 2025-09-23T00:29:04+00:00
```
2025-09-23T00:29:04.2269472Z === RUN   TestAccAdvancedCluster_updateDeleteTimeoutFlex
2025-09-23T00:29:04.2767560Z === CONT  TestAccAdvancedCluster_updateDeleteTimeoutFlex
2025-09-23T00:29:22.4389083Z === NAME  TestAccAdvancedCluster_updateDeleteTimeoutFlex
2025-09-23T00:29:22.4390077Z     resource_test.go:2894: Step 2/4, expected an error but got none
2025-09-23T00:29:24.0313410Z    test_working_directory=/tmp/plugintest2923122857 test_step_number=2 test_name=TestAccAdvancedCluster_updateDeleteTimeoutFlex test_terraform_path=/home/runner/work/_temp/bc12ce55-01ec-4fcd-86d4-b55b5775a209/terraform
2025-09-23T00:29:24.0315311Z     panic.go:615: Error running post-test destroy, there may be dangling resources: exit status 1
2025-09-23T00:29:24.0316371Z         
2025-09-23T00:29:24.0316831Z         Error: Error in flex delete
2025-09-23T00:29:24.0317266Z         
2025-09-23T00:29:24.0317827Z         cluster name: test-acc-tf-6925494853873653424, API error details: timeout
2025-09-23T00:29:24.0318575Z         while waiting for state to become 'DELETED' (last state: 'DELETING', timeout:
2025-09-23T00:29:24.0319028Z         1s)
2025-09-23T00:29:24.0319383Z --- FAIL: TestAccAdvancedCluster_updateDeleteTimeoutFlex (19.80s)
```

- 2025-09-24

### Error 2025-09-24T00:29:07+00:00
```
2025-09-24T00:29:07.3640677Z === RUN   TestAccAdvancedCluster_updateDeleteTimeoutFlex
2025-09-24T00:29:07.3664438Z === CONT  TestAccAdvancedCluster_updateDeleteTimeoutFlex
2025-09-24T00:29:27.2837748Z === NAME  TestAccAdvancedCluster_updateDeleteTimeoutFlex
2025-09-24T00:29:27.2838671Z     resource_test.go:2894: Step 3/4, expected an error with pattern, no match on: Error running apply: exit status 1
2025-09-24T00:29:27.2839406Z         
2025-09-24T00:29:27.2839752Z         Error: Error in flex delete
2025-09-24T00:29:27.2840126Z         
2025-09-24T00:29:27.2840673Z         cluster name: test-acc-tf-1079068236688390093, API error details: timeout
2025-09-24T00:29:27.2841460Z         while waiting for state to become 'DELETED' (last state: 'DELETING', timeout:
2025-09-24T00:29:27.2841892Z         1s)
2025-09-24T00:29:27.6860921Z === NAME  TestAccAdvancedCluster_updateDeleteTimeoutFlex
2025-09-24T00:29:27.6861624Z     panic.go:615: Error running post-test destroy, there may be dangling resources: exit status 1
2025-09-24T00:29:27.6862125Z         
2025-09-24T00:29:27.6862409Z         Error: Error in flex delete
2025-09-24T00:29:27.6862695Z         
2025-09-24T00:29:27.6863140Z         cluster name: test-acc-tf-1079068236688390093, API error details:
2025-09-24T00:29:27.6864157Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68d33ae9f1337d3c4efef982/flexClusters/test-acc-tf-1079068236688390093
2025-09-24T00:29:27.6865267Z         DELETE: HTTP 400 Bad Request (Error code: "ATLAS_GENERAL_ERROR") Detail:
2025-09-24T00:29:27.6865982Z         Reason: Cluster already requested to be deleted. Reason: Bad Request. Params:
2025-09-24T00:29:27.6866642Z         [Cluster already requested to be deleted], BadRequestDetail: 
2025-09-24T00:29:27.6867156Z --- FAIL: TestAccAdvancedCluster_updateDeleteTimeoutFlex (20.32s)
```

- 2025-09-25

### Error 2025-09-25T00:28:33+00:00
```
2025-09-25T00:28:33.9842418Z === RUN   TestAccAdvancedCluster_updateDeleteTimeoutFlex
2025-09-25T00:28:33.9949157Z === CONT  TestAccAdvancedCluster_updateDeleteTimeoutFlex
2025-09-25T00:28:53.0221528Z === NAME  TestAccAdvancedCluster_updateDeleteTimeoutFlex
2025-09-25T00:28:53.0222449Z     resource_test.go:2894: Step 3/4, expected an error with pattern, no match on: Error running apply: exit status 1
2025-09-25T00:28:53.0223076Z         
2025-09-25T00:28:53.0223424Z         Error: Error in flex delete
2025-09-25T00:28:53.0223685Z         
2025-09-25T00:28:53.0224351Z         cluster name: test-acc-tf-2862852587231070769, API error details: timeout
2025-09-25T00:28:53.0225418Z         while waiting for state to become 'DELETED' (last state: 'DELETING', timeout:
2025-09-25T00:28:53.0226088Z         1s)
2025-09-25T00:28:53.3062270Z    test_terraform_path=/home/runner/work/_temp/0237f545-6758-4e06-85c6-853b206110d7/terraform test_working_directory=/tmp/plugintest2122623731
2025-09-25T00:28:53.3063344Z     panic.go:615: Error running post-test destroy, there may be dangling resources: exit status 1
2025-09-25T00:28:53.3063777Z         
2025-09-25T00:28:53.3064035Z         Error: Error in flex delete
2025-09-25T00:28:53.3064287Z         
2025-09-25T00:28:53.3064681Z         cluster name: test-acc-tf-2862852587231070769, API error details:
2025-09-25T00:28:53.3065546Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68d48c5982566875200506fb/flexClusters/test-acc-tf-2862852587231070769
2025-09-25T00:28:53.3066312Z         DELETE: HTTP 400 Bad Request (Error code: "ATLAS_GENERAL_ERROR") Detail:
2025-09-25T00:28:53.3066931Z         Reason: Cluster already requested to be deleted. Reason: Bad Request. Params:
2025-09-25T00:28:53.3067498Z         [Cluster already requested to be deleted], BadRequestDetail: 
2025-09-25T00:28:53.3067931Z --- FAIL: TestAccAdvancedCluster_updateDeleteTimeoutFlex (19.32s)
```

- 2025-09-26

### Error 2025-09-26T00:28:50+00:00
```
2025-09-26T00:28:50.9785062Z === RUN   TestAccAdvancedCluster_updateDeleteTimeoutFlex
2025-09-26T00:28:50.9838957Z === CONT  TestAccAdvancedCluster_updateDeleteTimeoutFlex
2025-09-26T00:29:19.7263760Z === NAME  TestAccAdvancedCluster_updateDeleteTimeoutFlex
2025-09-26T00:29:19.7264984Z     resource_test.go:2894: Step 3/4, expected an error with pattern, no match on: Error running apply: exit status 1
2025-09-26T00:29:19.7266049Z         
2025-09-26T00:29:19.7266518Z         Error: Error in flex delete
2025-09-26T00:29:19.7266819Z         
2025-09-26T00:29:19.7267268Z         cluster name: test-acc-tf-1896775946036458904, API error details: timeout
2025-09-26T00:29:19.7267902Z         while waiting for state to become 'DELETED' (last state: 'DELETING', timeout:
2025-09-26T00:29:19.7268400Z         1s)
2025-09-26T00:29:20.0576291Z    test_working_directory=/tmp/plugintest4023161784 test_step_number=3 test_name=TestAccAdvancedCluster_updateDeleteTimeoutFlex test_terraform_path=/home/runner/work/_temp/5e9fd989-fbdf-4391-bea5-8b2a71aedad0/terraform
2025-09-26T00:29:20.0577445Z     panic.go:615: Error running post-test destroy, there may be dangling resources: exit status 1
2025-09-26T00:29:20.0577870Z         
2025-09-26T00:29:20.0578128Z         Error: Error in flex delete
2025-09-26T00:29:20.0578388Z         
2025-09-26T00:29:20.0578781Z         cluster name: test-acc-tf-1896775946036458904, API error details:
2025-09-26T00:29:20.0579670Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68d5ddea14f56c035e3737ee/flexClusters/test-acc-tf-1896775946036458904
2025-09-26T00:29:20.0580465Z         DELETE: HTTP 400 Bad Request (Error code: "ATLAS_GENERAL_ERROR") Detail:
2025-09-26T00:29:20.0581096Z         Reason: Cluster already requested to be deleted. Reason: Bad Request. Params:
2025-09-26T00:29:20.0581682Z         [Cluster already requested to be deleted], BadRequestDetail: 
2025-09-26T00:29:20.0582133Z --- FAIL: TestAccAdvancedCluster_updateDeleteTimeoutFlex (29.08s)
```

- 2025-09-27

### Error 2025-09-27T00:28:04+00:00
```
2025-09-27T00:28:04.6014015Z === RUN   TestAccAdvancedCluster_updateDeleteTimeoutFlex
2025-09-27T00:28:04.6026242Z === CONT  TestAccAdvancedCluster_updateDeleteTimeoutFlex
2025-09-27T00:28:23.6017158Z === NAME  TestAccAdvancedCluster_updateDeleteTimeoutFlex
2025-09-27T00:28:23.6018321Z     resource_test.go:2894: Step 3/4, expected an error with pattern, no match on: Error running apply: exit status 1
2025-09-27T00:28:23.6019126Z         
2025-09-27T00:28:23.6019569Z         Error: Error in flex delete
2025-09-27T00:28:23.6020028Z         
2025-09-27T00:28:23.6020773Z         cluster name: test-acc-tf-3705508254660325584, API error details: timeout
2025-09-27T00:28:23.6021637Z         while waiting for state to become 'DELETED' (last state: 'DELETING', timeout:
2025-09-27T00:28:23.6022127Z         1s)
2025-09-27T00:28:23.9162870Z    test_step_number=3
2025-09-27T00:28:23.9163385Z     panic.go:615: Error running post-test destroy, there may be dangling resources: exit status 1
2025-09-27T00:28:23.9163816Z         
2025-09-27T00:28:23.9164077Z         Error: Error in flex delete
2025-09-27T00:28:23.9164326Z         
2025-09-27T00:28:23.9164711Z         cluster name: test-acc-tf-3705508254660325584, API error details:
2025-09-27T00:28:23.9165564Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68d72f425ed71157b434545a/flexClusters/test-acc-tf-3705508254660325584
2025-09-27T00:28:23.9166348Z         DELETE: HTTP 400 Bad Request (Error code: "ATLAS_GENERAL_ERROR") Detail:
2025-09-27T00:28:23.9167202Z         Reason: Cluster already requested to be deleted. Reason: Bad Request. Params:
2025-09-27T00:28:23.9167989Z         [Cluster already requested to be deleted], BadRequestDetail: 
2025-09-27T00:28:23.9168435Z --- FAIL: TestAccAdvancedCluster_updateDeleteTimeoutFlex (19.31s)
```

- 2025-09-28

### Error 2025-09-28T00:31:32+00:00
```
2025-09-28T00:31:32.0948184Z === RUN   TestAccAdvancedCluster_updateDeleteTimeoutFlex
2025-09-28T00:31:32.1011264Z === CONT  TestAccAdvancedCluster_updateDeleteTimeoutFlex
2025-09-28T00:31:52.1575662Z === NAME  TestAccAdvancedCluster_updateDeleteTimeoutFlex
2025-09-28T00:31:52.1576810Z     resource_test.go:2894: Step 3/4, expected an error with pattern, no match on: Error running apply: exit status 1
2025-09-28T00:31:52.1577616Z         
2025-09-28T00:31:52.1578081Z         Error: Error in flex delete
2025-09-28T00:31:52.1578526Z         
2025-09-28T00:31:52.1579320Z         cluster name: test-acc-tf-5706802194857857782, API error details: timeout
2025-09-28T00:31:52.1580379Z         while waiting for state to become 'DELETED' (last state: 'DELETING', timeout:
2025-09-28T00:31:52.1581089Z         1s)
2025-09-28T00:31:52.5669282Z   
2025-09-28T00:31:52.5669779Z     panic.go:615: Error running post-test destroy, there may be dangling resources: exit status 1
2025-09-28T00:31:52.5670233Z         
2025-09-28T00:31:52.5670491Z         Error: Error in flex delete
2025-09-28T00:31:52.5671006Z         
2025-09-28T00:31:52.5671424Z         cluster name: test-acc-tf-5706802194857857782, API error details:
2025-09-28T00:31:52.5672317Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68d88191e664a15fb5ae8fba/flexClusters/test-acc-tf-5706802194857857782
2025-09-28T00:31:52.5673109Z         DELETE: HTTP 400 Bad Request (Error code: "ATLAS_GENERAL_ERROR") Detail:
2025-09-28T00:31:52.5673733Z         Reason: Cluster already requested to be deleted. Reason: Bad Request. Params:
2025-09-28T00:31:52.5674308Z         [Cluster already requested to be deleted], BadRequestDetail: 
2025-09-28T00:31:52.5674741Z --- FAIL: TestAccAdvancedCluster_updateDeleteTimeoutFlex (20.47s)
```

- 2025-09-29
  - FAIL 19 seconds

### Error 2025-09-29T00:30:21+00:00
```
2025-09-29T00:30:21.7034039Z === RUN   TestAccAdvancedCluster_updateDeleteTimeoutFlex
2025-09-29T00:30:21.7573133Z === CONT  TestAccAdvancedCluster_updateDeleteTimeoutFlex
2025-09-29T00:30:41.0038254Z === NAME  TestAccAdvancedCluster_updateDeleteTimeoutFlex
2025-09-29T00:30:41.0040678Z     resource_test.go:2894: Step 3/4, expected an error with pattern, no match on: Error running apply: exit status 1
2025-09-29T00:30:41.0041440Z         
2025-09-29T00:30:41.0041858Z         Error: Error in flex delete
2025-09-29T00:30:41.0042275Z         
2025-09-29T00:30:41.0042987Z         cluster name: test-acc-tf-9032700843261008610, API error details: timeout
2025-09-29T00:30:41.0044125Z         while waiting for state to become 'DELETED' (last state: 'DELETING', timeout:
2025-09-29T00:30:41.0044527Z         1s)
2025-09-29T00:30:41.3041972Z   
2025-09-29T00:30:41.3042460Z     panic.go:615: Error running post-test destroy, there may be dangling resources: exit status 1
2025-09-29T00:30:41.3042880Z         
2025-09-29T00:30:41.3043141Z         Error: Error in flex delete
2025-09-29T00:30:41.3043391Z         
2025-09-29T00:30:41.3044044Z         cluster name: test-acc-tf-9032700843261008610, API error details:
2025-09-29T00:30:41.3044934Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68d9d2d497534351000fe34d/flexClusters/test-acc-tf-9032700843261008610
2025-09-29T00:30:41.3045723Z         DELETE: HTTP 400 Bad Request (Error code: "ATLAS_GENERAL_ERROR") Detail:
2025-09-29T00:30:41.3046341Z         Reason: Cluster already requested to be deleted. Reason: Bad Request. Params:
2025-09-29T00:30:41.3046912Z         [Cluster already requested to be deleted], BadRequestDetail: 
2025-09-29T00:30:41.3047354Z --- FAIL: TestAccAdvancedCluster_updateDeleteTimeoutFlex (19.59s)
```

  - FAIL 20 seconds

### Error 2025-09-29T07:11:54+00:00
```
2025-09-29T07:11:54.8039904Z === RUN   TestAccAdvancedCluster_updateDeleteTimeoutFlex
2025-09-29T07:11:54.8043943Z === CONT  TestAccAdvancedCluster_updateDeleteTimeoutFlex
2025-09-29T07:12:15.0151752Z === NAME  TestAccAdvancedCluster_updateDeleteTimeoutFlex
2025-09-29T07:12:15.0153155Z     resource_test.go:2894: Step 3/4, expected an error with pattern, no match on: Error running apply: exit status 1
2025-09-29T07:12:15.0153994Z         
2025-09-29T07:12:15.0154475Z         Error: Error in flex delete
2025-09-29T07:12:15.0154953Z         
2025-09-29T07:12:15.0155753Z         cluster name: test-acc-tf-6041718471757345987, API error details: timeout
2025-09-29T07:12:15.0156900Z         while waiting for state to become 'DELETED' (last state: 'DELETING', timeout:
2025-09-29T07:12:15.0157609Z         1s)
2025-09-29T07:12:15.4259261Z   
2025-09-29T07:12:15.4259755Z     panic.go:615: Error running post-test destroy, there may be dangling resources: exit status 1
2025-09-29T07:12:15.4260210Z         
2025-09-29T07:12:15.4260484Z         Error: Error in flex delete
2025-09-29T07:12:15.4260748Z         
2025-09-29T07:12:15.4261155Z         cluster name: test-acc-tf-6041718471757345987, API error details:
2025-09-29T07:12:15.4262279Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68da30da9ae0ff3b55cf580b/flexClusters/test-acc-tf-6041718471757345987
2025-09-29T07:12:15.4263088Z         DELETE: HTTP 400 Bad Request (Error code: "ATLAS_GENERAL_ERROR") Detail:
2025-09-29T07:12:15.4263716Z         Reason: Cluster already requested to be deleted. Reason: Bad Request. Params:
2025-09-29T07:12:15.4264299Z         [Cluster already requested to be deleted], BadRequestDetail: 
2025-09-29T07:12:15.4264745Z --- FAIL: TestAccAdvancedCluster_updateDeleteTimeoutFlex (20.62s)
```

- 2025-09-30
  - FAIL 19 seconds

### Error 2025-09-30T00:29:31+00:00
```
2025-09-30T00:29:31.8546753Z === RUN   TestAccAdvancedCluster_updateDeleteTimeoutFlex
2025-09-30T00:29:31.8813716Z === CONT  TestAccAdvancedCluster_updateDeleteTimeoutFlex
2025-09-30T00:29:50.7282123Z === NAME  TestAccAdvancedCluster_updateDeleteTimeoutFlex
2025-09-30T00:29:50.7283446Z     resource_test.go:2894: Step 3/4, expected an error with pattern, no match on: Error running apply: exit status 1
2025-09-30T00:29:50.7284286Z         
2025-09-30T00:29:50.7284745Z         Error: Error in flex delete
2025-09-30T00:29:50.7285144Z         
2025-09-30T00:29:50.7285729Z         cluster name: test-acc-tf-5896570181382843580, API error details: timeout
2025-09-30T00:29:50.7286488Z         while waiting for state to become 'DELETED' (last state: 'DELETING', timeout:
2025-09-30T00:29:50.7286923Z         1s)
2025-09-30T00:29:51.0060121Z    test_terraform_path=/home/runner/work/_temp/0bbcefcd-82b4-418c-b7b7-b980a1f9d0f5/terraform test_name=TestAccAdvancedCluster_updateDeleteTimeoutFlex
2025-09-30T00:29:51.0061188Z     panic.go:615: Error running post-test destroy, there may be dangling resources: exit status 1
2025-09-30T00:29:51.0061621Z         
2025-09-30T00:29:51.0061881Z         Error: Error in flex delete
2025-09-30T00:29:51.0062131Z         
2025-09-30T00:29:51.0063084Z         cluster name: test-acc-tf-5896570181382843580, API error details:
2025-09-30T00:29:51.0063985Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68db2402ff1f6011517a7e2f/flexClusters/test-acc-tf-5896570181382843580
2025-09-30T00:29:51.0064771Z         DELETE: HTTP 400 Bad Request (Error code: "ATLAS_GENERAL_ERROR") Detail:
2025-09-30T00:29:51.0065411Z         Reason: Cluster already requested to be deleted. Reason: Bad Request. Params:
2025-09-30T00:29:51.0065995Z         [Cluster already requested to be deleted], BadRequestDetail: 
2025-09-30T00:29:51.0066431Z --- FAIL: TestAccAdvancedCluster_updateDeleteTimeoutFlex (19.15s)
```

  - FAIL 19 seconds

### Error 2025-09-30T07:31:22+00:00
```
2025-09-30T07:31:22.1007402Z === RUN   TestAccAdvancedCluster_updateDeleteTimeoutFlex
2025-09-30T07:31:22.1134146Z === CONT  TestAccAdvancedCluster_updateDeleteTimeoutFlex
2025-09-30T07:31:41.1264546Z === NAME  TestAccAdvancedCluster_updateDeleteTimeoutFlex
2025-09-30T07:31:41.1265819Z     resource_test.go:2894: Step 3/4, expected an error with pattern, no match on: Error running apply: exit status 1
2025-09-30T07:31:41.1266865Z         
2025-09-30T07:31:41.1267322Z         Error: Error in flex delete
2025-09-30T07:31:41.1267741Z         
2025-09-30T07:31:41.1268243Z         cluster name: test-acc-tf-3624604560633559585, API error details: timeout
2025-09-30T07:31:41.1268956Z         while waiting for state to become 'DELETED' (last state: 'DELETING', timeout:
2025-09-30T07:31:41.1269422Z         1s)
2025-09-30T07:31:41.5041593Z   
2025-09-30T07:31:41.5042081Z     panic.go:615: Error running post-test destroy, there may be dangling resources: exit status 1
2025-09-30T07:31:41.5042516Z         
2025-09-30T07:31:41.5042782Z         Error: Error in flex delete
2025-09-30T07:31:41.5043043Z         
2025-09-30T07:31:41.5043447Z         cluster name: test-acc-tf-3624604560633559585, API error details:
2025-09-30T07:31:41.5044315Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68db86ecf2e0c5381c1202de/flexClusters/test-acc-tf-3624604560633559585
2025-09-30T07:31:41.5045113Z         DELETE: HTTP 400 Bad Request (Error code: "ATLAS_GENERAL_ERROR") Detail:
2025-09-30T07:31:41.5045747Z         Reason: Cluster already requested to be deleted. Reason: Bad Request. Params:
2025-09-30T07:31:41.5046331Z         [Cluster already requested to be deleted], BadRequestDetail: 
2025-09-30T07:31:41.5047046Z --- FAIL: TestAccAdvancedCluster_updateDeleteTimeoutFlex (19.39s)
```

  - FAIL 21 seconds

### Error 2025-09-30T07:43:41+00:00
```
2025-09-30T07:43:41.5070609Z === RUN   TestAccAdvancedCluster_updateDeleteTimeoutFlex
2025-09-30T07:43:41.5309169Z === CONT  TestAccAdvancedCluster_updateDeleteTimeoutFlex
2025-09-30T07:44:02.9001348Z === NAME  TestAccAdvancedCluster_updateDeleteTimeoutFlex
2025-09-30T07:44:02.9002202Z     resource_test.go:2894: Step 3/4, expected an error with pattern, no match on: Error running apply: exit status 1
2025-09-30T07:44:02.9002913Z         
2025-09-30T07:44:02.9003252Z         Error: Error in flex delete
2025-09-30T07:44:02.9003562Z         
2025-09-30T07:44:02.9004028Z         cluster name: test-acc-tf-7120995244835794743, API error details: timeout
2025-09-30T07:44:02.9004716Z         while waiting for state to become 'DELETED' (last state: 'DELETING', timeout:
2025-09-30T07:44:02.9005194Z         1s)
2025-09-30T07:44:03.4331618Z    test_working_directory=/tmp/plugintest2014207463 test_step_number=3 test_name=TestAccAdvancedCluster_updateDeleteTimeoutFlex
2025-09-30T07:44:03.4332497Z     panic.go:615: Error running post-test destroy, there may be dangling resources: exit status 1
2025-09-30T07:44:03.4332936Z         
2025-09-30T07:44:03.4333198Z         Error: Error in flex delete
2025-09-30T07:44:03.4333456Z         
2025-09-30T07:44:03.4333855Z         cluster name: test-acc-tf-7120995244835794743, API error details:
2025-09-30T07:44:03.4334735Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68db89d6bb7b8c0d7034aa99/flexClusters/test-acc-tf-7120995244835794743
2025-09-30T07:44:03.4335520Z         DELETE: HTTP 400 Bad Request (Error code: "ATLAS_GENERAL_ERROR") Detail:
2025-09-30T07:44:03.4336402Z         Reason: Cluster already requested to be deleted. Reason: Bad Request. Params:
2025-09-30T07:44:03.4337018Z         [Cluster already requested to be deleted], BadRequestDetail: 
2025-09-30T07:44:03.4337467Z --- FAIL: TestAccAdvancedCluster_updateDeleteTimeoutFlex (21.90s)
```

  - FAIL 18 seconds

### Error 2025-09-30T09:11:27+00:00
```
2025-09-30T09:11:27.4751580Z === RUN   TestAccAdvancedCluster_updateDeleteTimeoutFlex
2025-09-30T09:11:27.4982237Z === CONT  TestAccAdvancedCluster_updateDeleteTimeoutFlex
2025-09-30T09:11:45.9531641Z === NAME  TestAccAdvancedCluster_updateDeleteTimeoutFlex
2025-09-30T09:11:45.9532660Z     resource_test.go:2894: Step 3/4, expected an error with pattern, no match on: Error running apply: exit status 1
2025-09-30T09:11:45.9533363Z         
2025-09-30T09:11:45.9533711Z         Error: Error in flex delete
2025-09-30T09:11:45.9533995Z         
2025-09-30T09:11:45.9534459Z         cluster name: test-acc-tf-7808478731773462451, API error details: timeout
2025-09-30T09:11:45.9535230Z         while waiting for state to become 'DELETED' (last state: 'DELETING', timeout:
2025-09-30T09:11:45.9535688Z         1s)
2025-09-30T09:11:46.2747818Z    test_working_directory=/tmp/plugintest786019688 test_step_number=3 test_name=TestAccAdvancedCluster_updateDeleteTimeoutFlex
2025-09-30T09:11:46.2748867Z     panic.go:615: Error running post-test destroy, there may be dangling resources: exit status 1
2025-09-30T09:11:46.2749306Z         
2025-09-30T09:11:46.2749564Z         Error: Error in flex delete
2025-09-30T09:11:46.2749818Z         
2025-09-30T09:11:46.2750218Z         cluster name: test-acc-tf-7808478731773462451, API error details:
2025-09-30T09:11:46.2751108Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68db9e59f2e0c5381c1330c1/flexClusters/test-acc-tf-7808478731773462451
2025-09-30T09:11:46.2752475Z         DELETE: HTTP 400 Bad Request (Error code: "ATLAS_GENERAL_ERROR") Detail:
2025-09-30T09:11:46.2753128Z         Reason: Cluster already requested to be deleted. Reason: Bad Request. Params:
2025-09-30T09:11:46.2753720Z         [Cluster already requested to be deleted], BadRequestDetail: 
2025-09-30T09:11:46.2754174Z --- FAIL: TestAccAdvancedCluster_updateDeleteTimeoutFlex (18.79s)
```

  - FAIL 19 seconds

### Error 2025-09-30T15:08:02+00:00
```
2025-09-30T15:08:02.5601710Z === RUN   TestAccAdvancedCluster_updateDeleteTimeoutFlex
2025-09-30T15:08:02.5678737Z === CONT  TestAccAdvancedCluster_updateDeleteTimeoutFlex
2025-09-30T15:08:21.3467673Z === NAME  TestAccAdvancedCluster_updateDeleteTimeoutFlex
2025-09-30T15:08:21.3468493Z     resource_test.go:2894: Step 3/4, expected an error with pattern, no match on: Error running apply: exit status 1
2025-09-30T15:08:21.3469179Z         
2025-09-30T15:08:21.3469443Z         Error: Error in flex delete
2025-09-30T15:08:21.3469796Z         
2025-09-30T15:08:21.3470341Z         cluster name: test-acc-tf-4026581415522354496, API error details: timeout
2025-09-30T15:08:21.3471407Z         while waiting for state to become 'DELETED' (last state: 'DELETING', timeout:
2025-09-30T15:08:21.3471804Z         1s)
2025-09-30T15:08:21.6790725Z    test_terraform_path=/home/runner/work/_temp/ea63cb1b-093e-438d-9c0c-23475ed11321/terraform test_working_directory=/tmp/plugintest375829589 test_step_number=3 test_name=TestAccAdvancedCluster_updateDeleteTimeoutFlex
2025-09-30T15:08:21.6792290Z     panic.go:615: Error running post-test destroy, there may be dangling resources: exit status 1
2025-09-30T15:08:21.6792722Z         
2025-09-30T15:08:21.6792979Z         Error: Error in flex delete
2025-09-30T15:08:21.6793226Z         
2025-09-30T15:08:21.6793624Z         cluster name: test-acc-tf-4026581415522354496, API error details:
2025-09-30T15:08:21.6794692Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68dbf200ce185e38b70f0d81/flexClusters/test-acc-tf-4026581415522354496
2025-09-30T15:08:21.6795474Z         DELETE: HTTP 400 Bad Request (Error code: "ATLAS_GENERAL_ERROR") Detail:
2025-09-30T15:08:21.6796108Z         Reason: Cluster already requested to be deleted. Reason: Bad Request. Params:
2025-09-30T15:08:21.6796684Z         [Cluster already requested to be deleted], BadRequestDetail: 
2025-09-30T15:08:21.6797120Z --- FAIL: TestAccAdvancedCluster_updateDeleteTimeoutFlex (19.12s)
```

- 2025-10-01
  - FAIL 18 seconds

### Error 2025-10-01T00:30:01+00:00
```
2025-10-01T00:30:01.0205138Z === RUN   TestAccAdvancedCluster_updateDeleteTimeoutFlex
2025-10-01T00:30:01.0307033Z === CONT  TestAccAdvancedCluster_updateDeleteTimeoutFlex
2025-10-01T00:30:19.5862783Z === NAME  TestAccAdvancedCluster_updateDeleteTimeoutFlex
2025-10-01T00:30:19.5864118Z     resource_test.go:2894: Step 3/4, expected an error with pattern, no match on: Error running apply: exit status 1
2025-10-01T00:30:19.5865133Z         
2025-10-01T00:30:19.5865602Z         Error: Error in flex delete
2025-10-01T00:30:19.5865870Z         
2025-10-01T00:30:19.5866438Z         cluster name: test-acc-tf-6840828070108141604, API error details: timeout
2025-10-01T00:30:19.5867191Z         while waiting for state to become 'DELETED' (last state: 'DELETING', timeout:
2025-10-01T00:30:19.5867582Z         1s)
2025-10-01T00:30:19.8808510Z   
2025-10-01T00:30:19.8809029Z     panic.go:615: Error running post-test destroy, there may be dangling resources: exit status 1
2025-10-01T00:30:19.8809456Z         
2025-10-01T00:30:19.8809716Z         Error: Error in flex delete
2025-10-01T00:30:19.8809969Z         
2025-10-01T00:30:19.8810373Z         cluster name: test-acc-tf-6840828070108141604, API error details:
2025-10-01T00:30:19.8811261Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68dc75b40c72c45ec9a90b26/flexClusters/test-acc-tf-6840828070108141604
2025-10-01T00:30:19.8812055Z         DELETE: HTTP 400 Bad Request (Error code: "ATLAS_GENERAL_ERROR") Detail:
2025-10-01T00:30:19.8812706Z         Reason: Cluster already requested to be deleted. Reason: Bad Request. Params:
2025-10-01T00:30:19.8813282Z         [Cluster already requested to be deleted], BadRequestDetail: 
2025-10-01T00:30:19.8813723Z --- FAIL: TestAccAdvancedCluster_updateDeleteTimeoutFlex (18.85s)
```

  - FAIL 18 seconds

### Error 2025-10-01T03:23:59+00:00
```
2025-10-01T03:23:59.4793133Z === RUN   TestAccAdvancedCluster_updateDeleteTimeoutFlex
2025-10-01T03:23:59.4914942Z === CONT  TestAccAdvancedCluster_updateDeleteTimeoutFlex
2025-10-01T03:24:16.0286730Z === NAME  TestAccAdvancedCluster_updateDeleteTimeoutFlex
2025-10-01T03:24:16.0287585Z     resource_test.go:2894: Step 2/4, expected an error with pattern, no match on: Error running apply: exit status 1
2025-10-01T03:24:16.0288159Z         
2025-10-01T03:24:16.0288586Z         Error: error updating flex cluster: test-acc-tf-6204249610793280964
2025-10-01T03:24:16.0289056Z         
2025-10-01T03:24:16.0289384Z           with mongodbatlas_advanced_cluster.test,
2025-10-01T03:24:16.0290175Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-10-01T03:24:16.0290900Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-10-01T03:24:16.0291257Z         
2025-10-01T03:24:16.0292058Z         unexpected state 'CREATING', wanted target 'IDLE'. last error: %!s(<nil>)
2025-10-01T03:24:17.6437292Z   
2025-10-01T03:24:17.6438112Z     panic.go:615: Error running post-test destroy, there may be dangling resources: exit status 1
2025-10-01T03:24:17.6438827Z         
2025-10-01T03:24:17.6439242Z         Error: Error in flex delete
2025-10-01T03:24:17.6439648Z         
2025-10-01T03:24:17.6440920Z         cluster name: test-acc-tf-6204249610793280964, API error details: timeout
2025-10-01T03:24:17.6442191Z         while waiting for state to become 'DELETED' (last state: 'DELETING', timeout:
2025-10-01T03:24:17.6442818Z         1s)
2025-10-01T03:24:17.6443301Z --- FAIL: TestAccAdvancedCluster_updateDeleteTimeoutFlex (18.16s)
```

  - FAIL 19 seconds

### Error 2025-10-01T04:56:43+00:00
```
2025-10-01T04:56:43.0197561Z === RUN   TestAccAdvancedCluster_updateDeleteTimeoutFlex
2025-10-01T04:56:43.0295647Z === CONT  TestAccAdvancedCluster_updateDeleteTimeoutFlex
2025-10-01T04:57:02.0088548Z === NAME  TestAccAdvancedCluster_updateDeleteTimeoutFlex
2025-10-01T04:57:02.0089760Z     resource_test.go:2894: Step 3/4, expected an error with pattern, no match on: Error running apply: exit status 1
2025-10-01T04:57:02.0090606Z         
2025-10-01T04:57:02.0091047Z         Error: Error in flex delete
2025-10-01T04:57:02.0091425Z         
2025-10-01T04:57:02.0091864Z         cluster name: test-acc-tf-2004656689855192247, API error details: timeout
2025-10-01T04:57:02.0092658Z         while waiting for state to become 'DELETED' (last state: 'DELETING', timeout:
2025-10-01T04:57:02.0093190Z         1s)
2025-10-01T04:57:02.3250027Z   
2025-10-01T04:57:02.3250720Z     panic.go:615: Error running post-test destroy, there may be dangling resources: exit status 1
2025-10-01T04:57:02.3251159Z         
2025-10-01T04:57:02.3251429Z         Error: Error in flex delete
2025-10-01T04:57:02.3251687Z         
2025-10-01T04:57:02.3252091Z         cluster name: test-acc-tf-2004656689855192247, API error details:
2025-10-01T04:57:02.3252974Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68dcb42d5a2f96450020b4cb/flexClusters/test-acc-tf-2004656689855192247
2025-10-01T04:57:02.3254111Z         DELETE: HTTP 400 Bad Request (Error code: "ATLAS_GENERAL_ERROR") Detail:
2025-10-01T04:57:02.3254759Z         Reason: Cluster already requested to be deleted. Reason: Bad Request. Params:
2025-10-01T04:57:02.3255338Z         [Cluster already requested to be deleted], BadRequestDetail: 
2025-10-01T04:57:02.3255781Z --- FAIL: TestAccAdvancedCluster_updateDeleteTimeoutFlex (19.30s)
```

  - FAIL 22 seconds

### Error 2025-10-01T07:30:00+00:00
```
2025-10-01T07:30:00.8525560Z === RUN   TestAccAdvancedCluster_updateDeleteTimeoutFlex
2025-10-01T07:30:00.8668614Z === CONT  TestAccAdvancedCluster_updateDeleteTimeoutFlex
2025-10-01T07:30:22.5753052Z === NAME  TestAccAdvancedCluster_updateDeleteTimeoutFlex
2025-10-01T07:30:22.5754284Z     resource_test.go:2894: Step 3/4, expected an error with pattern, no match on: Error running apply: exit status 1
2025-10-01T07:30:22.5754997Z         
2025-10-01T07:30:22.5755277Z         Error: Error in flex delete
2025-10-01T07:30:22.5755548Z         
2025-10-01T07:30:22.5756106Z         cluster name: test-acc-tf-1038707880225857862, API error details: timeout
2025-10-01T07:30:22.5756864Z         while waiting for state to become 'DELETED' (last state: 'DELETING', timeout:
2025-10-01T07:30:22.5757325Z         1s)
2025-10-01T07:30:23.1315859Z    test_step_number=3 test_name=TestAccAdvancedCluster_updateDeleteTimeoutFlex test_terraform_path=/home/runner/work/_temp/fac34d8f-e8a1-4d27-bbca-54dc189c82a4/terraform test_working_directory=/tmp/plugintest286521140
2025-10-01T07:30:23.1317467Z     panic.go:615: Error running post-test destroy, there may be dangling resources: exit status 1
2025-10-01T07:30:23.1317992Z         
2025-10-01T07:30:23.1318300Z         Error: Error in flex delete
2025-10-01T07:30:23.1318606Z         
2025-10-01T07:30:23.1319089Z         cluster name: test-acc-tf-1038707880225857862, API error details:
2025-10-01T07:30:23.1320179Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68dcd8215b2d552e98f9bb7c/flexClusters/test-acc-tf-1038707880225857862
2025-10-01T07:30:23.1321126Z         DELETE: HTTP 400 Bad Request (Error code: "ATLAS_GENERAL_ERROR") Detail:
2025-10-01T07:30:23.1321768Z         Reason: Cluster already requested to be deleted. Reason: Bad Request. Params:
2025-10-01T07:30:23.1322360Z         [Cluster already requested to be deleted], BadRequestDetail: 
2025-10-01T07:30:23.1322818Z --- FAIL: TestAccAdvancedCluster_updateDeleteTimeoutFlex (22.27s)
```

  - PASS 21 seconds
  - PASS 21 seconds
  - PASS 20 seconds
  - FAIL 19 seconds

### Error 2025-10-01T14:21:47+00:00
```
2025-10-01T14:21:47.1168461Z === RUN   TestAccAdvancedCluster_updateDeleteTimeoutFlex
2025-10-01T14:21:47.1230467Z === CONT  TestAccAdvancedCluster_updateDeleteTimeoutFlex
2025-10-01T14:22:06.8022940Z === NAME  TestAccAdvancedCluster_updateDeleteTimeoutFlex
2025-10-01T14:22:06.8023813Z     resource_test.go:2896: Step 4/4 error: Error running pre-apply plan: exit status 1
2025-10-01T14:22:06.8024329Z         
2025-10-01T14:22:06.8024747Z         Error: Unsupported block type
2025-10-01T14:22:06.8025017Z         
2025-10-01T14:22:06.8025729Z           on terraform_plugin_test.tf line 12:
2025-10-01T14:22:06.8026052Z           12: 		removed {
2025-10-01T14:22:06.8026351Z         
2025-10-01T14:22:06.8026779Z         Blocks of type "removed" are not expected here. Did you mean "moved"?
2025-10-01T14:22:06.8278538Z   
2025-10-01T14:22:06.8278999Z     panic.go:615: Error retrieving state, there may be dangling resources: exit status 1
2025-10-01T14:22:06.8279401Z         
2025-10-01T14:22:06.8279675Z         Error: Unsupported block type
2025-10-01T14:22:06.8279941Z         
2025-10-01T14:22:06.8280243Z           on terraform_plugin_test.tf line 12:
2025-10-01T14:22:06.8280563Z           12: 		removed {
2025-10-01T14:22:06.8280788Z         
2025-10-01T14:22:06.8281199Z         Blocks of type "removed" are not expected here. Did you mean "moved"?
2025-10-01T14:22:06.8281660Z --- FAIL: TestAccAdvancedCluster_updateDeleteTimeoutFlex (19.71s)
```

- 2025-10-02 PASS 19 seconds
- 2025-10-03 PASS 22 seconds
- 2025-10-04 PASS 20 seconds
- 2025-10-05

### Error 2025-10-05T00:31:26+00:00
```
2025-10-05T00:31:26.3837838Z === RUN   TestAccAdvancedCluster_updateDeleteTimeoutFlex
2025-10-05T00:31:26.4135680Z === CONT  TestAccAdvancedCluster_updateDeleteTimeoutFlex
2025-10-05T00:31:30.7441871Z === NAME  TestAccAdvancedCluster_updateDeleteTimeoutFlex
2025-10-05T00:31:30.7443165Z     resource_test.go:2896: Step 1/4 error: Error running apply: exit status 1
2025-10-05T00:31:30.7443845Z         
2025-10-05T00:31:30.7479798Z         Error: error creating flex cluster: Cluster name test-acc-tf-3638054612423725528 (project_id=68e1bc02f758b3057a1af960).
2025-10-05T00:31:30.7480739Z         
2025-10-05T00:31:30.7481328Z           with mongodbatlas_advanced_cluster.test,
2025-10-05T00:31:30.7482475Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-10-05T00:31:30.7483581Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-10-05T00:31:30.7484621Z         
2025-10-05T00:31:30.7485719Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68e1bc02f758b3057a1af960/flexClusters
2025-10-05T00:31:30.7486669Z         POST: HTTP 403 Forbidden (Error code:
2025-10-05T00:31:30.7487560Z         "ATLAS_RESOURCE_POLICIES_VIOLATION_NOT_AUTHORIZED") Detail: Invalid
2025-10-05T00:31:30.7488645Z         Configuration. Contains selections that are unavailable due to your
2025-10-05T00:31:30.7489683Z         organization's resource policies. Reason: Forbidden. Params: [],
2025-10-05T00:31:30.7490410Z         BadRequestDetail: 
2025-10-05T00:31:30.7878368Z    test_name=TestAccAdvancedCluster_moveBasic
2025-10-05T00:31:30.9123609Z --- FAIL: TestAccAdvancedCluster_updateDeleteTimeoutFlex (4.52s)
```

- 2025-10-06 PASS 19 seconds
- 2025-10-07 PASS 49 seconds
- 2025-10-08 PASS a minute
- 2025-10-09 PASS 5 minutes
- 2025-10-10 PASS a minute
- 2025-10-11 PASS a minute
- 2025-10-12 PASS 14 seconds
- 2025-10-13 PASS 22 seconds
- 2025-10-14 PASS 30 seconds
- 2025-10-15 PASS 20 seconds
- 2025-10-16 PASS 19 seconds
- 2025-10-17 PASS 32 seconds
- 2025-10-18 PASS 19 seconds
- 2025-10-19 PASS 29 seconds
- 2025-10-20
  - PASS 28 seconds
  - PASS 29 seconds
- 2025-10-21 PASS 19 seconds
- 2025-10-22
  - PASS 32 seconds
  - PASS 20 seconds