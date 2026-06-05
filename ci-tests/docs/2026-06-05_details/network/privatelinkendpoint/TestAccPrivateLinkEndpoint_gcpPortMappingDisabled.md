# network/privatelinkendpoint/TestAccPrivateLinkEndpoint_gcpPortMappingDisabled Test Details
# Found 31 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 29) FAIL(x 2)
Success rate: 93.55%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-05-08 01:07](#error-2026-05-08t0107180000) | ATLAS_GENERAL_ERROR /api/atlas/v2/groups/69fd344f085055a4bc255af6/privateEndpoint/endpointService | dev | 2.04s
[2026-05-11 01:10](#error-2026-05-11t0110420000) | ATLAS_GENERAL_ERROR /api/atlas/v2/groups/6a01299f9b4177680380f78a/privateEndpoint/endpointService | dev | 2.03s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07
  - PASS 7 minutes
  - PASS 6 minutes
- 2026-05-08

### Error 2026-05-08T01:07:18+00:00
```
2026-05-08T01:07:18.5266082Z === RUN   TestAccPrivateLinkEndpoint_gcpPortMappingDisabled
2026-05-08T01:07:18.5272064Z === CONT  TestAccPrivateLinkEndpoint_gcpPortMappingDisabled
2026-05-08T01:07:18.5323568Z === NAME  TestAccPrivateLinkEndpoint_gcpPortMappingDisabled
2026-05-08T01:07:18.5324146Z     resource_test.go:133: Step 1/2 error: Error running apply: exit status 1
2026-05-08T01:07:18.5324553Z         
2026-05-08T01:07:18.5326293Z         Error: error creating MongoDB Private Endpoints Connection: https://cloud-dev.mongodb.com/api/atlas/v2/groups/69fd344f085055a4bc255af6/privateEndpoint/endpointService POST: HTTP 400 Bad Request (Error code: "ATLAS_GENERAL_ERROR") Detail: Reason: No Capacity. Reason: Bad Request. Params: [No Capacity], BadRequestDetail: 
2026-05-08T01:07:18.5327650Z         
2026-05-08T01:07:18.5328042Z           with mongodbatlas_privatelink_endpoint.this,
2026-05-08T01:07:18.5328775Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_privatelink_endpoint" "this":
2026-05-08T01:07:18.5329467Z           12: 		resource "mongodbatlas_privatelink_endpoint" "this" {
2026-05-08T01:07:18.5329827Z         
2026-05-08T01:07:18.5330362Z --- FAIL: TestAccPrivateLinkEndpoint_gcpPortMappingDisabled (2.42s)
```

- 2026-05-09 PASS 21 minutes
- 2026-05-10: MISSING
- 2026-05-11

### Error 2026-05-11T01:10:42+00:00
```
2026-05-11T01:10:42.6788243Z === RUN   TestAccPrivateLinkEndpoint_gcpPortMappingDisabled
2026-05-11T01:10:42.6794355Z === CONT  TestAccPrivateLinkEndpoint_gcpPortMappingDisabled
2026-05-11T01:10:42.6834857Z === NAME  TestAccPrivateLinkEndpoint_gcpPortMappingDisabled
2026-05-11T01:10:42.6835759Z     resource_test.go:133: Step 1/2 error: Error running apply: exit status 1
2026-05-11T01:10:42.6836202Z         
2026-05-11T01:10:42.6838037Z         Error: error creating MongoDB Private Endpoints Connection: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a01299f9b4177680380f78a/privateEndpoint/endpointService POST: HTTP 400 Bad Request (Error code: "ATLAS_GENERAL_ERROR") Detail: Reason: No Capacity. Reason: Bad Request. Params: [No Capacity], BadRequestDetail: 
2026-05-11T01:10:42.6839324Z         
2026-05-11T01:10:42.6839718Z           with mongodbatlas_privatelink_endpoint.this,
2026-05-11T01:10:42.6840464Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_privatelink_endpoint" "this":
2026-05-11T01:10:42.6841184Z           12: 		resource "mongodbatlas_privatelink_endpoint" "this" {
2026-05-11T01:10:42.6841575Z         
2026-05-11T01:10:42.6848803Z    test_terraform_path=/home/runner/work/_temp/bb40a24f-923b-4d12-b6e7-d7c1957c0c63/terraform test_step_number=1 test_working_directory=/tmp/plugintest1732737443
2026-05-11T01:10:42.6857415Z --- FAIL: TestAccPrivateLinkEndpoint_gcpPortMappingDisabled (2.32s)
```

- 2026-05-12 PASS 5 minutes
- 2026-05-13 PASS 6 minutes
- 2026-05-14 PASS 6 minutes
- 2026-05-15 PASS 6 minutes
- 2026-05-16 PASS 6 minutes
- 2026-05-17: MISSING
- 2026-05-18 PASS 7 minutes
- 2026-05-19 PASS 6 minutes
- 2026-05-20 PASS 8 minutes
- 2026-05-21 PASS 6 minutes
- 2026-05-22 PASS 6 minutes
- 2026-05-23 PASS 6 minutes
- 2026-05-24: MISSING
- 2026-05-25 PASS 6 minutes
- 2026-05-26 PASS 6 minutes
- 2026-05-27 PASS 7 minutes
- 2026-05-28 PASS 7 minutes
- 2026-05-29 PASS 6 minutes
- 2026-05-30 PASS 6 minutes
- 2026-05-31: MISSING
- 2026-06-01 PASS 6 minutes
- 2026-06-02 PASS 7 minutes
- 2026-06-03 PASS 6 minutes
- 2026-06-04 PASS 6 minutes
- 2026-06-05 PASS 6 minutes

## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS 16 minutes
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS 6 minutes
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS 6 minutes
- 2026-05-25: MISSING
- 2026-05-26: MISSING
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS 6 minutes
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING
