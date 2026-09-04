# cluster/cluster/TestAccCluster_RegionsConfig Test Details
# Found 34 TestRuns in dev, qa from 2026-08-06 to 2026-09-04 from master branch: 1 unique tests, FAIL(x 28) PASS(x 6)
Success rate: 17.65%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-08-11 00:27](#error-2026-08-11t0027200000) |  | dev | timeout | 11793.06s
[2026-08-12 00:32](#error-2026-08-12t0032070000) |  | dev | timeout | 12567.03s
[2026-08-13 00:33](#error-2026-08-13t0033170000) |  | dev | timeout | 12103.07s
[2026-08-14 00:33](#error-2026-08-14t0033070000) |  | dev | timeout | 11813.01s
[2026-08-15 00:20](#error-2026-08-15t0020530000) |  | dev | timeout | 11953.08s
[2026-08-17 00:20](#error-2026-08-17t0020420000) |  | dev | timeout | 11959.01s
[2026-08-18 00:20](#error-2026-08-18t0020210000) |  | dev | timeout | 11811.08s
[2026-08-19 00:20](#error-2026-08-19t0020110000) |  | dev | timeout | 11804.09s
[2026-08-20 00:20](#error-2026-08-20t0020390000) |  | dev | timeout | 11802.10s
[2026-08-21 00:21](#error-2026-08-21t0021550000) |  | dev | timeout | 11806.04s
[2026-08-22 00:20](#error-2026-08-22t0020220000) |  | dev | timeout | 11942.00s
[2026-08-24 00:21](#error-2026-08-24t0021480000) |  | dev | timeout | 11809.08s
[2026-08-25 00:20](#error-2026-08-25t0020500000) |  | dev | timeout | 12244.04s
[2026-08-26 00:21](#error-2026-08-26t0021420000) |  | dev | timeout | 12176.09s
[2026-08-27 01:46](#error-2026-08-27t0146590000) |  | dev | timeout | 11944.09s
[2026-08-28 03:08](#error-2026-08-28t0308380000) | INSUFFICIENT_DISK_SPACE_ON_REMAINING_SHARDS /api/atlas/v1.0/groups/6a90fbb463fde9550ed1b34a/clusters/test-acc-tf-c-6314134465197998297 | dev |  | 1032.02s
[2026-08-29 00:39](#error-2026-08-29t0039040000) |  | dev | timeout | 11802.02s
[2026-08-31 00:47](#error-2026-08-31t0047150000) |  | dev | timeout | 12312.02s
[2026-09-01 00:49](#error-2026-09-01t0049590000) |  | dev | timeout | 12019.02s
[2026-09-02 00:43](#error-2026-09-02t0043120000) |  | dev | timeout | 12213.02s
[2026-09-03 00:44](#error-2026-09-03t0044060000) |  | dev | flaky_client | 8939.06s
[2026-09-03 06:31](#error-2026-09-03t0631550000) |  | dev | timeout | 11806.07s

### Timeline
- 2026-08-05: MISSING
- 2026-08-06 PASS 42 minutes
- 2026-08-07 PASS 47 minutes
- 2026-08-08 PASS an hour
- 2026-08-09: MISSING
- 2026-08-10 PASS 46 minutes
- 2026-08-11

### Error 2026-08-11T00:27:20+00:00
```
2026-08-11T00:27:20.6777594Z === RUN   TestAccCluster_RegionsConfig
2026-08-11T00:27:20.6790202Z === CONT  TestAccCluster_RegionsConfig
2026-08-11T03:39:40.5811492Z === NAME  TestAccCluster_RegionsConfig
2026-08-11T03:39:40.5811804Z     resource_cluster_test.go:1161: Step 2/3 error: Error running apply: exit status 1
2026-08-11T03:39:40.5812048Z         
2026-08-11T03:39:40.5813192Z         Error: error updating MongoDB Cluster (test-acc-tf-c-4763657065200511174): error updating MongoDB Cluster (test-acc-tf-c-4763657065200511174): timeout while waiting for state to become 'IDLE' (last state: 'UPDATING', timeout: 3h0m0s)
2026-08-11T03:39:40.5814035Z         
2026-08-11T03:39:40.5814319Z           with mongodbatlas_cluster.test,
2026-08-11T03:39:40.5814834Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2026-08-11T03:39:40.5815164Z           12: 	resource "mongodbatlas_cluster" "test" {
2026-08-11T03:39:40.5815380Z         
2026-08-11T03:43:54.3181195Z --- FAIL: TestAccCluster_RegionsConfig (11793.64s)
```

- 2026-08-12

### Error 2026-08-12T00:32:07+00:00
```
2026-08-12T00:32:07.5541063Z === RUN   TestAccCluster_RegionsConfig
2026-08-12T00:32:07.5575150Z === CONT  TestAccCluster_RegionsConfig
2026-08-12T03:47:56.6655541Z === NAME  TestAccCluster_RegionsConfig
2026-08-12T03:47:56.6657188Z     resource_cluster_test.go:1161: Step 2/3 error: Error running apply: exit status 1
2026-08-12T03:47:56.6658494Z         
2026-08-12T03:47:56.6668803Z         Error: error updating MongoDB Cluster (test-acc-tf-c-8057559111340634550): error updating MongoDB Cluster (test-acc-tf-c-8057559111340634550): timeout while waiting for state to become 'IDLE' (last state: 'UPDATING', timeout: 3h0m0s)
2026-08-12T03:47:56.6670604Z         
2026-08-12T03:47:56.6671314Z           with mongodbatlas_cluster.test,
2026-08-12T03:47:56.6672036Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2026-08-12T03:47:56.6672677Z           12: 	resource "mongodbatlas_cluster" "test" {
2026-08-12T03:47:56.6673014Z         
2026-08-12T04:01:34.8189493Z --- FAIL: TestAccCluster_RegionsConfig (12567.26s)
```

- 2026-08-13

### Error 2026-08-13T00:33:17+00:00
```
2026-08-13T00:33:17.9429736Z === RUN   TestAccCluster_RegionsConfig
2026-08-13T00:33:17.9450499Z === CONT  TestAccCluster_RegionsConfig
2026-08-13T03:48:02.3194120Z === NAME  TestAccCluster_RegionsConfig
2026-08-13T03:48:02.3194847Z     resource_cluster_test.go:1161: Step 2/3 error: Error running apply: exit status 1
2026-08-13T03:48:02.3195317Z         
2026-08-13T03:48:02.3196962Z         Error: error updating MongoDB Cluster (test-acc-tf-c-6443650628457812482): error updating MongoDB Cluster (test-acc-tf-c-6443650628457812482): timeout while waiting for state to become 'IDLE' (last state: 'UPDATING', timeout: 3h0m0s)
2026-08-13T03:48:02.3197950Z         
2026-08-13T03:48:02.3198286Z           with mongodbatlas_cluster.test,
2026-08-13T03:48:02.3198953Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2026-08-13T03:48:02.3199569Z           12: 	resource "mongodbatlas_cluster" "test" {
2026-08-13T03:48:02.3199901Z         
2026-08-13T03:55:01.6233279Z --- FAIL: TestAccCluster_RegionsConfig (12103.68s)
```

- 2026-08-14

### Error 2026-08-14T00:33:07+00:00
```
2026-08-14T00:33:07.5913256Z === RUN   TestAccCluster_RegionsConfig
2026-08-14T00:33:07.6307619Z === CONT  TestAccCluster_RegionsConfig
2026-08-14T03:44:17.0241991Z === NAME  TestAccCluster_RegionsConfig
2026-08-14T03:44:17.0242785Z     resource_cluster_test.go:1161: Step 2/3 error: Error running apply: exit status 1
2026-08-14T03:44:17.0243375Z         
2026-08-14T03:44:17.0245194Z         Error: error updating MongoDB Cluster (test-acc-tf-c-1497501204326066357): error updating MongoDB Cluster (test-acc-tf-c-1497501204326066357): timeout while waiting for state to become 'IDLE' (last state: 'UPDATING', timeout: 3h0m0s)
2026-08-14T03:44:17.0246217Z         
2026-08-14T03:44:17.0246643Z           with mongodbatlas_cluster.test,
2026-08-14T03:44:17.0247493Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2026-08-14T03:44:17.0248832Z           12: 	resource "mongodbatlas_cluster" "test" {
2026-08-14T03:44:17.0249163Z         
2026-08-14T03:50:00.7294380Z --- FAIL: TestAccCluster_RegionsConfig (11813.13s)
```

- 2026-08-15

### Error 2026-08-15T00:20:53+00:00
```
2026-08-15T00:20:53.2038743Z === RUN   TestAccCluster_RegionsConfig
2026-08-15T00:20:53.2051933Z === CONT  TestAccCluster_RegionsConfig
2026-08-15T03:34:32.8548349Z === NAME  TestAccCluster_RegionsConfig
2026-08-15T03:34:32.8549270Z     resource_cluster_test.go:1161: Step 2/3 error: Error running apply: exit status 1
2026-08-15T03:34:32.8550036Z         
2026-08-15T03:34:32.8552111Z         Error: error updating MongoDB Cluster (test-acc-tf-c-5690288012505264003): error updating MongoDB Cluster (test-acc-tf-c-5690288012505264003): timeout while waiting for state to become 'IDLE' (last state: 'UPDATING', timeout: 3h0m0s)
2026-08-15T03:34:32.8553088Z         
2026-08-15T03:34:32.8553469Z           with mongodbatlas_cluster.test,
2026-08-15T03:34:32.8556211Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2026-08-15T03:34:32.8557386Z           12: 	resource "mongodbatlas_cluster" "test" {
2026-08-15T03:34:32.8557919Z         
2026-08-15T03:40:07.0106952Z --- FAIL: TestAccCluster_RegionsConfig (11953.81s)
```

- 2026-08-16: MISSING
- 2026-08-17

### Error 2026-08-17T00:20:42+00:00
```
2026-08-17T00:20:42.2923774Z === RUN   TestAccCluster_RegionsConfig
2026-08-17T00:20:42.2932133Z === CONT  TestAccCluster_RegionsConfig
2026-08-17T03:34:15.6799636Z === NAME  TestAccCluster_RegionsConfig
2026-08-17T03:34:15.6800386Z     resource_cluster_test.go:1161: Step 2/3 error: Error running apply: exit status 1
2026-08-17T03:34:15.6801003Z         
2026-08-17T03:34:15.6802625Z         Error: error updating MongoDB Cluster (test-acc-tf-c-3467509973610178467): error updating MongoDB Cluster (test-acc-tf-c-3467509973610178467): timeout while waiting for state to become 'IDLE' (last state: 'UPDATING', timeout: 3h0m0s)
2026-08-17T03:34:15.6804081Z         
2026-08-17T03:34:15.6804503Z           with mongodbatlas_cluster.test,
2026-08-17T03:34:15.6805158Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2026-08-17T03:34:15.6805757Z           12: 	resource "mongodbatlas_cluster" "test" {
2026-08-17T03:34:15.6806094Z         
2026-08-17T03:40:01.3469108Z --- FAIL: TestAccCluster_RegionsConfig (11959.06s)
```

- 2026-08-18

### Error 2026-08-18T00:20:21+00:00
```
2026-08-18T00:20:21.5468644Z === RUN   TestAccCluster_RegionsConfig
2026-08-18T00:20:21.5483316Z === CONT  TestAccCluster_RegionsConfig
2026-08-18T03:31:39.8125066Z === NAME  TestAccCluster_RegionsConfig
2026-08-18T03:31:39.8125758Z     resource_cluster_test.go:1161: Step 2/3 error: Error running apply: exit status 1
2026-08-18T03:31:39.8126443Z         
2026-08-18T03:31:39.8128369Z         Error: error updating MongoDB Cluster (test-acc-tf-c-601205637264156892): error updating MongoDB Cluster (test-acc-tf-c-601205637264156892): timeout while waiting for state to become 'IDLE' (last state: 'UPDATING', timeout: 3h0m0s)
2026-08-18T03:31:39.8129656Z         
2026-08-18T03:31:39.8129985Z           with mongodbatlas_cluster.test,
2026-08-18T03:31:39.8130622Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2026-08-18T03:31:39.8131244Z           12: 	resource "mongodbatlas_cluster" "test" {
2026-08-18T03:31:39.8131569Z         
2026-08-18T03:37:13.3347070Z --- FAIL: TestAccCluster_RegionsConfig (11811.79s)
```

- 2026-08-19

### Error 2026-08-19T00:20:11+00:00
```
2026-08-19T00:20:11.7384324Z === RUN   TestAccCluster_RegionsConfig
2026-08-19T00:20:11.7405462Z === CONT  TestAccCluster_RegionsConfig
2026-08-19T03:31:21.5989197Z === NAME  TestAccCluster_RegionsConfig
2026-08-19T03:31:21.5990079Z     resource_cluster_test.go:1161: Step 2/3 error: Error running apply: exit status 1
2026-08-19T03:31:21.5990663Z         
2026-08-19T03:31:21.5992339Z         Error: error updating MongoDB Cluster (test-acc-tf-c-4418131176987899800): error updating MongoDB Cluster (test-acc-tf-c-4418131176987899800): timeout while waiting for state to become 'IDLE' (last state: 'UPDATING', timeout: 3h0m0s)
2026-08-19T03:31:21.5993945Z         
2026-08-19T03:31:21.5994535Z           with mongodbatlas_cluster.test,
2026-08-19T03:31:21.5995411Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2026-08-19T03:31:21.5996218Z           12: 	resource "mongodbatlas_cluster" "test" {
2026-08-19T03:31:21.5996675Z         
2026-08-19T03:36:56.6037588Z --- FAIL: TestAccCluster_RegionsConfig (11804.86s)
```

- 2026-08-20

### Error 2026-08-20T00:20:39+00:00
```
2026-08-20T00:20:39.2881743Z === RUN   TestAccCluster_RegionsConfig
2026-08-20T00:20:39.2894030Z === CONT  TestAccCluster_RegionsConfig
2026-08-20T03:31:48.3443559Z === NAME  TestAccCluster_RegionsConfig
2026-08-20T03:31:48.3444088Z     resource_cluster_test.go:1161: Step 2/3 error: Error running apply: exit status 1
2026-08-20T03:31:48.3444454Z         
2026-08-20T03:31:48.3445591Z         Error: error updating MongoDB Cluster (test-acc-tf-c-7668306637952189448): error updating MongoDB Cluster (test-acc-tf-c-7668306637952189448): timeout while waiting for state to become 'IDLE' (last state: 'UPDATING', timeout: 3h0m0s)
2026-08-20T03:31:48.3446447Z         
2026-08-20T03:31:48.3446730Z           with mongodbatlas_cluster.test,
2026-08-20T03:31:48.3447298Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2026-08-20T03:31:48.3447775Z           12: 	resource "mongodbatlas_cluster" "test" {
2026-08-20T03:31:48.3448010Z         
2026-08-20T03:37:22.2510008Z --- FAIL: TestAccCluster_RegionsConfig (11802.96s)
```

- 2026-08-21

### Error 2026-08-21T00:21:55+00:00
```
2026-08-21T00:21:55.9715572Z === RUN   TestAccCluster_RegionsConfig
2026-08-21T00:21:56.0709141Z === CONT  TestAccCluster_RegionsConfig
2026-08-21T03:33:07.6767471Z === NAME  TestAccCluster_RegionsConfig
2026-08-21T03:33:07.6768233Z     resource_cluster_test.go:1161: Step 2/3 error: Error running apply: exit status 1
2026-08-21T03:33:07.6768946Z         
2026-08-21T03:33:07.6770090Z         Error: error updating MongoDB Cluster (test-acc-tf-c-3730166921861170878): error updating MongoDB Cluster (test-acc-tf-c-3730166921861170878): timeout while waiting for state to become 'IDLE' (last state: 'UPDATING', timeout: 3h0m0s)
2026-08-21T03:33:07.6770918Z         
2026-08-21T03:33:07.6771208Z           with mongodbatlas_cluster.test,
2026-08-21T03:33:07.6771735Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2026-08-21T03:33:07.6772252Z           12: 	resource "mongodbatlas_cluster" "test" {
2026-08-21T03:33:07.6772541Z         
2026-08-21T03:38:42.3718444Z --- FAIL: TestAccCluster_RegionsConfig (11806.40s)
```

- 2026-08-22

### Error 2026-08-22T00:20:22+00:00
```
2026-08-22T00:20:22.4809258Z === RUN   TestAccCluster_RegionsConfig
2026-08-22T00:20:22.4861879Z === CONT  TestAccCluster_RegionsConfig
2026-08-22T03:33:51.0510449Z === NAME  TestAccCluster_RegionsConfig
2026-08-22T03:33:51.0511494Z     resource_cluster_test.go:1161: Step 2/3 error: Error running apply: exit status 1
2026-08-22T03:33:51.0512212Z         
2026-08-22T03:33:51.0514198Z         Error: error updating MongoDB Cluster (test-acc-tf-c-9070390955557627369): error updating MongoDB Cluster (test-acc-tf-c-9070390955557627369): timeout while waiting for state to become 'IDLE' (last state: 'UPDATING', timeout: 3h0m0s)
2026-08-22T03:33:51.0515139Z         
2026-08-22T03:33:51.0515726Z           with mongodbatlas_cluster.test,
2026-08-22T03:33:51.0516380Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2026-08-22T03:33:51.0516985Z           12: 	resource "mongodbatlas_cluster" "test" {
2026-08-22T03:33:51.0517314Z         
2026-08-22T03:39:24.5283584Z --- FAIL: TestAccCluster_RegionsConfig (11942.05s)
```

- 2026-08-23: MISSING
- 2026-08-24

### Error 2026-08-24T00:21:48+00:00
```
2026-08-24T00:21:48.5863941Z === RUN   TestAccCluster_RegionsConfig
2026-08-24T00:21:48.5873847Z === CONT  TestAccCluster_RegionsConfig
2026-08-24T03:33:02.1465019Z === NAME  TestAccCluster_RegionsConfig
2026-08-24T03:33:02.1465644Z     resource_cluster_test.go:1161: Step 2/3 error: Error running apply: exit status 1
2026-08-24T03:33:02.1466131Z         
2026-08-24T03:33:02.1468134Z         Error: error updating MongoDB Cluster (test-acc-tf-c-3079676605785588175): error updating MongoDB Cluster (test-acc-tf-c-3079676605785588175): timeout while waiting for state to become 'IDLE' (last state: 'UPDATING', timeout: 3h0m0s)
2026-08-24T03:33:02.1469500Z         
2026-08-24T03:33:02.1469860Z           with mongodbatlas_cluster.test,
2026-08-24T03:33:02.1470562Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2026-08-24T03:33:02.1471211Z           12: 	resource "mongodbatlas_cluster" "test" {
2026-08-24T03:33:02.1471560Z         
2026-08-24T03:38:38.3980851Z --- FAIL: TestAccCluster_RegionsConfig (11809.81s)
```

- 2026-08-25

### Error 2026-08-25T00:20:50+00:00
```
2026-08-25T00:20:50.6856342Z === RUN   TestAccCluster_RegionsConfig
2026-08-25T00:20:50.6877538Z === CONT  TestAccCluster_RegionsConfig
2026-08-25T03:31:58.3386870Z === NAME  TestAccCluster_RegionsConfig
2026-08-25T03:31:58.3387471Z     resource_cluster_test.go:1161: Step 2/3 error: Error running apply: exit status 1
2026-08-25T03:31:58.3387925Z         
2026-08-25T03:31:58.3389580Z         Error: error updating MongoDB Cluster (test-acc-tf-c-7579389070736670763): error updating MongoDB Cluster (test-acc-tf-c-7579389070736670763): timeout while waiting for state to become 'IDLE' (last state: 'UPDATING', timeout: 3h0m0s)
2026-08-25T03:31:58.3390509Z         
2026-08-25T03:31:58.3390837Z           with mongodbatlas_cluster.test,
2026-08-25T03:31:58.3391470Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2026-08-25T03:31:58.3392074Z           12: 	resource "mongodbatlas_cluster" "test" {
2026-08-25T03:31:58.3392408Z         
2026-08-25T03:44:55.0530463Z --- FAIL: TestAccCluster_RegionsConfig (12244.36s)
```

- 2026-08-26

### Error 2026-08-26T00:21:42+00:00
```
2026-08-26T00:21:42.9811800Z === RUN   TestAccCluster_RegionsConfig
2026-08-26T00:21:42.9822775Z === CONT  TestAccCluster_RegionsConfig
2026-08-26T03:34:18.1544260Z === NAME  TestAccCluster_RegionsConfig
2026-08-26T03:34:18.1544888Z     resource_cluster_test.go:1161: Step 2/3 error: Error running apply: exit status 1
2026-08-26T03:34:18.1545547Z         
2026-08-26T03:34:18.1547893Z         Error: error updating MongoDB Cluster (test-acc-tf-c-4336741967982755879): error updating MongoDB Cluster (test-acc-tf-c-4336741967982755879): timeout while waiting for state to become 'IDLE' (last state: 'UPDATING', timeout: 3h0m0s)
2026-08-26T03:34:18.1548920Z         
2026-08-26T03:34:18.1549278Z           with mongodbatlas_cluster.test,
2026-08-26T03:34:18.1549962Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2026-08-26T03:34:18.1550621Z           12: 	resource "mongodbatlas_cluster" "test" {
2026-08-26T03:34:18.1550991Z         
2026-08-26T03:44:39.8804749Z --- FAIL: TestAccCluster_RegionsConfig (12176.90s)
```

- 2026-08-27

### Error 2026-08-27T01:46:59+00:00
```
2026-08-27T01:46:59.6724754Z === RUN   TestAccCluster_RegionsConfig
2026-08-27T01:46:59.6746761Z === CONT  TestAccCluster_RegionsConfig
2026-08-27T05:01:11.8909683Z === NAME  TestAccCluster_RegionsConfig
2026-08-27T05:01:11.8910671Z     resource_cluster_test.go:1161: Step 3/3 error: Error running apply: exit status 1
2026-08-27T05:01:11.8911428Z         
2026-08-27T05:01:11.8913728Z         Error: error updating MongoDB Cluster (test-acc-tf-c-8096140547556210277): error updating MongoDB Cluster (test-acc-tf-c-8096140547556210277): timeout while waiting for state to become 'IDLE' (last state: 'UPDATING', timeout: 3h0m0s)
2026-08-27T05:01:11.8915371Z         
2026-08-27T05:01:11.8915780Z           with mongodbatlas_cluster.test,
2026-08-27T05:01:11.8916539Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2026-08-27T05:01:11.8917247Z           12: 	resource "mongodbatlas_cluster" "test" {
2026-08-27T05:01:11.8918643Z         
2026-08-27T05:06:04.5465027Z --- FAIL: TestAccCluster_RegionsConfig (11944.87s)
```

- 2026-08-28

### Error 2026-08-28T03:08:38+00:00
```
2026-08-28T03:08:38.1195917Z === RUN   TestAccCluster_RegionsConfig
2026-08-28T03:08:38.1206948Z === CONT  TestAccCluster_RegionsConfig
2026-08-28T03:20:57.4105170Z === NAME  TestAccCluster_RegionsConfig
2026-08-28T03:20:57.4106111Z     resource_cluster_test.go:1161: Step 2/3 error: Error running apply: exit status 1
2026-08-28T03:20:57.4106789Z         
2026-08-28T03:20:57.4109686Z         Error: error updating MongoDB Cluster (test-acc-tf-c-6314134465197998297): error updating MongoDB Cluster (test-acc-tf-c-6314134465197998297): PATCH https://cloud-dev.mongodb.com/api/atlas/v1.0/groups/6a90fbb463fde9550ed1b34a/clusters/test-acc-tf-c-6314134465197998297: 400 (request "INSUFFICIENT_DISK_SPACE_ON_REMAINING_SHARDS") One or more shards are being removed that consume more disk space than that available on the remaining shards.
2026-08-28T03:20:57.4112358Z         
2026-08-28T03:20:57.4114738Z           with mongodbatlas_cluster.test,
2026-08-28T03:20:57.4115842Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2026-08-28T03:20:57.4116903Z           12: 	resource "mongodbatlas_cluster" "test" {
2026-08-28T03:20:57.4117456Z         
2026-08-28T03:23:02.3440106Z    test_name=TestAccCluster_basicAWS_PausedToUnpaused
2026-08-28T03:25:50.2849598Z --- FAIL: TestAccCluster_RegionsConfig (1032.16s)
```

- 2026-08-29

### Error 2026-08-29T00:39:04+00:00
```
2026-08-29T00:39:04.9564573Z === RUN   TestAccCluster_RegionsConfig
2026-08-29T00:39:04.9583914Z === CONT  TestAccCluster_RegionsConfig
2026-08-29T03:50:13.6159036Z === NAME  TestAccCluster_RegionsConfig
2026-08-29T03:50:13.6160085Z     resource_cluster_test.go:1161: Step 2/3 error: Error running apply: exit status 1
2026-08-29T03:50:13.6160549Z         
2026-08-29T03:50:13.6162178Z         Error: error updating MongoDB Cluster (test-acc-tf-c-3243657496264092518): error updating MongoDB Cluster (test-acc-tf-c-3243657496264092518): timeout while waiting for state to become 'IDLE' (last state: 'UPDATING', timeout: 3h0m0s)
2026-08-29T03:50:13.6163614Z         
2026-08-29T03:50:13.6163959Z           with mongodbatlas_cluster.test,
2026-08-29T03:50:13.6164619Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2026-08-29T03:50:13.6165239Z           12: 	resource "mongodbatlas_cluster" "test" {
2026-08-29T03:50:13.6165567Z         
2026-08-29T03:55:47.1348847Z --- FAIL: TestAccCluster_RegionsConfig (11802.18s)
```

- 2026-08-30: MISSING
- 2026-08-31

### Error 2026-08-31T00:47:15+00:00
```
2026-08-31T00:47:15.6741650Z === RUN   TestAccCluster_RegionsConfig
2026-08-31T00:47:15.6934803Z === CONT  TestAccCluster_RegionsConfig
2026-08-31T04:06:52.1724822Z === NAME  TestAccCluster_RegionsConfig
2026-08-31T04:06:52.1725455Z     resource_cluster_test.go:1161: Step 2/3 error: Error running apply: exit status 1
2026-08-31T04:06:52.1725970Z         
2026-08-31T04:06:52.1727531Z         Error: error updating MongoDB Cluster (test-acc-tf-c-7614068114133940981): error updating MongoDB Cluster (test-acc-tf-c-7614068114133940981): timeout while waiting for state to become 'IDLE' (last state: 'UPDATING', timeout: 3h0m0s)
2026-08-31T04:06:52.1728579Z         
2026-08-31T04:06:52.1728939Z           with mongodbatlas_cluster.test,
2026-08-31T04:06:52.1729995Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2026-08-31T04:06:52.1730558Z           12: 	resource "mongodbatlas_cluster" "test" {
2026-08-31T04:06:52.1730882Z         
2026-08-31T04:12:27.9158298Z --- FAIL: TestAccCluster_RegionsConfig (12312.23s)
```

- 2026-09-01

### Error 2026-09-01T00:49:59+00:00
```
2026-09-01T00:49:59.2428339Z === RUN   TestAccCluster_RegionsConfig
2026-09-01T00:49:59.2437933Z === CONT  TestAccCluster_RegionsConfig
2026-09-01T04:04:43.7737536Z === NAME  TestAccCluster_RegionsConfig
2026-09-01T04:04:43.7738181Z     resource_cluster_test.go:1161: Step 2/3 error: Error running apply: exit status 1
2026-09-01T04:04:43.7738558Z         
2026-09-01T04:04:43.7739600Z         Error: error updating MongoDB Cluster (test-acc-tf-c-4436392911543084657): error updating MongoDB Cluster (test-acc-tf-c-4436392911543084657): timeout while waiting for state to become 'IDLE' (last state: 'UPDATING', timeout: 3h0m0s)
2026-09-01T04:04:43.7740754Z         
2026-09-01T04:04:43.7741030Z           with mongodbatlas_cluster.test,
2026-09-01T04:04:43.7741546Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2026-09-01T04:04:43.7742030Z           12: 	resource "mongodbatlas_cluster" "test" {
2026-09-01T04:04:43.7742288Z         
2026-09-01T04:10:18.4714953Z --- FAIL: TestAccCluster_RegionsConfig (12019.23s)
```

- 2026-09-02

### Error 2026-09-02T00:43:12+00:00
```
2026-09-02T00:43:12.0772836Z === RUN   TestAccCluster_RegionsConfig
2026-09-02T00:43:12.0782593Z === CONT  TestAccCluster_RegionsConfig
2026-09-02T04:01:39.6204337Z === NAME  TestAccCluster_RegionsConfig
2026-09-02T04:01:39.6205326Z     resource_cluster_test.go:1161: Step 2/3 error: Error running apply: exit status 1
2026-09-02T04:01:39.6206095Z         
2026-09-02T04:01:39.6208123Z         Error: error updating MongoDB Cluster (test-acc-tf-c-7754817926503897645): error updating MongoDB Cluster (test-acc-tf-c-7754817926503897645): timeout while waiting for state to become 'IDLE' (last state: 'UPDATING', timeout: 3h0m0s)
2026-09-02T04:01:39.6209594Z         
2026-09-02T04:01:39.6209946Z           with mongodbatlas_cluster.test,
2026-09-02T04:01:39.6211639Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2026-09-02T04:01:39.6212706Z           12: 	resource "mongodbatlas_cluster" "test" {
2026-09-02T04:01:39.6213172Z         
2026-09-02T04:06:45.3277024Z --- FAIL: TestAccCluster_RegionsConfig (12213.25s)
```

- 2026-09-03
  - FAIL 2 hours

### Error 2026-09-03T00:44:06+00:00
```
2026-09-03T00:44:06.4686242Z === RUN   TestAccCluster_RegionsConfig
2026-09-03T00:44:06.4955060Z === CONT  TestAccCluster_RegionsConfig
2026-09-03T03:07:31.7853238Z === NAME  TestAccCluster_RegionsConfig
2026-09-03T03:07:31.7854208Z     resource_cluster_test.go:1161: Step 2/3 error: Error running apply: exit status 1
2026-09-03T03:07:31.7854845Z         
2026-09-03T03:07:31.7858482Z         Error: error updating MongoDB Cluster (test-acc-tf-c-3686940273303467631): error updating MongoDB Cluster (test-acc-tf-c-3686940273303467631): Get "https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a98c2d47f44bc884f4ab572/clusters/test-acc-tf-c-3686940273303467631": dial tcp: lookup cloud-dev.mongodb.com: i/o timeout
2026-09-03T03:07:31.7860839Z         
2026-09-03T03:07:31.7861453Z           with mongodbatlas_cluster.test,
2026-09-03T03:07:31.7863580Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2026-09-03T03:07:31.7864671Z           12: 	resource "mongodbatlas_cluster" "test" {
2026-09-03T03:07:31.7865272Z         
2026-09-03T03:13:06.0480925Z --- FAIL: TestAccCluster_RegionsConfig (8939.58s)
```

  - FAIL 3 hours

### Error 2026-09-03T06:31:55+00:00
```
2026-09-03T06:31:55.3841631Z === RUN   TestAccCluster_RegionsConfig
2026-09-03T06:31:55.3948601Z === CONT  TestAccCluster_RegionsConfig
2026-09-03T09:43:06.7006309Z === NAME  TestAccCluster_RegionsConfig
2026-09-03T09:43:06.7006899Z     resource_cluster_test.go:1161: Step 2/3 error: Error running apply: exit status 1
2026-09-03T09:43:06.7007353Z         
2026-09-03T09:43:06.7009388Z         Error: error updating MongoDB Cluster (test-acc-tf-c-8503897665316190626): error updating MongoDB Cluster (test-acc-tf-c-8503897665316190626): timeout while waiting for state to become 'IDLE' (last state: 'UPDATING', timeout: 3h0m0s)
2026-09-03T09:43:06.7010586Z         
2026-09-03T09:43:06.7010901Z           with mongodbatlas_cluster.test,
2026-09-03T09:43:06.7011549Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2026-09-03T09:43:06.7012150Z           12: 	resource "mongodbatlas_cluster" "test" {
2026-09-03T09:43:06.7012473Z         
2026-09-03T09:48:42.1157576Z --- FAIL: TestAccCluster_RegionsConfig (11806.72s)
```

- 2026-09-04 PASS an hour

## QA Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-08-13 07:34](#error-2026-08-13t0734550000) |  | qa | timeout | 11707.09s
[2026-08-16 00:21](#error-2026-08-16t0021400000) |  | qa | timeout | 11794.09s
[2026-08-23 00:22](#error-2026-08-23t0022050000) |  | qa | timeout | 11681.07s
[2026-08-25 09:43](#error-2026-08-25t0943430000) |  | qa | timeout | 11596.01s
[2026-08-27 08:27](#error-2026-08-27t0827340000) |  | qa | flaky_client | 4001.01s
[2026-08-30 00:46](#error-2026-08-30t0046050000) |  | qa | timeout | 11653.07s

### Timeline
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
- 2026-08-08: MISSING
- 2026-08-09 PASS 52 minutes
- 2026-08-10: MISSING
- 2026-08-11: MISSING
- 2026-08-12: MISSING
- 2026-08-13

### Error 2026-08-13T07:34:55+00:00
```
2026-08-13T07:34:55.7307767Z === RUN   TestAccCluster_RegionsConfig
2026-08-13T07:34:55.7618801Z === CONT  TestAccCluster_RegionsConfig
2026-08-13T10:46:19.3756460Z === NAME  TestAccCluster_RegionsConfig
2026-08-13T10:46:19.3757131Z     resource_cluster_test.go:1161: Step 2/3 error: Error running apply: exit status 1
2026-08-13T10:46:19.3757838Z         
2026-08-13T10:46:19.3760133Z         Error: error updating MongoDB Cluster (test-acc-tf-c-2025186576097537308): error updating MongoDB Cluster (test-acc-tf-c-2025186576097537308): timeout while waiting for state to become 'IDLE' (last state: 'UPDATING', timeout: 3h0m0s)
2026-08-13T10:46:19.3761855Z         
2026-08-13T10:46:19.3762647Z           with mongodbatlas_cluster.test,
2026-08-13T10:46:19.3763794Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2026-08-13T10:46:19.3764873Z           12: 	resource "mongodbatlas_cluster" "test" {
2026-08-13T10:46:19.3765452Z         
2026-08-13T10:50:03.5901225Z --- FAIL: TestAccCluster_RegionsConfig (11707.86s)
```

- 2026-08-14: MISSING
- 2026-08-15: MISSING
- 2026-08-16

### Error 2026-08-16T00:21:40+00:00
```
2026-08-16T00:21:40.7477085Z === RUN   TestAccCluster_RegionsConfig
2026-08-16T00:21:40.7493786Z === CONT  TestAccCluster_RegionsConfig
2026-08-16T03:34:01.4731002Z === NAME  TestAccCluster_RegionsConfig
2026-08-16T03:34:01.4731967Z     resource_cluster_test.go:1161: Step 2/3 error: Error running apply: exit status 1
2026-08-16T03:34:01.4732545Z         
2026-08-16T03:34:01.4733761Z         Error: error updating MongoDB Cluster (test-acc-tf-c-7674635970313731402): error updating MongoDB Cluster (test-acc-tf-c-7674635970313731402): timeout while waiting for state to become 'IDLE' (last state: 'UPDATING', timeout: 3h0m0s)
2026-08-16T03:34:01.4734644Z         
2026-08-16T03:34:01.4734957Z           with mongodbatlas_cluster.test,
2026-08-16T03:34:01.4735537Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2026-08-16T03:34:01.4736091Z           12: 	resource "mongodbatlas_cluster" "test" {
2026-08-16T03:34:01.4736409Z         
2026-08-16T03:38:15.6829544Z --- FAIL: TestAccCluster_RegionsConfig (11794.93s)
```

- 2026-08-17: MISSING
- 2026-08-18: MISSING
- 2026-08-19: MISSING
- 2026-08-20: MISSING
- 2026-08-21: MISSING
- 2026-08-22: MISSING
- 2026-08-23

### Error 2026-08-23T00:22:05+00:00
```
2026-08-23T00:22:05.2440007Z === RUN   TestAccCluster_RegionsConfig
2026-08-23T00:22:05.2454227Z === CONT  TestAccCluster_RegionsConfig
2026-08-23T03:33:13.9824903Z === NAME  TestAccCluster_RegionsConfig
2026-08-23T03:33:13.9825710Z     resource_cluster_test.go:1161: Step 2/3 error: Error running apply: exit status 1
2026-08-23T03:33:13.9826330Z         
2026-08-23T03:33:13.9828500Z         Error: error updating MongoDB Cluster (test-acc-tf-c-3413488854186024942): error updating MongoDB Cluster (test-acc-tf-c-3413488854186024942): timeout while waiting for state to become 'IDLE' (last state: 'UPDATING', timeout: 3h0m0s)
2026-08-23T03:33:13.9829975Z         
2026-08-23T03:33:13.9830465Z           with mongodbatlas_cluster.test,
2026-08-23T03:33:13.9831406Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2026-08-23T03:33:13.9832168Z           12: 	resource "mongodbatlas_cluster" "test" {
2026-08-23T03:33:13.9832495Z         
2026-08-23T03:36:46.9769789Z --- FAIL: TestAccCluster_RegionsConfig (11681.73s)
```

- 2026-08-24: MISSING
- 2026-08-25

### Error 2026-08-25T09:43:43+00:00
```
2026-08-25T09:43:43.7030841Z === RUN   TestAccCluster_RegionsConfig
2026-08-25T09:43:45.8989735Z === CONT  TestAccCluster_RegionsConfig
2026-08-25T12:53:56.7338408Z    test_step_number=2 test_name=TestAccCluster_RegionsConfig
2026-08-25T12:53:56.7343062Z     resource_cluster_test.go:1161: Step 2/3 error: Error running apply: exit status 1
2026-08-25T12:53:56.7343738Z         
2026-08-25T12:53:56.7345348Z         Error: error updating MongoDB Cluster (test-acc-tf-c-572523891459471284): error updating MongoDB Cluster (test-acc-tf-c-572523891459471284): timeout while waiting for state to become 'IDLE' (last state: 'UPDATING', timeout: 3h0m0s)
2026-08-25T12:53:56.7346237Z         
2026-08-25T12:53:56.7346593Z           with mongodbatlas_cluster.test,
2026-08-25T12:53:56.7347198Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2026-08-25T12:53:56.7347762Z           12: 	resource "mongodbatlas_cluster" "test" {
2026-08-25T12:53:56.7348323Z         
2026-08-25T12:56:59.7919339Z --- FAIL: TestAccCluster_RegionsConfig (11596.09s)
```

- 2026-08-26: MISSING
- 2026-08-27

### Error 2026-08-27T08:27:34+00:00
```
2026-08-27T08:27:34.4409478Z === RUN   TestAccCluster_RegionsConfig
2026-08-27T08:27:34.4439256Z === CONT  TestAccCluster_RegionsConfig
2026-08-27T09:30:41.9447999Z === NAME  TestAccCluster_RegionsConfig
2026-08-27T09:30:41.9448728Z     resource_cluster_test.go:1161: Step 2/3 error: Error running apply: exit status 1
2026-08-27T09:30:41.9449287Z         
2026-08-27T09:30:41.9451289Z         Error: error updating MongoDB Cluster (test-acc-tf-c-8282622164833867108): error updating MongoDB Cluster (test-acc-tf-c-8282622164833867108): Get "https://cloud-qa.mongodb.com/api/atlas/v2/groups/6a8ff4f46cc5b8fe40e16517/clusters/test-acc-tf-c-8282622164833867108": dial tcp: lookup cloud-qa.mongodb.com: i/o timeout
2026-08-27T09:30:41.9452487Z         
2026-08-27T09:30:41.9453008Z           with mongodbatlas_cluster.test,
2026-08-27T09:30:41.9453715Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2026-08-27T09:30:41.9454439Z           12: 	resource "mongodbatlas_cluster" "test" {
2026-08-27T09:30:41.9454851Z         
2026-08-27T09:34:15.5565714Z --- FAIL: TestAccCluster_RegionsConfig (4001.12s)
```

- 2026-08-28: MISSING
- 2026-08-29: MISSING
- 2026-08-30

### Error 2026-08-30T00:46:05+00:00
```
2026-08-30T00:46:05.4599705Z === RUN   TestAccCluster_RegionsConfig
2026-08-30T00:46:05.4822388Z === CONT  TestAccCluster_RegionsConfig
2026-08-30T03:57:16.1537890Z === NAME  TestAccCluster_RegionsConfig
2026-08-30T03:57:16.1538367Z     resource_cluster_test.go:1161: Step 2/3 error: Error running apply: exit status 1
2026-08-30T03:57:16.1538843Z         
2026-08-30T03:57:16.1540091Z         Error: error updating MongoDB Cluster (test-acc-tf-c-212003131696525359): error updating MongoDB Cluster (test-acc-tf-c-212003131696525359): timeout while waiting for state to become 'IDLE' (last state: 'UPDATING', timeout: 3h0m0s)
2026-08-30T03:57:16.1540844Z         
2026-08-30T03:57:16.1541198Z           with mongodbatlas_cluster.test,
2026-08-30T03:57:16.1541740Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2026-08-30T03:57:16.1542402Z           12: 	resource "mongodbatlas_cluster" "test" {
2026-08-30T03:57:16.1542779Z         
2026-08-30T04:00:19.2122859Z --- FAIL: TestAccCluster_RegionsConfig (11653.74s)
```

- 2026-08-31: MISSING
- 2026-09-01: MISSING
- 2026-09-02: MISSING
- 2026-09-03: MISSING
- 2026-09-04: MISSING
