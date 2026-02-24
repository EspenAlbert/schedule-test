# network/privatelinkendpoint/TestAccPrivateLinkEndpoint_basicAzure Test Details
# Found 15 TestRuns in dev, qa from 2026-02-14 to 2026-02-24 from master branch: 1 unique tests, PASS(x 12) FAIL(x 3)
Success rate: 80.00%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-02-17 17:55](#error-2026-02-17t1755250000) | ATLAS_GENERAL_ERROR /api/atlas/v2/groups/6994a91434398663d0bc72b0/privateEndpoint/endpointService | dev | 1.07s
[2026-02-19 00:50](#error-2026-02-19t0050560000) | ATLAS_GENERAL_ERROR /api/atlas/v2/groups/69965bc45b4417cf65b83760/privateEndpoint/endpointService | dev | 1.03s
[2026-02-24 00:44](#error-2026-02-24t0044220000) | ATLAS_GENERAL_ERROR /api/atlas/v2/groups/699cf2a78dfec41eaa84abec/privateEndpoint/endpointService | dev | 1.02s

### Timeline
- 2026-01-25: MISSING
- 2026-01-26: MISSING
- 2026-01-27: MISSING
- 2026-01-28: MISSING
- 2026-01-29: MISSING
- 2026-01-30: MISSING
- 2026-01-31: MISSING
- 2026-02-01: MISSING
- 2026-02-02: MISSING
- 2026-02-03: MISSING
- 2026-02-04: MISSING
- 2026-02-05: MISSING
- 2026-02-06: MISSING
- 2026-02-07: MISSING
- 2026-02-08: MISSING
- 2026-02-09: MISSING
- 2026-02-10: MISSING
- 2026-02-11: MISSING
- 2026-02-12: MISSING
- 2026-02-13: MISSING
- 2026-02-14 PASS a minute
- 2026-02-15: MISSING
- 2026-02-16 PASS a minute
- 2026-02-17
  - PASS a minute
  - PASS a minute
  - FAIL a second

### Error 2026-02-17T17:55:25+00:00
```
2026-02-17T17:55:25.1262300Z === RUN   TestAccPrivateLinkEndpoint_basicAzure
2026-02-17T17:55:25.1267315Z === CONT  TestAccPrivateLinkEndpoint_basicAzure
2026-02-17T17:55:25.1282742Z === NAME  TestAccPrivateLinkEndpoint_basicAzure
2026-02-17T17:55:25.1283306Z     resource_test.go:59: Step 1/2 error: Error running apply: exit status 1
2026-02-17T17:55:25.1283711Z         
2026-02-17T17:55:25.1285542Z         Error: error creating MongoDB Private Endpoints Connection: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6994a91434398663d0bc72b0/privateEndpoint/endpointService POST: HTTP 400 Bad Request (Error code: "ATLAS_GENERAL_ERROR") Detail: Reason: No Capacity. Reason: Bad Request. Params: [No Capacity], BadRequestDetail: 
2026-02-17T17:55:25.1287428Z         
2026-02-17T17:55:25.1287928Z           with mongodbatlas_privatelink_endpoint.this,
2026-02-17T17:55:25.1288670Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_privatelink_endpoint" "this":
2026-02-17T17:55:25.1289492Z           12: 		resource "mongodbatlas_privatelink_endpoint" "this" {
2026-02-17T17:55:25.1290095Z         
2026-02-17T17:55:25.1290588Z --- FAIL: TestAccPrivateLinkEndpoint_basicAzure (1.73s)
```

- 2026-02-18 PASS a minute
- 2026-02-19

### Error 2026-02-19T00:50:56+00:00
```
2026-02-19T00:50:56.2056989Z === RUN   TestAccPrivateLinkEndpoint_basicAzure
2026-02-19T00:50:56.2064239Z === CONT  TestAccPrivateLinkEndpoint_basicAzure
2026-02-19T00:50:56.2083203Z === NAME  TestAccPrivateLinkEndpoint_basicAzure
2026-02-19T00:50:56.2083772Z     resource_test.go:59: Step 1/2 error: Error running apply: exit status 1
2026-02-19T00:50:56.2084197Z         
2026-02-19T00:50:56.2086068Z         Error: error creating MongoDB Private Endpoints Connection: https://cloud-dev.mongodb.com/api/atlas/v2/groups/69965bc45b4417cf65b83760/privateEndpoint/endpointService POST: HTTP 400 Bad Request (Error code: "ATLAS_GENERAL_ERROR") Detail: Reason: No Capacity. Reason: Bad Request. Params: [No Capacity], BadRequestDetail: 
2026-02-19T00:50:56.2087543Z         
2026-02-19T00:50:56.2087970Z           with mongodbatlas_privatelink_endpoint.this,
2026-02-19T00:50:56.2088716Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_privatelink_endpoint" "this":
2026-02-19T00:50:56.2089413Z           12: 		resource "mongodbatlas_privatelink_endpoint" "this" {
2026-02-19T00:50:56.2089780Z         
2026-02-19T00:50:56.2090081Z --- FAIL: TestAccPrivateLinkEndpoint_basicAzure (1.27s)
```

- 2026-02-20 PASS a minute
- 2026-02-21 PASS a minute
- 2026-02-22: MISSING
- 2026-02-23 PASS a minute
- 2026-02-24

### Error 2026-02-24T00:44:22+00:00
```
2026-02-24T00:44:22.7136797Z === RUN   TestAccPrivateLinkEndpoint_basicAzure
2026-02-24T00:44:22.7145056Z === CONT  TestAccPrivateLinkEndpoint_basicAzure
2026-02-24T00:44:22.7180193Z === NAME  TestAccPrivateLinkEndpoint_basicAzure
2026-02-24T00:44:22.7180771Z     resource_test.go:59: Step 1/2 error: Error running apply: exit status 1
2026-02-24T00:44:22.7181179Z         
2026-02-24T00:44:22.7183281Z         Error: error creating MongoDB Private Endpoints Connection: https://cloud-dev.mongodb.com/api/atlas/v2/groups/699cf2a78dfec41eaa84abec/privateEndpoint/endpointService POST: HTTP 400 Bad Request (Error code: "ATLAS_GENERAL_ERROR") Detail: Reason: No Capacity. Reason: Bad Request. Params: [No Capacity], BadRequestDetail: 
2026-02-24T00:44:22.7184591Z         
2026-02-24T00:44:22.7185021Z           with mongodbatlas_privatelink_endpoint.this,
2026-02-24T00:44:22.7185859Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_privatelink_endpoint" "this":
2026-02-24T00:44:22.7186606Z           12: 		resource "mongodbatlas_privatelink_endpoint" "this" {
2026-02-24T00:44:22.7186967Z         
2026-02-24T00:44:22.7199512Z    test_terraform_path=/home/runner/work/_temp/2dd412e9-ae55-484f-bc47-687073503b38/terraform
2026-02-24T00:44:22.7207708Z --- FAIL: TestAccPrivateLinkEndpoint_basicAzure (1.21s)
```


## QA Environment
### Timeline
- 2026-01-25: MISSING
- 2026-01-26: MISSING
- 2026-01-27: MISSING
- 2026-01-28: MISSING
- 2026-01-29: MISSING
- 2026-01-30: MISSING
- 2026-01-31: MISSING
- 2026-02-01: MISSING
- 2026-02-02: MISSING
- 2026-02-03: MISSING
- 2026-02-04: MISSING
- 2026-02-05: MISSING
- 2026-02-06: MISSING
- 2026-02-07: MISSING
- 2026-02-08: MISSING
- 2026-02-09: MISSING
- 2026-02-10: MISSING
- 2026-02-11: MISSING
- 2026-02-12: MISSING
- 2026-02-13: MISSING
- 2026-02-14: MISSING
- 2026-02-15 PASS a minute
- 2026-02-16: MISSING
- 2026-02-17
  - PASS a minute
  - PASS a minute
- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20: MISSING
- 2026-02-21: MISSING
- 2026-02-22 PASS a minute
- 2026-02-23: MISSING
- 2026-02-24: MISSING
