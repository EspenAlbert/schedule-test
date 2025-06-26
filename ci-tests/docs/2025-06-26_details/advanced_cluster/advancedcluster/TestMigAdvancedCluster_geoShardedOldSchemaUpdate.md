# advanced_cluster/advancedcluster/TestMigAdvancedCluster_geoShardedOldSchemaUpdate Test Details
# Found 43 TestRuns in dev, qa from 2025-05-28 to 2025-06-26 from master branch: 1 unique tests, PASS(x 41) FAIL(x 2)
Success rate: 95.35%

## Timeline
2025-05-27: MISSING
### 2025-05-28
#### PASS 25 minutes
```
2025-05-28T00:38:00.2674650Z === RUN   TestMigAdvancedCluster_geoShardedOldSchemaUpdate
2025-05-28T01:23:14.8291877Z === CONT  TestMigAdvancedCluster_geoShardedOldSchemaUpdate
2025-05-28T01:49:10.0372035Z --- PASS: TestMigAdvancedCluster_geoShardedOldSchemaUpdate (1555.21s)
```
#### PASS 28 minutes
```
2025-05-28T08:37:14.0657207Z === RUN   TestMigAdvancedCluster_geoShardedOldSchemaUpdate
2025-05-28T09:06:19.2373722Z === CONT  TestMigAdvancedCluster_geoShardedOldSchemaUpdate
2025-05-28T09:34:23.3873909Z --- PASS: TestMigAdvancedCluster_geoShardedOldSchemaUpdate (1684.16s)
```
#### PASS 25 minutes
```
2025-05-28T12:22:08.1113649Z === RUN   TestMigAdvancedCluster_geoShardedOldSchemaUpdate
2025-05-28T12:51:02.8494723Z === CONT  TestMigAdvancedCluster_geoShardedOldSchemaUpdate
2025-05-28T13:16:04.4337642Z --- PASS: TestMigAdvancedCluster_geoShardedOldSchemaUpdate (1501.58s)
```
### 2025-05-29
#### PASS 40 minutes
```
2025-05-29T00:37:51.7059193Z === RUN   TestMigAdvancedCluster_geoShardedOldSchemaUpdate
2025-05-29T01:06:49.0017498Z === CONT  TestMigAdvancedCluster_geoShardedOldSchemaUpdate
2025-05-29T01:47:47.6611547Z --- PASS: TestMigAdvancedCluster_geoShardedOldSchemaUpdate (2458.67s)
```
#### PASS 21 minutes
```
2025-05-29T14:55:20.4589356Z === RUN   TestMigAdvancedCluster_geoShardedOldSchemaUpdate
2025-05-29T15:23:22.3314416Z === CONT  TestMigAdvancedCluster_geoShardedOldSchemaUpdate
2025-05-29T15:45:03.9826413Z --- PASS: TestMigAdvancedCluster_geoShardedOldSchemaUpdate (1301.66s)
```
### 2025-05-30
#### FAIL an hour
```
2025-05-30T00:38:14.8050969Z === RUN   TestMigAdvancedCluster_geoShardedOldSchemaUpdate
2025-05-30T01:07:54.5611628Z === CONT  TestMigAdvancedCluster_geoShardedOldSchemaUpdate
2025-05-30T02:32:52.2926033Z === NAME  TestMigAdvancedCluster_geoShardedOldSchemaUpdate
2025-05-30T02:32:52.2926881Z     resource_advanced_cluster_migration_test.go:81: Step 2/2 error: Error running apply: exit status 1
2025-05-30T02:32:52.2927512Z         
2025-05-30T02:32:52.2930393Z         Error: error updating advanced cluster (test-acc-tf-c-6198209048350752173): https://cloud-dev.mongodb.com/api/atlas/v2/groups/6838fdf43a84470fe9d508ff/clusters/test-acc-tf-c-6198209048350752173 PATCH: HTTP 400 Bad Request (Error code: "INSUFFICIENT_DISK_SPACE_ON_REMAINING_SHARDS") Detail: One or more shards are being removed that consume more disk space than that available on the remaining shards. Reason: Bad Request. Params: []
2025-05-30T02:32:52.2932220Z         
2025-05-30T02:32:52.2932556Z           with mongodbatlas_advanced_cluster.test,
2025-05-30T02:32:52.2933205Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-05-30T02:32:52.2933817Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-05-30T02:32:52.2934137Z         
2025-05-30T02:39:04.7739594Z --- FAIL: TestMigAdvancedCluster_geoShardedOldSchemaUpdate (5470.22s)
```
#### PASS 26 minutes
```
2025-05-30T07:33:39.5228745Z === RUN   TestMigAdvancedCluster_geoShardedOldSchemaUpdate
2025-05-30T08:01:07.3058247Z === CONT  TestMigAdvancedCluster_geoShardedOldSchemaUpdate
2025-05-30T08:27:10.2514488Z --- PASS: TestMigAdvancedCluster_geoShardedOldSchemaUpdate (1562.95s)
```
### 2025-05-31
#### PASS 28 minutes
```
2025-05-31T00:37:12.0734020Z === RUN   TestMigAdvancedCluster_geoShardedOldSchemaUpdate
2025-05-31T01:06:19.0719083Z === CONT  TestMigAdvancedCluster_geoShardedOldSchemaUpdate
2025-05-31T01:34:40.8669706Z --- PASS: TestMigAdvancedCluster_geoShardedOldSchemaUpdate (1701.81s)
```
### 2025-06-01
#### PASS 28 minutes
```
2025-06-01T00:41:15.5845431Z === RUN   TestMigAdvancedCluster_geoShardedOldSchemaUpdate
2025-06-01T01:09:45.0339169Z === CONT  TestMigAdvancedCluster_geoShardedOldSchemaUpdate
2025-06-01T01:38:16.2987554Z --- PASS: TestMigAdvancedCluster_geoShardedOldSchemaUpdate (1711.32s)
```
#### PASS 25 minutes
```
2025-06-01T04:50:10.3881226Z === RUN   TestMigAdvancedCluster_geoShardedOldSchemaUpdate
2025-06-01T05:18:55.6346365Z === CONT  TestMigAdvancedCluster_geoShardedOldSchemaUpdate
2025-06-01T05:44:47.6942106Z --- PASS: TestMigAdvancedCluster_geoShardedOldSchemaUpdate (1552.08s)
```
#### PASS 29 minutes
```
2025-06-01T08:59:11.9174465Z === RUN   TestMigAdvancedCluster_geoShardedOldSchemaUpdate
2025-06-01T09:28:31.6567833Z === CONT  TestMigAdvancedCluster_geoShardedOldSchemaUpdate
2025-06-01T09:58:23.1239857Z --- PASS: TestMigAdvancedCluster_geoShardedOldSchemaUpdate (1791.47s)
```
#### PASS 26 minutes
```
2025-06-01T13:08:30.6373246Z === RUN   TestMigAdvancedCluster_geoShardedOldSchemaUpdate
2025-06-01T13:37:35.7410596Z === CONT  TestMigAdvancedCluster_geoShardedOldSchemaUpdate
2025-06-01T14:04:11.3619604Z --- PASS: TestMigAdvancedCluster_geoShardedOldSchemaUpdate (1595.62s)
```
#### PASS 24 minutes
```
2025-06-01T17:17:43.7829511Z === RUN   TestMigAdvancedCluster_geoShardedOldSchemaUpdate
2025-06-01T17:46:42.8903417Z === CONT  TestMigAdvancedCluster_geoShardedOldSchemaUpdate
2025-06-01T18:10:56.0052276Z --- PASS: TestMigAdvancedCluster_geoShardedOldSchemaUpdate (1453.12s)
```
#### PASS 23 minutes
```
2025-06-01T21:26:10.4739367Z === RUN   TestMigAdvancedCluster_geoShardedOldSchemaUpdate
2025-06-01T21:54:01.2722577Z === CONT  TestMigAdvancedCluster_geoShardedOldSchemaUpdate
2025-06-01T22:17:19.1007085Z --- PASS: TestMigAdvancedCluster_geoShardedOldSchemaUpdate (1397.85s)
```
### 2025-06-02
#### PASS 27 minutes
```
2025-06-02T00:39:26.8868937Z === RUN   TestMigAdvancedCluster_geoShardedOldSchemaUpdate
2025-06-02T01:08:04.0343013Z === CONT  TestMigAdvancedCluster_geoShardedOldSchemaUpdate
2025-06-02T01:35:04.6982085Z --- PASS: TestMigAdvancedCluster_geoShardedOldSchemaUpdate (1620.67s)
```
#### PASS 23 minutes
```
2025-06-02T01:35:22.2999019Z === RUN   TestMigAdvancedCluster_geoShardedOldSchemaUpdate
2025-06-02T02:07:09.8522525Z === CONT  TestMigAdvancedCluster_geoShardedOldSchemaUpdate
2025-06-02T02:30:38.4590250Z --- PASS: TestMigAdvancedCluster_geoShardedOldSchemaUpdate (1408.61s)
```
#### PASS 25 minutes
```
2025-06-02T05:50:25.9121935Z === RUN   TestMigAdvancedCluster_geoShardedOldSchemaUpdate
2025-06-02T06:19:34.2079523Z === CONT  TestMigAdvancedCluster_geoShardedOldSchemaUpdate
2025-06-02T06:45:32.8978727Z --- PASS: TestMigAdvancedCluster_geoShardedOldSchemaUpdate (1558.70s)
```
### 2025-06-03
#### PASS 27 minutes
```
2025-06-03T00:38:34.0442542Z === RUN   TestMigAdvancedCluster_geoShardedOldSchemaUpdate
2025-06-03T01:08:35.0140533Z === CONT  TestMigAdvancedCluster_geoShardedOldSchemaUpdate
2025-06-03T01:35:58.3171952Z --- PASS: TestMigAdvancedCluster_geoShardedOldSchemaUpdate (1643.31s)
```
### 2025-06-04
#### PASS 28 minutes
```
2025-06-04T00:29:27.9321056Z === RUN   TestMigAdvancedCluster_geoShardedOldSchemaUpdate
2025-06-04T00:59:43.7191571Z === CONT  TestMigAdvancedCluster_geoShardedOldSchemaUpdate
2025-06-04T01:27:59.9340436Z --- PASS: TestMigAdvancedCluster_geoShardedOldSchemaUpdate (1696.17s)
```
### 2025-06-05
#### FAIL 3 minutes
```
2025-06-05T00:29:09.5478336Z === RUN   TestMigAdvancedCluster_geoShardedOldSchemaUpdate
2025-06-05T00:35:42.8406151Z === CONT  TestMigAdvancedCluster_geoShardedOldSchemaUpdate
2025-06-05T00:38:50.2673902Z === NAME  TestMigAdvancedCluster_geoShardedOldSchemaUpdate
2025-06-05T00:38:50.2675971Z     resource_advanced_cluster_migration_test.go:81: Step 1/2 error: Error running apply: exit status 1
2025-06-05T00:38:50.2676759Z         
2025-06-05T00:38:50.2679798Z         Error: error creating advanced cluster: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6840e4d3161ca93c1f052ea0/clusters/test-acc-tf-c-3858242294755027937 GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: []
2025-06-05T00:38:50.2681878Z         
2025-06-05T00:38:50.2682526Z           with mongodbatlas_advanced_cluster.test,
2025-06-05T00:38:50.2684140Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_advanced_cluster" "test":
2025-06-05T00:38:50.2685533Z           14: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-06-05T00:38:50.2686107Z         
2025-06-05T00:38:50.4222083Z --- FAIL: TestMigAdvancedCluster_geoShardedOldSchemaUpdate (187.60s)
```
### 2025-06-06
#### PASS 32 minutes
```
2025-06-06T00:30:30.7581562Z === RUN   TestMigAdvancedCluster_geoShardedOldSchemaUpdate
2025-06-06T01:06:43.1506670Z === CONT  TestMigAdvancedCluster_geoShardedOldSchemaUpdate
2025-06-06T01:39:26.9760352Z --- PASS: TestMigAdvancedCluster_geoShardedOldSchemaUpdate (1963.83s)
```
### 2025-06-07
#### PASS 30 minutes
```
2025-06-07T00:29:02.0598852Z === RUN   TestMigAdvancedCluster_geoShardedOldSchemaUpdate
2025-06-07T00:59:22.5593514Z === CONT  TestMigAdvancedCluster_geoShardedOldSchemaUpdate
2025-06-07T01:30:14.8787905Z --- PASS: TestMigAdvancedCluster_geoShardedOldSchemaUpdate (1852.34s)
```
### 2025-06-08
#### PASS 24 minutes
```
2025-06-08T00:32:19.7821418Z === RUN   TestMigAdvancedCluster_geoShardedOldSchemaUpdate
2025-06-08T00:59:27.3267435Z === CONT  TestMigAdvancedCluster_geoShardedOldSchemaUpdate
2025-06-08T01:24:18.5697914Z --- PASS: TestMigAdvancedCluster_geoShardedOldSchemaUpdate (1491.26s)
```
### 2025-06-09
#### PASS 43 minutes
```
2025-06-09T00:31:11.0473601Z === RUN   TestMigAdvancedCluster_geoShardedOldSchemaUpdate
2025-06-09T01:00:51.7743678Z === CONT  TestMigAdvancedCluster_geoShardedOldSchemaUpdate
2025-06-09T01:44:37.4346306Z --- PASS: TestMigAdvancedCluster_geoShardedOldSchemaUpdate (2625.66s)
```
### 2025-06-10
#### PASS 27 minutes
```
2025-06-10T00:38:11.3032478Z === RUN   TestMigAdvancedCluster_geoShardedOldSchemaUpdate
2025-06-10T01:07:33.6364281Z === CONT  TestMigAdvancedCluster_geoShardedOldSchemaUpdate
2025-06-10T01:35:04.6772687Z --- PASS: TestMigAdvancedCluster_geoShardedOldSchemaUpdate (1651.05s)
```
### 2025-06-11
#### PASS 29 minutes
```
2025-06-11T00:29:02.4444167Z === RUN   TestMigAdvancedCluster_geoShardedOldSchemaUpdate
2025-06-11T01:03:00.1268737Z === CONT  TestMigAdvancedCluster_geoShardedOldSchemaUpdate
2025-06-11T01:32:11.4297932Z --- PASS: TestMigAdvancedCluster_geoShardedOldSchemaUpdate (1751.31s)
```
#### PASS 35 minutes
```
2025-06-11T07:37:38.1253297Z === RUN   TestMigAdvancedCluster_geoShardedOldSchemaUpdate
2025-06-11T08:06:40.6177772Z === CONT  TestMigAdvancedCluster_geoShardedOldSchemaUpdate
2025-06-11T08:41:40.7750375Z --- PASS: TestMigAdvancedCluster_geoShardedOldSchemaUpdate (2100.17s)
```
### 2025-06-12
#### PASS 33 minutes
```
2025-06-12T00:28:46.6767819Z === RUN   TestMigAdvancedCluster_geoShardedOldSchemaUpdate
2025-06-12T01:02:47.4002098Z === CONT  TestMigAdvancedCluster_geoShardedOldSchemaUpdate
2025-06-12T01:36:24.5613109Z --- PASS: TestMigAdvancedCluster_geoShardedOldSchemaUpdate (2017.19s)
```
### 2025-06-13
#### PASS 29 minutes
```
2025-06-13T00:28:55.6423418Z === RUN   TestMigAdvancedCluster_geoShardedOldSchemaUpdate
2025-06-13T01:02:08.8086653Z === CONT  TestMigAdvancedCluster_geoShardedOldSchemaUpdate
2025-06-13T01:31:56.2784340Z --- PASS: TestMigAdvancedCluster_geoShardedOldSchemaUpdate (1787.47s)
```
### 2025-06-14
#### PASS 40 minutes
```
2025-06-14T00:28:17.5764218Z === RUN   TestMigAdvancedCluster_geoShardedOldSchemaUpdate
2025-06-14T01:32:10.2889070Z === CONT  TestMigAdvancedCluster_geoShardedOldSchemaUpdate
2025-06-14T02:13:05.4753514Z --- PASS: TestMigAdvancedCluster_geoShardedOldSchemaUpdate (2455.19s)
```
### 2025-06-15
#### PASS 25 minutes
```
2025-06-15T00:32:12.2737090Z === RUN   TestMigAdvancedCluster_geoShardedOldSchemaUpdate
2025-06-15T01:04:06.0297880Z === CONT  TestMigAdvancedCluster_geoShardedOldSchemaUpdate
2025-06-15T01:30:00.3833738Z --- PASS: TestMigAdvancedCluster_geoShardedOldSchemaUpdate (1554.36s)
```
### 2025-06-16
#### PASS 37 minutes
```
2025-06-16T00:30:23.3321348Z === RUN   TestMigAdvancedCluster_geoShardedOldSchemaUpdate
2025-06-16T01:04:53.8824975Z === CONT  TestMigAdvancedCluster_geoShardedOldSchemaUpdate
2025-06-16T01:42:10.6221457Z --- PASS: TestMigAdvancedCluster_geoShardedOldSchemaUpdate (2236.78s)
```
### 2025-06-17
#### PASS 35 minutes
```
2025-06-17T00:29:16.0239046Z === RUN   TestMigAdvancedCluster_geoShardedOldSchemaUpdate
2025-06-17T01:03:31.0340115Z === CONT  TestMigAdvancedCluster_geoShardedOldSchemaUpdate
2025-06-17T01:39:09.4283853Z --- PASS: TestMigAdvancedCluster_geoShardedOldSchemaUpdate (2138.40s)
```
### 2025-06-18
#### PASS 29 minutes
```
2025-06-18T00:29:23.1657303Z === RUN   TestMigAdvancedCluster_geoShardedOldSchemaUpdate
2025-06-18T00:59:11.4516311Z === CONT  TestMigAdvancedCluster_geoShardedOldSchemaUpdate
2025-06-18T01:28:49.9231736Z --- PASS: TestMigAdvancedCluster_geoShardedOldSchemaUpdate (1778.52s)
```
#### PASS 25 minutes
```
2025-06-18T07:29:11.4952660Z === RUN   TestMigAdvancedCluster_geoShardedOldSchemaUpdate
2025-06-18T07:59:36.5945114Z === CONT  TestMigAdvancedCluster_geoShardedOldSchemaUpdate
2025-06-18T08:25:27.2565660Z --- PASS: TestMigAdvancedCluster_geoShardedOldSchemaUpdate (1550.69s)
```
### 2025-06-19
#### PASS 53 minutes
```
2025-06-19T00:29:34.7854027Z === RUN   TestMigAdvancedCluster_geoShardedOldSchemaUpdate
2025-06-19T01:09:39.9736416Z === CONT  TestMigAdvancedCluster_geoShardedOldSchemaUpdate
2025-06-19T02:03:05.7723621Z --- PASS: TestMigAdvancedCluster_geoShardedOldSchemaUpdate (3205.80s)
```
### 2025-06-20
#### PASS 28 minutes
```
2025-06-20T00:29:02.3362753Z === RUN   TestMigAdvancedCluster_geoShardedOldSchemaUpdate
2025-06-20T01:03:39.2388895Z === CONT  TestMigAdvancedCluster_geoShardedOldSchemaUpdate
2025-06-20T01:31:56.3414756Z --- PASS: TestMigAdvancedCluster_geoShardedOldSchemaUpdate (1697.10s)
```
### 2025-06-21
#### PASS 27 minutes
```
2025-06-21T00:28:45.7628642Z === RUN   TestMigAdvancedCluster_geoShardedOldSchemaUpdate
2025-06-21T01:03:06.3793623Z === CONT  TestMigAdvancedCluster_geoShardedOldSchemaUpdate
2025-06-21T01:30:59.0544158Z --- PASS: TestMigAdvancedCluster_geoShardedOldSchemaUpdate (1672.68s)
```
### 2025-06-22
#### PASS 30 minutes
```
2025-06-22T00:32:02.2634320Z === RUN   TestMigAdvancedCluster_geoShardedOldSchemaUpdate
2025-06-22T01:05:07.9597915Z === CONT  TestMigAdvancedCluster_geoShardedOldSchemaUpdate
2025-06-22T01:35:21.1828849Z --- PASS: TestMigAdvancedCluster_geoShardedOldSchemaUpdate (1813.24s)
```
### 2025-06-23
#### PASS 25 minutes
```
2025-06-23T00:31:15.9030083Z === RUN   TestMigAdvancedCluster_geoShardedOldSchemaUpdate
2025-06-23T01:01:46.5292570Z === CONT  TestMigAdvancedCluster_geoShardedOldSchemaUpdate
2025-06-23T01:27:04.8082039Z --- PASS: TestMigAdvancedCluster_geoShardedOldSchemaUpdate (1518.30s)
```
### 2025-06-24
#### PASS 35 minutes
```
2025-06-24T00:29:15.0014893Z === RUN   TestMigAdvancedCluster_geoShardedOldSchemaUpdate
2025-06-24T01:00:52.0571539Z === CONT  TestMigAdvancedCluster_geoShardedOldSchemaUpdate
2025-06-24T01:35:59.8784383Z --- PASS: TestMigAdvancedCluster_geoShardedOldSchemaUpdate (2107.82s)
```
### 2025-06-25
#### PASS 25 minutes
```
2025-06-25T00:29:40.3805568Z === RUN   TestMigAdvancedCluster_geoShardedOldSchemaUpdate
2025-06-25T01:10:48.9197110Z === CONT  TestMigAdvancedCluster_geoShardedOldSchemaUpdate
2025-06-25T01:36:17.8559162Z --- PASS: TestMigAdvancedCluster_geoShardedOldSchemaUpdate (1528.95s)
```
### 2025-06-26
#### PASS 28 minutes
```
2025-06-26T00:29:17.2727695Z === RUN   TestMigAdvancedCluster_geoShardedOldSchemaUpdate
2025-06-26T01:00:07.3804343Z === CONT  TestMigAdvancedCluster_geoShardedOldSchemaUpdate
2025-06-26T01:28:20.7393664Z --- PASS: TestMigAdvancedCluster_geoShardedOldSchemaUpdate (1693.36s)
```